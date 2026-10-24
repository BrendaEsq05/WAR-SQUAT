"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CONSULTATION_TYPES,
  type ConsultationTypeId,
} from "@/lib/calendar/types-client";
import { cn } from "@/lib/utils";

type Slot = { start: string; end: string; label: string };

type SlotsResponse = {
  mode: "google" | "mock";
  timezone: string;
  slots: Slot[];
  message?: string;
  consultation?: { id: string; label: string; durationMinutes: number };
  error?: string;
};

type BookResponse = {
  ok?: boolean;
  mode?: string;
  when?: string;
  message?: string;
  htmlLink?: string;
  error?: string;
};

function dayKey(iso: string) {
  return format(parseISO(iso), "yyyy-MM-dd");
}

export function BookingForm() {
  const [type, setType] = useState<ConsultationTypeId>("primera");
  const [slotsData, setSlotsData] = useState<SlotsResponse | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedStart, setSelectedStart] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [notes, setNotes] = useState("");
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<BookResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoadingSlots(true);
    setSelectedStart(null);
    setResult(null);

    fetch(`/api/calendar/slots?type=${type}`)
      .then(async (res) => {
        const data = (await res.json()) as SlotsResponse;
        if (cancelled) return;
        setSlotsData(data);
        const first = data.slots[0];
        setSelectedDay(first ? dayKey(first.start) : null);
      })
      .catch(() => {
        if (!cancelled) {
          setSlotsData({
            mode: "mock",
            timezone: "America/Mexico_City",
            slots: [],
            error: "No se pudieron cargar horarios",
          });
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingSlots(false);
      });

    return () => {
      cancelled = true;
    };
  }, [type]);

  const days = useMemo(() => {
    if (!slotsData?.slots.length) return [];
    const map = new Map<string, Slot[]>();
    for (const slot of slotsData.slots) {
      const key = dayKey(slot.start);
      const list = map.get(key) || [];
      list.push(slot);
      map.set(key, list);
    }
    return Array.from(map.entries()).map(([key, daySlots]) => ({
      key,
      label: format(parseISO(daySlots[0].start), "EEE d MMM", { locale: es }),
      slots: daySlots,
    }));
  }, [slotsData]);

  const daySlots = useMemo(() => {
    if (!selectedDay) return [];
    return days.find((d) => d.key === selectedDay)?.slots || [];
  }, [days, selectedDay]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!selectedStart) {
      setError("Elige un horario disponible.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/calendar/book", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type,
            start: selectedStart,
            name,
            email,
            phone,
            goal,
            notes,
          }),
        });
        const data = (await res.json()) as BookResponse;
        if (!res.ok) {
          setError(data.error || "No se pudo agendar");
          return;
        }
        setResult(data);
      } catch {
        setError("Error de red al agendar. Intenta de nuevo.");
      }
    });
  }

  if (result?.ok) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto size-12 text-primary" />
        <h2 className="mt-4 font-heading text-2xl font-bold text-moss-deep">
          Cita confirmada
        </h2>
        <p className="mt-2 text-muted-foreground">{result.message}</p>
        {result.when && (
          <p className="mt-4 font-heading text-lg font-semibold text-primary">
            {result.when} · America/Mexico_City
          </p>
        )}
        {result.htmlLink && (
          <a
            href={result.htmlLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-primary underline"
          >
            Ver en Google Calendar
          </a>
        )}
        <Button
          className="mt-8"
          variant="outline"
          onClick={() => {
            setResult(null);
            setSelectedStart(null);
            setName("");
            setEmail("");
            setPhone("");
            setGoal("");
            setNotes("");
          }}
        >
          Agendar otra cita
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      {slotsData?.message && (
        <p className="rounded-lg border border-volt/40 bg-volt/15 px-4 py-3 text-sm text-moss-deep">
          {slotsData.message}
        </p>
      )}

      <fieldset>
        <legend className="font-heading text-lg font-semibold text-moss-deep">
          1. Tipo de cita
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {CONSULTATION_TYPES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setType(item.id)}
              className={cn(
                "rounded-xl border px-4 py-4 text-left transition-colors",
                type === item.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary/40"
              )}
            >
              <span className="block font-heading font-semibold">{item.label}</span>
              <span
                className={cn(
                  "mt-1 block text-xs leading-snug",
                  type === item.id ? "text-primary-foreground/80" : "text-muted-foreground"
                )}
              >
                {item.description}
              </span>
              <span
                className={cn(
                  "mt-2 block text-xs font-medium",
                  type === item.id ? "text-volt" : "text-primary"
                )}
              >
                {item.durationMinutes} min
              </span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-heading text-lg font-semibold text-moss-deep">
          2. Día y hora
        </legend>
        {loadingSlots ? (
          <div className="mt-6 flex items-center gap-2 text-muted-foreground">
            <Loader2 className="size-4 animate-spin" />
            Cargando disponibilidad…
          </div>
        ) : days.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            No hay horarios libres en las próximas dos semanas. Escribe a Hirox
            o vuelve más tarde.
          </p>
        ) : (
          <>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {days.map((day) => (
                <button
                  key={day.key}
                  type="button"
                  onClick={() => {
                    setSelectedDay(day.key);
                    setSelectedStart(null);
                  }}
                  className={cn(
                    "shrink-0 rounded-lg border px-3 py-2 text-sm capitalize transition-colors",
                    selectedDay === day.key
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card hover:border-primary/40"
                  )}
                >
                  {day.label}
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
              {daySlots.map((slot) => (
                <button
                  key={slot.start}
                  type="button"
                  onClick={() => setSelectedStart(slot.start)}
                  className={cn(
                    "rounded-lg border py-2.5 font-heading text-sm font-semibold transition-colors",
                    selectedStart === slot.start
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-card hover:border-primary/50"
                  )}
                >
                  {slot.label}
                </button>
              ))}
            </div>
          </>
        )}
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-heading text-lg font-semibold text-moss-deep">
          3. Tus datos
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono (opcional)</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="WhatsApp o móvil"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="goal">Objetivo principal</Label>
            <Input
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Ej. diabetes, peso, estética…"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="notes">Notas</Label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Condiciones, horarios preferidos, dudas…"
            rows={3}
          />
        </div>
      </fieldset>

      {error && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={pending || loadingSlots}
        className="h-12 w-full bg-primary text-base font-semibold sm:w-auto sm:min-w-56"
      >
        {pending ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Agendando…
          </>
        ) : (
          "Confirmar cita"
        )}
      </Button>
    </form>
  );
}

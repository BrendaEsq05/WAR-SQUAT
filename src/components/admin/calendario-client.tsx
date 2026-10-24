"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Link2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Status = {
  configured: boolean;
  connected: boolean;
  email: string | null;
  connectedAt: string | null;
  mode: "google" | "mock";
};

export function AdminCalendarioClient() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status | null>(null);
  const [secret, setSecret] = useState("");
  const [loading, setLoading] = useState(true);

  const connectedFlag = searchParams.get("connected");
  const errorFlag = searchParams.get("error");

  useEffect(() => {
    fetch("/api/calendar/status")
      .then((r) => r.json())
      .then((data: Status) => setStatus(data))
      .finally(() => setLoading(false));
  }, [connectedFlag]);

  return (
    <div className="mx-auto max-w-xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Admin
      </p>
      <h1 className="mt-2 font-heading text-3xl font-bold text-moss-deep sm:text-4xl">
        Google Calendar
      </h1>
      <p className="mt-3 text-muted-foreground">
        Conecta la cuenta de Google de Hirox para que las citas de la app se
        creen automáticamente en su calendario.
      </p>

      {connectedFlag && (
        <p className="mt-6 flex items-start gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-moss-deep">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
          Calendario conectado correctamente.
        </p>
      )}
      {errorFlag && (
        <p className="mt-6 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Error al conectar: {errorFlag}
        </p>
      )}

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        {loading ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="size-4 animate-spin" />
            Revisando estado…
          </div>
        ) : (
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Credenciales OAuth</dt>
              <dd className="font-medium">
                {status?.configured ? "Configuradas" : "Pendientes (.env.local)"}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Calendario</dt>
              <dd className="font-medium">
                {status?.connected ? "Conectado" : "No conectado (modo demo)"}
              </dd>
            </div>
            {status?.email && (
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Cuenta</dt>
                <dd className="font-medium">{status.email}</dd>
              </div>
            )}
          </dl>
        )}

        <div className="mt-6 space-y-3 border-t border-border pt-6">
          <Label htmlFor="secret">Clave admin (ADMIN_SECRET)</Label>
          <Input
            id="secret"
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Tu clave secreta"
          />
          <Button
            className="w-full bg-primary font-semibold"
            disabled={!secret || !status?.configured}
            onClick={() => {
              window.location.href = `/api/calendar/auth?secret=${encodeURIComponent(secret)}`;
            }}
          >
            <Link2 className="mr-2 size-4" />
            Conectar Google Calendar
          </Button>
          {!status?.configured && (
            <p className="text-xs text-muted-foreground">
              Copia <code className="rounded bg-muted px-1">.env.example</code> a{" "}
              <code className="rounded bg-muted px-1">.env.local</code>, llena
              Client ID/Secret de Google Cloud y reinicia el servidor.
            </p>
          )}
        </div>
      </div>

      <ol className="mt-8 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
        <li>Crea un proyecto en Google Cloud Console.</li>
        <li>Activa la API de Google Calendar.</li>
        <li>
          Crea OAuth 2.0 (app web) y agrega el redirect URI de{" "}
          <code className="rounded bg-muted px-1">.env.example</code>.
        </li>
        <li>Pega Client ID y Secret en .env.local y conecta aquí.</li>
      </ol>
    </div>
  );
}

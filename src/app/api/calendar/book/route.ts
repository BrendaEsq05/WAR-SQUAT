import { NextRequest, NextResponse } from "next/server";
import { addMinutes, format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import {
  BOOKING_TIMEZONE,
  CONSULTATION_TYPES,
  isGoogleConfigured,
  type ConsultationTypeId,
} from "@/lib/calendar/config";
import { createCalendarEvent } from "@/lib/calendar/google";
import { isCalendarConnected } from "@/lib/calendar/tokens";
import { promises as fs } from "fs";
import path from "path";

type BookBody = {
  type: ConsultationTypeId;
  start: string;
  name: string;
  email: string;
  phone?: string;
  goal?: string;
  notes?: string;
};

async function saveLocalBooking(payload: Record<string, unknown>) {
  const file = path.join(process.cwd(), ".data", "bookings.json");
  await fs.mkdir(path.dirname(file), { recursive: true });
  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await fs.readFile(file, "utf8")) as unknown[];
  } catch {
    existing = [];
  }
  existing.push({ ...payload, savedAt: new Date().toISOString() });
  await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf8");
}

export async function POST(request: NextRequest) {
  let body: BookBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { type, start, name, email, phone, goal, notes } = body;

  if (!type || !start || !name?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios (tipo, horario, nombre, correo)." },
      { status: 400 }
    );
  }

  const consultation = CONSULTATION_TYPES.find((t) => t.id === type);
  if (!consultation) {
    return NextResponse.json({ error: "Tipo de cita inválido" }, { status: 400 });
  }

  const startDate = new Date(start);
  if (Number.isNaN(startDate.getTime())) {
    return NextResponse.json({ error: "Horario inválido" }, { status: 400 });
  }

  const endDate = addMinutes(startDate, consultation.durationMinutes);
  const local = toZonedTime(startDate, BOOKING_TIMEZONE);
  const whenLabel = format(local, "dd/MM/yyyy HH:mm");

  const description = [
    `Cita Hirox — ${consultation.label}`,
    `Cliente: ${name.trim()}`,
    `Correo: ${email.trim()}`,
    phone ? `Teléfono: ${phone.trim()}` : null,
    goal ? `Objetivo: ${goal.trim()}` : null,
    notes ? `Notas: ${notes.trim()}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const connected =
    isGoogleConfigured() && (await isCalendarConnected());

  if (connected) {
    try {
      const event = await createCalendarEvent({
        summary: `Hirox · ${consultation.label} · ${name.trim()}`,
        description,
        start: startDate,
        end: endDate,
        attendeeEmail: email.trim(),
        attendeeName: name.trim(),
      });

      return NextResponse.json({
        ok: true,
        mode: "google",
        eventId: event.id,
        htmlLink: event.htmlLink,
        when: whenLabel,
        message:
          "Cita agendada. Se creó el evento en Google Calendar y se envió invitación al correo.",
      });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        {
          error:
            "No se pudo crear el evento en Google Calendar. Intenta de nuevo o contacta a Hirox.",
        },
        { status: 502 }
      );
    }
  }

  await saveLocalBooking({
    type,
    start: startDate.toISOString(),
    end: endDate.toISOString(),
    name: name.trim(),
    email: email.trim(),
    phone,
    goal,
    notes,
    mode: "mock",
  });

  return NextResponse.json({
    ok: true,
    mode: "mock",
    when: whenLabel,
    message:
      "Cita registrada en modo demo. Cuando conectes Google Calendar, las nuevas citas aparecerán ahí automáticamente.",
  });
}

import { NextRequest, NextResponse } from "next/server";
import { connection } from "next/server";
import { addMinutes, format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import {
  BOOKING_TIMEZONE,
  CONSULTATION_TYPES,
  type ConsultationTypeId,
} from "@/lib/calendar/config";
import { WHATSAPP_NUMBER } from "@/lib/contact";
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
  try {
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
    return true;
  } catch (err) {
    console.warn("No se pudo guardar booking local:", err);
    return false;
  }
}

function buildWhatsappUrl(input: {
  consultationLabel: string;
  whenLabel: string;
  name: string;
  email: string;
  phone?: string;
  goal?: string;
  notes?: string;
}) {
  const lines = [
    "Hola WAR SQUAD, quiero confirmar mi cita:",
    "",
    `• Tipo: ${input.consultationLabel}`,
    `• Fecha y hora: ${input.whenLabel} (Torreón)`,
    `• Nombre: ${input.name}`,
    `• Correo: ${input.email}`,
    input.phone ? `• Teléfono: ${input.phone}` : null,
    input.goal ? `• Objetivo: ${input.goal}` : null,
    input.notes ? `• Notas: ${input.notes}` : null,
  ].filter(Boolean);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export async function POST(request: NextRequest) {
  await connection();

  try {
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
      return NextResponse.json(
        { error: "Tipo de cita inválido" },
        { status: 400 }
      );
    }

    const startDate = new Date(start);
    if (Number.isNaN(startDate.getTime())) {
      return NextResponse.json({ error: "Horario inválido" }, { status: 400 });
    }

    const endDate = addMinutes(startDate, consultation.durationMinutes);
    const local = toZonedTime(startDate, BOOKING_TIMEZONE);
    const whenLabel = format(local, "dd/MM/yyyy HH:mm");

    await saveLocalBooking({
      type,
      start: startDate.toISOString(),
      end: endDate.toISOString(),
      name: name.trim(),
      email: email.trim(),
      phone,
      goal,
      notes,
      mode: "whatsapp",
    });

    const whatsappUrl = buildWhatsappUrl({
      consultationLabel: consultation.label,
      whenLabel,
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim(),
      goal: goal?.trim(),
      notes: notes?.trim(),
    });

    return NextResponse.json({
      ok: true,
      mode: "whatsapp",
      when: whenLabel,
      whatsappUrl,
      message:
        "Horario apartado. Confírmalo por WhatsApp para que WAR SQUAD lo reserve.",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "No se pudo agendar la cita. Intenta de nuevo." },
      { status: 500 }
    );
  }
}

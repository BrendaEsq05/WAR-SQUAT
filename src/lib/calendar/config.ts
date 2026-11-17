export const BOOKING_TIMEZONE =
  process.env.BOOKING_TIMEZONE || "America/Mexico_City";

export const SLOT_DURATION_MINUTES = 60;

/** Solo viernes y sábado (getDay: 5 = vie, 6 = sáb) */
export const WORK_DAYS = [5, 6] as const;

/** Horario local por día (fin exclusivo en horas) */
export const WORK_HOURS_BY_DAY: Record<number, { start: number; end: number }[]> =
  {
    // Viernes 11:00–15:00
    5: [{ start: 11, end: 15 }],
    // Sábado 9:00–13:00
    6: [{ start: 9, end: 13 }],
  };

export {
  CONSULTATION_TYPES,
  type ConsultationTypeId,
} from "./types-client";

export function isGoogleConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
  );
}

export function getAppUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:4317";
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withProtocol.replace(/\/$/, "");
}

export function getRedirectUri(): string {
  return (
    process.env.GOOGLE_REDIRECT_URI ||
    `${getAppUrl()}/api/calendar/callback`
  );
}

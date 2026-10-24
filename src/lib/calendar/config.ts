export const BOOKING_TIMEZONE =
  process.env.BOOKING_TIMEZONE || "America/Mexico_City";

export const SLOT_DURATION_MINUTES = 60;

/** Horario laboral local (24h) — lunes a sábado */
export const WORK_DAYS = [1, 2, 3, 4, 5, 6] as const; // Mon–Sat
export const WORK_HOURS = [
  { start: 9, end: 13 },
  { start: 16, end: 20 },
] as const;

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
  return (
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:4317"
  ).replace(/\/$/, "");
}

export function getRedirectUri(): string {
  return (
    process.env.GOOGLE_REDIRECT_URI ||
    `${getAppUrl()}/api/calendar/callback`
  );
}

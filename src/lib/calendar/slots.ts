import {
  addDays,
  addMinutes,
  format,
  isBefore,
  parseISO,
  startOfDay,
} from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";
import {
  BOOKING_TIMEZONE,
  SLOT_DURATION_MINUTES,
  WORK_DAYS,
  WORK_HOURS,
  isGoogleConfigured,
} from "./config";
import { getBusyIntervals, type BusyInterval } from "./google";
import { isCalendarConnected } from "./tokens";

export type TimeSlot = {
  start: string; // ISO
  end: string; // ISO
  label: string;
};

function overlaps(aStart: Date, aEnd: Date, busy: BusyInterval[]): boolean {
  return busy.some(
    (b) => aStart < b.end && aEnd > b.start
  );
}

function buildDaySlots(dayLocal: Date, durationMinutes: number): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const y = dayLocal.getFullYear();
  const m = dayLocal.getMonth();
  const d = dayLocal.getDate();

  for (const block of WORK_HOURS) {
    for (let hour = block.start; hour < block.end; hour++) {
      for (let minute = 0; minute < 60; minute += durationMinutes) {
        if (hour === block.end - 1 && minute + durationMinutes > 60) break;
        const localStart = new Date(y, m, d, hour, minute, 0, 0);
        const localEnd = addMinutes(localStart, durationMinutes);
        const endHour =
          localEnd.getHours() + localEnd.getMinutes() / 60;
        if (endHour > block.end + 0.001) continue;

        const startUtc = fromZonedTime(localStart, BOOKING_TIMEZONE);
        const endUtc = fromZonedTime(localEnd, BOOKING_TIMEZONE);

        slots.push({
          start: startUtc.toISOString(),
          end: endUtc.toISOString(),
          label: format(localStart, "HH:mm"),
        });
      }
    }
  }

  return slots;
}

export async function getAvailableSlots(options: {
  fromDate?: string;
  daysAhead?: number;
  durationMinutes?: number;
}): Promise<{
  mode: "google" | "mock";
  timezone: string;
  slots: TimeSlot[];
  message?: string;
}> {
  const daysAhead = options.daysAhead ?? 14;
  const durationMinutes = options.durationMinutes ?? SLOT_DURATION_MINUTES;
  const now = new Date();
  const nowLocal = toZonedTime(now, BOOKING_TIMEZONE);

  const startLocal = options.fromDate
    ? toZonedTime(parseISO(options.fromDate), BOOKING_TIMEZONE)
    : nowLocal;

  const rangeStart = startOfDay(startLocal);
  const rangeEnd = addDays(rangeStart, daysAhead);

  const connected =
    isGoogleConfigured() && (await isCalendarConnected());

  let busy: BusyInterval[] = [];
  if (connected) {
    try {
      busy = await getBusyIntervals(
        fromZonedTime(rangeStart, BOOKING_TIMEZONE),
        fromZonedTime(rangeEnd, BOOKING_TIMEZONE)
      );
    } catch (err) {
      console.error("freeBusy error", err);
      return {
        mode: "mock",
        timezone: BOOKING_TIMEZONE,
        slots: [],
        message:
          "No se pudo consultar Google Calendar. Revisa la conexión en Admin.",
      };
    }
  }

  const slots: TimeSlot[] = [];
  for (let i = 0; i < daysAhead; i++) {
    const day = addDays(rangeStart, i);
    const weekday = day.getDay(); // 0 Sun
    if (!WORK_DAYS.includes(weekday as (typeof WORK_DAYS)[number])) continue;

    for (const slot of buildDaySlots(day, durationMinutes)) {
      const start = new Date(slot.start);
      const end = new Date(slot.end);
      if (!isBefore(now, start)) continue;
      if (overlaps(start, end, busy)) continue;
      slots.push(slot);
    }
  }

  return {
    mode: connected ? "google" : "mock",
    timezone: BOOKING_TIMEZONE,
    slots,
    message: connected
      ? undefined
      : "Modo demo: horarios simulados. Conecta Google Calendar en /admin/calendario para sincronizar citas reales.",
  };
}

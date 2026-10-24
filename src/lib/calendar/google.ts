import { google } from "googleapis";
import {
  BOOKING_TIMEZONE,
  getRedirectUri,
  isGoogleConfigured,
} from "./config";
import { readTokens, writeTokens, type GoogleTokens } from "./tokens";

export function createOAuthClient() {
  if (!isGoogleConfigured()) {
    throw new Error("Google OAuth no está configurado");
  }

  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    getRedirectUri()
  );
}

export function getAuthUrl(state?: string) {
  const client = createOAuthClient();
  return client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/calendar.events",
      "https://www.googleapis.com/auth/calendar.readonly",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    state,
  });
}

export async function exchangeCode(code: string): Promise<GoogleTokens> {
  const client = createOAuthClient();
  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);

  let email: string | undefined;
  try {
    const oauth2 = google.oauth2({ version: "v2", auth: client });
    const me = await oauth2.userinfo.get();
    email = me.data.email ?? undefined;
  } catch {
    // email is nice-to-have
  }

  const stored: GoogleTokens = {
    ...tokens,
    email,
    connectedAt: new Date().toISOString(),
  };
  await writeTokens(stored);
  return stored;
}

export async function getAuthedClient() {
  const tokens = await readTokens();
  if (!tokens?.refresh_token && !tokens?.access_token) {
    return null;
  }

  const client = createOAuthClient();
  client.setCredentials(tokens);

  client.on("tokens", async (fresh) => {
    const current = (await readTokens()) || {};
    await writeTokens({
      ...current,
      ...fresh,
      refresh_token: fresh.refresh_token || current.refresh_token,
    });
  });

  return client;
}

export type BusyInterval = { start: Date; end: Date };

export async function getBusyIntervals(
  timeMin: Date,
  timeMax: Date
): Promise<BusyInterval[]> {
  const auth = await getAuthedClient();
  if (!auth) return [];

  const calendar = google.calendar({ version: "v3", auth });
  const res = await calendar.freebusy.query({
    requestBody: {
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      timeZone: BOOKING_TIMEZONE,
      items: [{ id: "primary" }],
    },
  });

  const busy = res.data.calendars?.primary?.busy || [];
  return busy
    .filter((b) => b.start && b.end)
    .map((b) => ({
      start: new Date(b.start!),
      end: new Date(b.end!),
    }));
}

export type CreateEventInput = {
  summary: string;
  description: string;
  start: Date;
  end: Date;
  attendeeEmail: string;
  attendeeName: string;
};

export async function createCalendarEvent(input: CreateEventInput) {
  const auth = await getAuthedClient();
  if (!auth) {
    throw new Error("Calendario de Google no conectado");
  }

  const calendar = google.calendar({ version: "v3", auth });
  const event = await calendar.events.insert({
    calendarId: "primary",
    sendUpdates: "all",
    requestBody: {
      summary: input.summary,
      description: input.description,
      start: {
        dateTime: input.start.toISOString(),
        timeZone: BOOKING_TIMEZONE,
      },
      end: {
        dateTime: input.end.toISOString(),
        timeZone: BOOKING_TIMEZONE,
      },
      attendees: [
        {
          email: input.attendeeEmail,
          displayName: input.attendeeName,
        },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 60 },
        ],
      },
    },
  });

  return event.data;
}

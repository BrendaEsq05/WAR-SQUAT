import { NextResponse } from "next/server";
import { isGoogleConfigured } from "@/lib/calendar/config";
import { isCalendarConnected, readTokens } from "@/lib/calendar/tokens";

export async function GET() {
  const configured = isGoogleConfigured();
  const connected = configured && (await isCalendarConnected());
  const tokens = connected ? await readTokens() : null;

  return NextResponse.json({
    configured,
    connected,
    email: tokens?.email ?? null,
    connectedAt: tokens?.connectedAt ?? null,
    mode: connected ? "google" : "mock",
  });
}

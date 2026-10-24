import { NextRequest, NextResponse } from "next/server";
import { isGoogleConfigured } from "@/lib/calendar/config";
import { getAuthUrl } from "@/lib/calendar/google";

export async function GET(request: NextRequest) {
  if (!isGoogleConfigured()) {
    return NextResponse.json(
      {
        error:
          "Faltan GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET. Copia .env.example a .env.local.",
      },
      { status: 503 }
    );
  }

  const secret = request.nextUrl.searchParams.get("secret");
  const expected = process.env.ADMIN_SECRET || "hirox-cambia-esto";
  if (secret !== expected) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  return NextResponse.redirect(getAuthUrl(secret));
}

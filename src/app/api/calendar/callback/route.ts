import { NextRequest, NextResponse } from "next/server";
import { getAppUrl } from "@/lib/calendar/config";
import { exchangeCode } from "@/lib/calendar/google";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");
  const base = getAppUrl();

  if (error) {
    return NextResponse.redirect(
      `${base}/admin/calendario?error=${encodeURIComponent(error)}`
    );
  }

  if (!code) {
    return NextResponse.redirect(
      `${base}/admin/calendario?error=missing_code`
    );
  }

  try {
    await exchangeCode(code);
    return NextResponse.redirect(`${base}/admin/calendario?connected=1`);
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(
      `${base}/admin/calendario?error=token_exchange`
    );
  }
}

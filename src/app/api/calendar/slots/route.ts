import { NextRequest, NextResponse } from "next/server";
import {
  CONSULTATION_TYPES,
  type ConsultationTypeId,
} from "@/lib/calendar/config";
import { getAvailableSlots } from "@/lib/calendar/slots";

export async function GET(request: NextRequest) {
  const typeParam = request.nextUrl.searchParams.get("type") as
    | ConsultationTypeId
    | null;
  const date = request.nextUrl.searchParams.get("date") || undefined;

  const consultation =
    CONSULTATION_TYPES.find((t) => t.id === typeParam) ||
    CONSULTATION_TYPES[0];

  try {
    const result = await getAvailableSlots({
      fromDate: date,
      durationMinutes: consultation.durationMinutes,
      daysAhead: 14,
    });

    return NextResponse.json({
      ...result,
      consultation,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "No se pudieron cargar los horarios" },
      { status: 500 }
    );
  }
}

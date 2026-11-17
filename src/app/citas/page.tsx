import type { Metadata } from "next";
import { BookingForm } from "@/components/booking/booking-form";

export const metadata: Metadata = {
  title: "Agendar cita",
  description:
    "Reserva valoración, seguimiento o entrenamiento con WAR SQUAD y confírmalo por WhatsApp.",
};

export default function CitasPage() {
  return (
    <div className="bg-background">
      <div className="border-b border-border bg-stone-wash">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Citas
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-moss-deep sm:text-5xl">
            Agenda con WAR SQUAD
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground sm:text-lg">
            Solo viernes (11:00 am – 3:00 pm) y sábado (9:00 am – 1:00 pm). Al
            final confirmas por WhatsApp para que te apartemos el lugar.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <BookingForm />
      </div>
    </div>
  );
}

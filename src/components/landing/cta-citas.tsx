import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaCitas() {
  return (
    <section className="bg-stone-wash py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-moss-deep sm:text-4xl">
          Agenda tu primera valoración
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Elige horario en la app. Si el calendario de Google de Hirox está
          conectado, la cita se bloquea automáticamente en su agenda.
        </p>
        <Link
          href="/citas"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 inline-flex h-12 bg-primary px-8 text-base font-semibold"
          )}
        >
          Ir a citas
        </Link>
      </div>
    </section>
  );
}

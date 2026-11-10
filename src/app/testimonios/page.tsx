import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Testimonios de la comunidad WAR SQUAD.",
};

export default function TestimoniosPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-moss-deep text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-volt">
            Testimonios
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
            Historias de la comunidad
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Pronto verás aquí lo que otros están construyendo con WAR SQUAD.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="rounded-2xl border border-dashed border-border bg-stone-wash px-6 py-16">
            <p className="font-heading text-xl font-semibold text-moss-deep">
              Aún no hay testimonios
            </p>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Este espacio está listo. Cuando tengamos historias de la
              comunidad, las publicamos aquí.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comunidad",
  description:
    "Comunidad WAR SQUAD: un grupo que se motiva, se exige y celebra los avances juntos.",
};

export default function ComunidadPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-moss-deep text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[minmax(16rem,26rem)_1fr] md:gap-16">
          <img
            src="/comunidad.jpg"
            alt="Comunidad WAR SQUAD"
            className="aspect-[4/5] w-full justify-self-center rounded-2xl object-cover object-[center_30%] shadow-2xl md:justify-self-start"
          />
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-volt">
              Comunidad
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
              Comunidad WAR SQUAD
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Entrenas con gente que también está en el proceso. Más que un
              coach: un grupo que se motiva, se exige y celebra los avances.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-white/70">
              WAR SQUAD te mete a la comunidad para que no abandones a la
              tercera semana. Aquí no vas solo: hay presencia, empuje y gente
              que camina el mismo camino que tú.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

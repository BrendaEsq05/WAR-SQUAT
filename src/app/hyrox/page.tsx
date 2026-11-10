import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "HYROX",
  description:
    "Comunidad WAR SQUAD para preparar HYROX. Jesús da seguimiento y se queda hasta el día de la competencia.",
};

const steps = [
  {
    n: "01",
    title: "Te acompaña",
    body: "No anima y se va. Se queda en el proceso, estación por estación, hasta el día de la competencia.",
  },
  {
    n: "02",
    title: "Te da seguimiento",
    body: "Revisa cómo vas y te dice dónde puedes mejorar. El ajuste queda claro, no en un mensaje que se pierde.",
  },
  {
    n: "03",
    title: "Te mueve la cabeza",
    body: "Nunca te deja solo. Cuando el ritmo pesa, Jesús es quien te apoya para seguir.",
  },
];

export default function HyroxPage() {
  return (
    <div className="bg-moss-deep text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-volt">
              Comunidad WAR SQUAD
            </p>
            <h1 className="mt-4 font-heading text-6xl font-bold uppercase leading-none tracking-tight sm:text-8xl">
              HYROX
            </h1>
            <p className="mt-8 max-w-xl font-heading text-2xl font-semibold leading-tight sm:text-3xl">
              Tu nombre en el tablero. Un tiempo que puedas defender.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-white/75">
              Únete a la comunidad que se prepara para HYROX. El trato no es
              solo vivir la experiencia. Es llegar para que tu nombre quede en
              el tablero con un tiempo de término que valga el trabajo.
            </p>
            <Link
              href="/citas"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 inline-flex h-12 bg-volt px-6 text-base font-semibold text-moss-deep hover:bg-volt/90"
              )}
            >
              Quiero prepararme
            </Link>
          </div>

          <figure>
            <img
              src="/hyrox-estacion.jpg"
              alt="Jesús empujando el trineo en una estación de HYROX"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-[center_30%] shadow-2xl"
            />
            <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Estación · Empuje de trineo
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-volt">
              El tablero
            </p>
            <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              El rival eres tú.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/75">
              El reloj corre para todos. La competencia de verdad es contra el
              que fuiste la semana pasada. La calidad de ese tiempo no la pone
              la suerte: la pones tú, en los días que nadie ve y en la estación
              que duele.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="flex items-center justify-between gap-4 bg-volt px-5 py-5 text-moss-deep">
              <div className="flex items-center gap-4">
                <span className="font-heading text-3xl font-bold">01</span>
                <div>
                  <p className="font-heading text-lg font-bold uppercase">
                    Tu nombre
                  </p>
                  <p className="text-sm">El tiempo lo decides tú</p>
                </div>
              </div>
              <span className="font-heading text-3xl font-bold tracking-widest">
                --:--
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-5 text-white/70">
              <div className="flex items-center gap-4">
                <span className="font-heading text-3xl font-bold">02</span>
                <p className="font-heading text-lg font-bold uppercase">
                  El resto
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.16em]">
                detrás
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-volt">
            Cómo se prepara
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Él no te anima y se va. Se queda en el proceso.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n}>
                <p className="font-heading text-4xl font-bold text-volt">
                  {step.n}
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

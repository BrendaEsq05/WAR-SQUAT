import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Comunidad() {
  return (
    <section
      id="comunidad"
      className="relative scroll-mt-20 overflow-hidden bg-moss-deep py-20 text-white sm:py-28"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-moss-deep/85" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="animate-hirox-float font-heading text-sm font-semibold uppercase tracking-[0.2em] text-volt">
          Comunidad Hirox
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold tracking-tight sm:text-5xl">
          Entrenas con gente que también está en el proceso.
        </h2>
        <p className="mt-4 max-w-xl text-white/75 sm:text-lg">
          Más que un coach: un grupo que se motiva, se exige y celebra los
          avances. Hirox te mete a la comunidad para que no abandones a la
          tercera semana.
        </p>
        <Link
          href="/citas"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 inline-flex h-12 bg-volt px-6 text-base font-semibold text-moss-deep hover:bg-volt/90"
          )}
        >
          Quiero empezar
        </Link>
      </div>
    </section>
  );
}

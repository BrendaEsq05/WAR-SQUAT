import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-moss-deep text-white">
      <div
        className="absolute inset-0 animate-hirox-pan bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(105deg, oklch(0.18 0.04 155 / 0.92) 0%, oklch(0.22 0.05 155 / 0.55) 42%, oklch(0.25 0.04 155 / 0.35) 100%), url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=2400&q=80')",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.9 0.18 125 / 0.25), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.5 0.08 155 / 0.4), transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 md:justify-center md:pb-24">
        <p className="animate-hirox-rise font-heading text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          Hirox
        </p>
        <div className="animate-hirox-line mt-4 h-1 w-40 bg-volt sm:w-56" />
        <h1 className="animate-hirox-rise-delay-1 mt-6 max-w-xl font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          Nutrición y entrenamiento con quien te acompaña de verdad.
        </h1>
        <p className="animate-hirox-rise-delay-2 mt-4 max-w-lg text-base text-white/80 sm:text-lg">
          Rutinas, plan alimenticio y seguimiento que te empuja — diabetes,
          tiroides, peso, estética o vesícula. Aquí no entrenas solo.
        </p>
        <div className="animate-hirox-rise-delay-3 mt-8 flex flex-wrap gap-3">
          <Link
            href="/citas"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 bg-volt px-6 text-base font-semibold text-moss-deep hover:bg-volt/90"
            )}
          >
            Agendar cita
          </Link>
          <Link
            href="/#metodo"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 border-white/40 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
            )}
          >
            Conocer el método
          </Link>
        </div>
      </div>
    </section>
  );
}

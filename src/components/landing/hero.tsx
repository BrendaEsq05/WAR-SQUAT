import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-moss-deep text-white">
      <div
        className="absolute inset-0 animate-hirox-pan bg-cover bg-[center_30%]"
        style={{
          backgroundImage:
            "linear-gradient(100deg, oklch(0.08 0 0 / 0.82) 0%, oklch(0.08 0 0 / 0.55) 36%, oklch(0.08 0 0 / 0.28) 68%, oklch(0.08 0 0 / 0.45) 100%), url('/portada.jpg')",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, oklch(0.9 0.18 98 / 0.28), transparent 38%), radial-gradient(circle at 82% 78%, oklch(0.55 0.23 27 / 0.35), transparent 42%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 sm:pb-24 md:justify-center md:pb-28">
        <h1 className="animate-hirox-rise max-w-xl font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          Nutrición y entrenamiento con quien te acompaña de verdad.
        </h1>
        <p className="animate-hirox-rise-delay-2 mt-4 max-w-lg text-base text-white/80 sm:text-lg">
          Rutinas, plan alimenticio y seguimiento que te empuja — diabetes,
          tiroides, peso, estética o salud digestiva. Aquí no entrenas solo.
        </p>
        <div className="animate-hirox-rise-delay-3 mt-8">
          <Link
            href="/#metodo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "inline-flex h-12 bg-volt px-6 text-base font-semibold text-moss-deep hover:bg-volt/90"
            )}
          >
            Conocer el método
          </Link>
        </div>
      </div>
    </section>
  );
}

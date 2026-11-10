import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { condiciones } from "@/lib/condiciones";

export function Casos() {
  return (
    <section id="casos" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            A quién ayuda
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-moss-deep sm:text-5xl">
            Condiciones reales. Resultados con seguimiento.
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Ninguna de estas es un límite. Entra a cada una y ve cómo la
            nutrición y el ejercicio te devuelven el control.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {condiciones.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/condiciones/${item.slug}`}
                className="group grid gap-2 py-6 transition-colors sm:grid-cols-[minmax(12rem,16rem)_1fr_auto] sm:items-center sm:gap-8"
              >
                <h3 className="font-heading text-xl font-semibold text-moss-deep group-hover:text-primary sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-muted-foreground sm:text-lg">{item.summary}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Ver
                  <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

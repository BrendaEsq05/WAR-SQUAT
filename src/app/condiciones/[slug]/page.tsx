import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { condiciones, getCondicion } from "@/lib/condiciones";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return condiciones.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const condicion = getCondicion(slug);
  if (!condicion) return { title: "Condición" };
  return {
    title: condicion.title,
    description: condicion.lead,
  };
}

const blocks = [
  { key: "picture" as const, label: "Qué está pasando" },
  { key: "nutrition" as const, label: "La nutrición te devuelve margen" },
  { key: "training" as const, label: "El ejercicio lo refuerza" },
];

export default function CondicionPage({ params }: PageProps) {
  return (
    <Suspense fallback={<CondicionFallback />}>
      <CondicionContent params={params} />
    </Suspense>
  );
}

function CondicionFallback() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-moss-deep">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="h-4 w-28 animate-pulse rounded bg-white/20" />
          <div className="mt-4 h-14 w-2/3 animate-pulse rounded bg-white/15" />
          <div className="mt-6 h-24 animate-pulse rounded bg-white/10" />
        </div>
      </section>
    </div>
  );
}

async function CondicionContent({ params }: PageProps) {
  const { slug } = await params;
  const condicion = getCondicion(slug);
  if (!condicion) notFound();

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-moss-deep text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-volt">
            WAR SQUAD
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
            {condicion.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/85 sm:text-xl">
            {condicion.lead}
          </p>
        </div>
      </section>

      <section className="bg-stone-wash py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-3">
          {blocks.map((block) => (
            <div key={block.key}>
              <h2 className="font-heading text-xl font-semibold text-moss-deep">
                {block.label}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {condicion[block.key]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            El control es tuyo
          </p>
          <p className="mt-4 text-lg leading-relaxed text-moss-deep">
            {condicion.control}
          </p>
          <Link
            href="/casos"
            className="mt-8 inline-block text-sm font-semibold text-primary underline underline-offset-4"
          >
            Ver las otras condiciones
          </Link>
        </div>
      </section>
    </div>
  );
}

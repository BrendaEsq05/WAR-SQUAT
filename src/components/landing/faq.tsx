import Link from "next/link";
import { faqs } from "@/lib/faq";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Preguntas frecuentes
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-moss-deep sm:text-5xl">
          Lo que más preguntan antes de empezar.
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Si algo no queda claro, escríbenos por{" "}
          <Link href="/contacto" className="font-semibold text-primary underline underline-offset-4">
            Contacto
          </Link>{" "}
          o WhatsApp.
        </p>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none font-heading text-lg font-semibold text-moss-deep marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span className="mt-1 shrink-0 text-volt transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

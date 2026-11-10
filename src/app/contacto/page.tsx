import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_URL,
  LOCATION_ADDRESS,
  LOCATION_MAPS_URL,
  LOCATION_NAME,
  SOCIAL_LINKS,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda tu consulta con WAR SQUAD. Horarios, preparación para la cita y ubicación en Hangar TRC, Torreón.",
};

const razones = [
  "Evaluar tu progreso real",
  "Hacer ajustes necesarios",
  "Mantenerte en el camino correcto",
];

const lunesAViernes = [
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "1:00 pm",
  "1:30 pm",
  "2:00 pm",
  "3:00 pm",
];

const sabado = [
  "9:00 am",
  "9:30 am",
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "1:00 pm",
];

const preparacion = [
  "Haber ingerido al menos 500 ml de agua",
  "Asistir en ayunas o con mínimo 2 horas sin comer",
  "Ropa cómoda y ajustada (para mediciones antropométricas)",
];

export default function ContactoPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-moss-deep text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-volt">
            Contacto
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
            Es momento de agendar tu consulta
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Esto es clave para evaluar tu progreso real, hacer ajustes
            necesarios y mantenerte en el camino correcto.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-stone-wash py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Por qué agendar
          </p>
          <ul className="mt-6 space-y-3">
            {razones.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base text-moss-deep sm:text-lg"
              >
                <span className="mt-1 size-2 shrink-0 rounded-full bg-volt" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-heading text-xl font-semibold text-moss-deep">
              Recuerda: esto es un proceso.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              No se trata de hacerlo perfecto. Se trata de ir ajustando hasta
              encontrar lo que mejor funciona para ti.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Incluso si sientes que no lo hiciste al 100%, es más importante
              venir, medir y corregir, que esperar a “hacerlo perfecto” para
              regresar.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Horarios disponibles
          </p>
          <p className="mt-3 text-muted-foreground">
            Los horarios se van ocupando conforme se agenden.
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-moss-deep">
                Lunes a viernes
              </h2>
              <ul className="mt-4 space-y-2">
                {lunesAViernes.map((hora) => (
                  <li
                    key={hora}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-moss-deep"
                  >
                    <span className="size-2.5 rounded-full bg-volt" />
                    {hora}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-moss-deep">
                Sábado
              </h2>
              <ul className="mt-4 space-y-2">
                {sabado.map((hora) => (
                  <li
                    key={hora}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-moss-deep"
                  >
                    <span className="size-2.5 rounded-full bg-volt" />
                    {hora}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              WhatsApp
            </p>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Confírmanos el horario que mejor te funcione y te lo apartamos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-5 inline-flex h-12 gap-2 bg-[#25D366] px-6 text-base font-semibold text-white hover:bg-[#1ebe57]"
              )}
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5 fill-current"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              {WHATSAPP_DISPLAY}
            </p>
            <div className="mt-4">
              <Link
                href="/citas"
                className="text-sm font-semibold text-primary underline underline-offset-4"
              >
                O agendar desde la app
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-stone-wash py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Importante para tu cita
          </p>
          <p className="mt-3 text-muted-foreground">
            Para que las mediciones sean lo más precisas posible:
          </p>
          <ul className="mt-6 space-y-3">
            {preparacion.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-4 text-moss-deep"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Ubicación
            </p>
            <p className="mt-3 font-heading text-3xl font-bold text-moss-deep">
              {LOCATION_NAME}
            </p>
            <p className="mt-2 max-w-md text-muted-foreground">
              {LOCATION_ADDRESS}
            </p>
            <a
              href={LOCATION_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="max-w-2xl text-lg leading-relaxed text-moss-deep">
            Nos vemos en seguimiento. Seguimos construyendo resultados reales.
          </p>

          <p className="mt-10 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Correo
          </p>
          <a
            href={CONTACT_EMAIL_URL}
            className="mt-3 inline-block text-lg font-medium text-moss-deep underline underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>

          <p className="mt-10 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Redes
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-moss-deep transition hover:border-primary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="mt-8 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            War Squad Mx 2026
          </p>
        </div>
      </section>
    </div>
  );
}

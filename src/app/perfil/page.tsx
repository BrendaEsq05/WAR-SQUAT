import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jesús",
  description:
    "Jesús, nutriólogo y entrenador de WAR SQUAD. Doce años de experiencia, seguimiento 1:1 y formación en nutrición deportiva.",
};

const accompaniment = [
  {
    title: "Uno a uno",
    body: "El seguimiento es contigo, no en un grupo. Jesús revisa tu avance, escucha qué se te atoró y deja el siguiente ajuste claro.",
  },
  {
    title: "Te empuja cuando aflojas",
    body: "Motiva con presencia. Si el ánimo baja o el plan se queda en el cajón, vuelve a ponerte en marcha sin soltarte a medias.",
  },
  {
    title: "Comida y entrenamiento, juntos",
    body: "No separa la dieta del gym. Lo que comes y cómo te mueves se corrigen en el mismo proceso, según cómo responde tu cuerpo.",
  },
];

const credentials = [
  "12 años como nutriólogo",
  "Certificado ISAK Nivel 2",
  "Entrenador certificado SICCED Nivel 1",
  "Coach certificado Coahuila Fitness",
  "Acondicionamiento físico, de adolescentes a edad geriátrica",
  "Entrenamiento de deportistas individuales",
  "Diplomado en nutrición deportiva, constancia DC-3",
];

export default function PerfilPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-moss-deep text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[minmax(16rem,22rem)_1fr] md:gap-16">
          <img
            src="/perfil-nutriologo.jpg"
            alt="Jesús en el gimnasio"
            className="aspect-[3/4] max-h-[32rem] w-full justify-self-center rounded-2xl object-cover object-[center_12%] shadow-2xl md:max-h-none md:justify-self-start"
          />
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-volt">
              Nutriólogo y entrenador
            </p>
            <h1 className="mt-3 font-heading text-5xl font-bold tracking-tight sm:text-7xl">
              Jesús
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Doce años formando hábitos de verdad. Jesús arma el plan, se
              queda en el proceso y acompaña a cada paciente de cerca hasta que
              el cambio se sostiene solo.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-white/70">
              Atiende adolescentes, adultos y personas en edad geriátrica, y
              también prepara deportistas que entrenan de forma individual. El
              seguimiento es 1:1: motivación, ajustes y presencia, no un PDF que
              se enfría en el teléfono.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-wash py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Cómo trabaja
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold tracking-tight text-moss-deep sm:text-5xl">
            Apoyo, motivación y seguimiento que no se corta a la segunda semana.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {accompaniment.map((item) => (
              <div key={item.title}>
                <h3 className="font-heading text-xl font-semibold text-moss-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Formación
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold tracking-tight text-moss-deep sm:text-4xl">
            Nutrición clínica, deporte y entrenamiento en la misma trayectoria.
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {credentials.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-4 text-base text-moss-deep"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

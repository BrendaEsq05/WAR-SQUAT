const pillars = [
  {
    title: "Valoración y plan real",
    body: "Se revisa tu condición, tu día a día y tu objetivo. De ahí sale un plan de comida y rutina que se puede cumplir, no una dieta de moda.",
  },
  {
    title: "Nutrición y gym, juntos",
    body: "Jesús no separa lo que comes de cómo te mueves. Corrige técnica, ajusta porciones e intensidad según cómo responde tu cuerpo.",
  },
  {
    title: "Seguimiento que se queda",
    body: "Check-ins, mediciones y ese empujón cuando aflojas. El proceso no se corta a la segunda semana: se mide, se ajusta y se sigue.",
  },
];

export function Metodo() {
  return (
    <section
      id="metodo"
      className="scroll-mt-20 bg-black pt-24 pb-20 text-white sm:pt-32 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#ff7a18]">
              El método
            </p>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold tracking-tight sm:text-5xl">
              No es solo el plan. Es quién te sostiene cuando flaqueas.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              WAR SQUAD junta nutriólogo y entrenador en un solo proceso.
              Jesús arma el diagnóstico, la comida, la rutina y el seguimiento
              1:1. Tú pones la constancia; él pone el marco y no te suelta a
              medias.
            </p>
          </div>

          <img
            src="/metodo.jpg"
            alt="Acompañamiento en competencia HYROX"
            className="aspect-[4/5] w-full rounded-2xl object-cover object-[center_45%] shadow-2xl ring-1 ring-white/10 sm:aspect-[5/4]"
          />
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-14 md:grid-cols-3">
          {pillars.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="font-heading text-4xl font-bold text-[#ff7a18]">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65 sm:text-base">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

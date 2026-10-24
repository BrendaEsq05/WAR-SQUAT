const pillars = [
  {
    title: "Nutrición clínica + práctica",
    body: "Planes que se adaptan a tu condición y a tu vida real — no dietas de moda.",
  },
  {
    title: "Entrenamiento con presencia",
    body: "Te acompaña en el gym, corrige técnica y sube la intensidad cuando te estancas.",
  },
  {
    title: "Seguimiento que duele (de la buena)",
    body: "Check-ins, ajustes y ese empujón cuando quieres rendirte. Accountability de verdad.",
  },
];

export function Metodo() {
  return (
    <section id="metodo" className="scroll-mt-20 bg-stone-wash py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          El método
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold tracking-tight text-moss-deep sm:text-5xl">
          No es solo el plan. Es quién te sostiene cuando flaqueas.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground sm:text-lg">
          Hirox combina nutriólogo y entrenador en un solo proceso: diagnóstico,
          rutina, comida y comunidad. Tú pones la constancia; él pone el marco
          y el seguimiento.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map((item, i) => (
            <div key={item.title} className="relative">
              <span className="font-heading text-5xl font-bold text-volt/80">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl font-semibold text-moss-deep">
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
  );
}

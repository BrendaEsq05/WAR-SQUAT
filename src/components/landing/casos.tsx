const cases = [
  {
    title: "Diabetes",
    body: "Alimentación y movimiento alineados para estabilizar energía y hábitos, con seguimiento cercano.",
  },
  {
    title: "Hipotiroidismo",
    body: "Rutinas y nutrición pensadas para metabolismo lento, fatiga y recuperación realista.",
  },
  {
    title: "Sobrepeso",
    body: "Déficit sostenible, fuerza y accountability semanal — sin castigos absurdos.",
  },
  {
    title: "Estética / recomposición",
    body: "Hipertrofia, definición y plan alimenticio que se nota en el espejo y en la báscula.",
  },
  {
    title: "Piedras en la vesícula",
    body: "Acompañamiento nutricional cuidadoso y entrenamiento adaptado a tu tolerancia.",
  },
];

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
        </div>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {cases.map((item) => (
            <li
              key={item.title}
              className="group grid gap-2 py-6 transition-colors sm:grid-cols-[minmax(10rem,14rem)_1fr] sm:items-baseline sm:gap-8"
            >
              <h3 className="font-heading text-xl font-semibold text-moss-deep group-hover:text-primary sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-muted-foreground sm:text-lg">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

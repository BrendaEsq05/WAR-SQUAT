export type Condicion = {
  slug: string;
  title: string;
  summary: string;
  lead: string;
  picture: string;
  nutrition: string;
  training: string;
  control: string;
};

export const condiciones: Condicion[] = [
  {
    slug: "diabetes",
    title: "Diabetes",
    summary:
      "Comida y entrenamiento para estabilizar energía y hábitos, con seguimiento cercano.",
    lead: "El diagnóstico no te saca del juego. La glucosa se mueve con lo que comes, cómo te mueves y el orden de tu día. Eso se puede dirigir.",
    picture:
      "La diabetes pide constancia, no quietud. Cuando la comida y el movimiento van a ciegas, la energía sube y baja y el cuerpo se siente frágil. Cuando hay un plan, el día deja de depender del susto.",
    nutrition:
      "Un plan de comida que se puede cumplir: horarios, porciones y platos reales, sin ayunos absurdos ni listas imposibles. La nutrición ordena la energía para que entrenes y vivas el día, no para castigarte.",
    training:
      "La fuerza y el movimiento mejoran cómo el cuerpo usa la glucosa. Las sesiones se arman a tu nivel y suben cuando ya las sostienes. Entrenar no es un riesgo si está dosificado: es una forma de recuperar margen.",
    control:
      "Tú llevas el volante. WAR SQUAD ajusta comida y rutina contigo, semana a semana, para que la diabetes deje de ser la excusa y pase a ser el motivo para entrenar con cabeza. El seguimiento médico sigue en su lugar; aquí tomas el control de lo que sí depende de ti.",
  },
  {
    slug: "hipotiroidismo",
    title: "Hipotiroidismo",
    summary:
      "Ritmo realista para un metabolismo lento: nutrición que sostiene y fuerza que se recupera.",
    lead: "El cansancio y el metabolismo lento no significan quedarte quieto. Significan entrenar y comer al ritmo de tu energía, no al de alguien más.",
    picture:
      "Con hipotiroidismo el cuerpo tarda más en responder. La fatiga, el frío y la báscula que no se mueve se sienten como un techo. Ese techo se mueve cuando el plan respeta la recuperación en vez de ignorarla.",
    nutrition:
      "Comida suficiente para funcionar: proteína, constancia y cero dietas de castigo. La nutrición sostiene el día y evita el ciclo de restringir, agotarte y volver a empezar.",
    training:
      "Las rutinas suben de a poco. Un día bueno se aprovecha; un día bajo se ajusta, no se abandona. La fuerza regresa cuando el estímulo cabe en tu recuperación real.",
    control:
      "El control está en el ritmo. WAR SQUAD se queda para ajustar cuando hay bajón y empujar cuando hay día bueno. El hipotiroidismo explica el contexto. No te prohíbe ponerte fuerte.",
  },
  {
    slug: "sobrepeso",
    title: "Sobrepeso",
    summary:
      "Déficit que se puede vivir y fuerza que se nota, con seguimiento semanal y sin castigos.",
    lead: "El peso no te define ni te prohíbe el gym. Se baja con un déficit que se puede vivir y con músculo que cambia cómo te ves y cómo te mueves.",
    picture:
      "El sobrepeso suele venir con prisa y con culpa. Las dietas extremas duran poco y devuelven el peso. Lo que se sostiene es comer para entrenar y medir el avance en fuerza, ropa y energía, no solo en un número.",
    nutrition:
      "Un déficit que deja hambre manejable y comida que alcanza para la sesión. Sin prohibiciones teatrales. La nutrición te da estructura para cumplir entre semana, no un castigo de lunes.",
    training:
      "La fuerza cambia la composición del cuerpo y la confianza de entrar al gym. Se empieza donde estás y se progresa. Cada sesión cumplida es prueba de que el proceso es tuyo.",
    control:
      "Cada semana que sostienes el plan es control, no suerte. WAR SQUAD revisa, ajusta y no te suelta cuando la báscula se estanca. El sobrepeso es el punto de partida, no el límite.",
  },
  {
    slug: "estetica",
    title: "Estética / recomposición",
    summary:
      "Hipertrofia y comida juntas, para que el cambio se note en el espejo y en la báscula.",
    lead: "Ganar músculo y definir no es solo para quien ya está en forma. Es el resultado de comer para construir y entrenar con progresión.",
    picture:
      "La recomposición pide paciencia que casi nadie sostiene solo: comer bien cuando quieres vernos ya, y entrenar pesado cuando el espejo todavía no cambia. Sin ese marco, se abandona a las tres semanas.",
    nutrition:
      "El plan alimenticio se arma para construir, no para desaparecer. Proteína, energía para la sesión y ajustes cuando toca definir. Lo que comes es parte del entrenamiento, no un extra.",
    training:
      "Hipertrofia con técnica y progresión. Se corrige el movimiento, se sube la carga cuando corresponde y se deja registro de que sí avanzas, aunque el espejo tarde.",
    control:
      "WAR SQUAD junta comida y gym y se queda hasta que el cambio es visible. La estética no es un premio para los que ya llegaron. Es lo que pasa cuando tomas el proceso y no lo sueltas.",
  },
  {
    slug: "salud-digestiva",
    title: "Salud digestiva",
    summary:
      "Comida que toleras y entrenamiento adaptado, para volver a moverte sin miedo al estómago.",
    lead: "La digestión pesada, la vesícula o el estómago delicado no te condenan a dejar de comer bien ni de entrenar. Se adapta el plan a lo que tu cuerpo sí tolera.",
    picture:
      "Cuando la digestión manda, da miedo comer y da miedo esforzarte. Se prueba de todo, se quita de todo y el entrenamiento se cae. El problema no es que no puedas: es que nadie ordenó qué te sienta y cómo volver a moverte.",
    nutrition:
      "La comida se arma según tu tolerancia real: qué te inflama, qué te da energía y cómo repartir el día para entrenar sin pagarlo después. Menos ensayo a ciegas, más claridad.",
    training:
      "La sesión se adapta a cómo amaneciste. Hay días de fuerza y días más ligeros, sin usar el estómago como pretexto para desaparecer del gym. El movimiento, bien dosificado, también forma parte de sentirte mejor.",
    control:
      "WAR SQUAD acompaña la salud digestiva de cerca y ajusta cuando algo no sienta. No es un límite permanente. Es un contexto, y con comida y ejercicio a tu medida vuelves a llevar tú el control.",
  },
];

export function getCondicion(slug: string) {
  return condiciones.find((item) => item.slug === slug);
}

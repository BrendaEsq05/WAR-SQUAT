/** Constantes seguras para el cliente (sin process.env). */
export const CONSULTATION_TYPES = [
  {
    id: "primera",
    label: "Primera valoración",
    description: "Nutrición + entrenamiento. Diagnóstico y plan inicial.",
    durationMinutes: 60,
  },
  {
    id: "seguimiento",
    label: "Seguimiento",
    description: "Ajuste de rutina, alimentación y accountability.",
    durationMinutes: 45,
  },
  {
    id: "entrenamiento",
    label: "Entrenamiento acompañado",
    description: "Sesión contigo: técnica, intensidad y cero excusas.",
    durationMinutes: 60,
  },
] as const;

export type ConsultationTypeId = (typeof CONSULTATION_TYPES)[number]["id"];

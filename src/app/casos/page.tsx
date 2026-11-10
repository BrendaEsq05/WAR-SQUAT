import type { Metadata } from "next";
import { Casos } from "@/components/landing/casos";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Condiciones reales. Resultados con seguimiento. Diabetes, tiroides, peso, estética y salud digestiva.",
};

export default function CasosPage() {
  return (
    <div className="bg-background">
      <Casos />
    </div>
  );
}

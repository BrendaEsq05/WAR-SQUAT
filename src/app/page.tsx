import { Casos } from "@/components/landing/casos";
import { Comunidad } from "@/components/landing/comunidad";
import { CtaCitas } from "@/components/landing/cta-citas";
import { Hero } from "@/components/landing/hero";
import { Metodo } from "@/components/landing/metodo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metodo />
      <Casos />
      <Comunidad />
      <CtaCitas />
    </>
  );
}

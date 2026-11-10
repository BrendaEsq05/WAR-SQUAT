import { Comunidad } from "@/components/landing/comunidad";
import { Faq } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { Metodo } from "@/components/landing/metodo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div
        aria-hidden
        className="h-12 border-y border-border bg-background sm:h-16"
      />
      <Metodo />
      <Comunidad />
      <Faq />
    </>
  );
}

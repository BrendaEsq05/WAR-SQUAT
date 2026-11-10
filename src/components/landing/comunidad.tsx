import Link from "next/link";

export function Comunidad() {
  return (
    <section id="comunidad" className="scroll-mt-20 bg-black">
      <Link
        href="/comunidad"
        className="group relative block min-h-[70svh] overflow-hidden sm:min-h-[85svh]"
      >
        <div
          className="absolute inset-0 animate-comunidad-zoom bg-cover bg-[center_32%] transition duration-700 group-hover:brightness-110"
          style={{ backgroundImage: "url('/comunidad.jpg')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35"
          aria-hidden
        />
        <div className="relative flex min-h-[70svh] flex-col justify-end px-4 pb-10 sm:min-h-[85svh] sm:px-6 sm:pb-14">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-volt">
            Comunidad
          </p>
          <p className="mt-2 max-w-xl font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
            WAR SQUAD
          </p>
          <p className="mt-3 text-sm text-white/70 transition group-hover:text-white">
            Toca para conocer al grupo
          </p>
        </div>
      </Link>
    </section>
  );
}

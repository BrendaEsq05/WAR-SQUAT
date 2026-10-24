import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-moss-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-heading text-3xl font-bold uppercase tracking-tight">
            Hirox
          </p>
          <p className="mt-2 max-w-sm text-sm text-white/70">
            Nutrición, entrenamiento y seguimiento real. Comunidad que no te
            suelta a la mitad del camino.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-white/80">
          <Link href="/citas" className="hover:text-volt transition-colors">
            Agendar cita
          </Link>
          <Link href="/#metodo" className="hover:text-volt transition-colors">
            Método
          </Link>
          <Link
            href="/admin/calendario"
            className="hover:text-volt transition-colors"
          >
            Admin calendario
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50 sm:px-6">
        © 2026 Hirox · Nutriólogo y entrenador
      </div>
    </footer>
  );
}

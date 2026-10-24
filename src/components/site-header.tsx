"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#metodo", label: "Método" },
  { href: "/#casos", label: "Casos" },
  { href: "/#comunidad", label: "Comunidad" },
  { href: "/citas", label: "Citas" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onDark = pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md",
        onDark
          ? "border-white/10 bg-moss-deep/80 text-white"
          : "border-border/80 bg-background/90 text-foreground"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-tight uppercase"
        >
          Hirox
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-opacity hover:opacity-100",
                onDark ? "opacity-80" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/citas"
            className={cn(
              buttonVariants({ size: "default" }),
              "bg-volt text-moss-deep hover:bg-volt/90 font-semibold"
            )}
          >
            Agendar cita
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div
          className={cn(
            "border-t px-4 py-4 md:hidden",
            onDark ? "border-white/10 bg-moss-deep" : "border-border bg-background"
          )}
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/citas"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ size: "default" }),
                "mt-2 bg-volt text-moss-deep font-semibold"
              )}
            >
              Agendar cita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

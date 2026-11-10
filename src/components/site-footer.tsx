"use client";

import { usePathname } from "next/navigation";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_URL,
  LOCATION_ADDRESS,
  LOCATION_NAME,
  SOCIAL_LINKS,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/contact";

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/contacto") return null;

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-heading text-2xl font-bold uppercase tracking-tight">
            WAR SQUAD
          </p>
          <p className="mt-2 max-w-sm text-sm text-white/60">
            {LOCATION_NAME}
            <br />
            {LOCATION_ADDRESS}
          </p>
          <div className="mt-4 flex flex-col gap-1 text-sm">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-volt transition hover:opacity-80"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a
              href={CONTACT_EMAIL_URL}
              className="text-white/70 transition hover:text-volt"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-volt">
            Redes
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:border-volt hover:text-volt"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/40">© 2026 WAR SQUAD</p>
        </div>
      </div>
    </footer>
  );
}

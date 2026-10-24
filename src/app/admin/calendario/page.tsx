import { Suspense } from "react";
import type { Metadata } from "next";
import { AdminCalendarioClient } from "@/components/admin/calendario-client";

export const metadata: Metadata = {
  title: "Admin · Calendario",
};

export default function AdminCalendarioPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-xl px-4 py-20 text-muted-foreground">
          Cargando…
        </div>
      }
    >
      <AdminCalendarioClient />
    </Suspense>
  );
}

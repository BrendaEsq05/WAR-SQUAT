# WAR SQUAD

Sitio web del nutriólogo y entrenador **WAR SQUAD**: método, casos (diabetes, hipotiroidismo, sobrepeso, estética, salud digestiva), comunidad y **agenda de citas** ligada a Google Calendar.

## Arranque local

```bash
npm install
cp .env.example .env.local   # opcional: Google Calendar
npm run dev
```

Abre [http://localhost:4317](http://localhost:4317).

Sin credenciales de Google la agenda corre en **modo demo** (horarios simulados; las citas se guardan en `.data/bookings.json`).

## Páginas

| Ruta | Qué es |
|------|--------|
| `/` | Landing WAR SQUAD |
| `/citas` | Agendar valoración, seguimiento o entrenamiento |
| `/admin/calendario` | Conectar la cuenta de Google de WAR SQUAD |

## Google Calendar


1. Redirect URI: `http://localhost:4317/api/calendar/callback` (y el de producción cuando exista).
2. Copia Client ID y Secret a `.env.local` (ver `.env.example`).
3. En `/admin/calendario` usa `ADMIN_SECRET` y pulsa **Conectar Google Calendar** con la cuenta de WAR SQUAD.

Cuando está conectado:

- `/api/calendar/slots` consulta disponibilidad real (`freeBusy`).
- `/api/calendar/book` crea el evento en el calendario primario e invita al cliente por correo.

Los tokens OAuth se guardan en `.data/google-tokens.json` (no se versiona).

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Google APIs (`googleapis`).

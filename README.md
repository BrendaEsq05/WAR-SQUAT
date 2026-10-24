# Hirox

Sitio web del nutriólogo y entrenador **Hirox**: método, casos (diabetes, hipotiroidismo, sobrepeso, estética, vesícula), comunidad y **agenda de citas** ligada a Google Calendar.

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
| `/` | Landing Hirox |
| `/citas` | Agendar valoración, seguimiento o entrenamiento |
| `/admin/calendario` | Conectar la cuenta de Google de Hirox |

## Google Calendar

1. Proyecto en [Google Cloud Console](https://console.cloud.google.com).
2. Activa **Google Calendar API**.
3. Credenciales **OAuth 2.0** (aplicación web).
4. Redirect URI: `http://localhost:4317/api/calendar/callback` (y el de producción cuando exista).
5. Copia Client ID y Secret a `.env.local` (ver `.env.example`).
6. En `/admin/calendario` usa `ADMIN_SECRET` y pulsa **Conectar Google Calendar** con la cuenta de Hirox.

Cuando está conectado:

- `/api/calendar/slots` consulta disponibilidad real (`freeBusy`).
- `/api/calendar/book` crea el evento en el calendario primario e invita al cliente por correo.

Los tokens OAuth se guardan en `.data/google-tokens.json` (no se versiona).

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Google APIs (`googleapis`).

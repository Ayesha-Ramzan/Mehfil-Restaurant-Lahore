# Mehfil backend

A minimal Express + TypeScript API scaffold. It is **not currently wired to
the frontend** — the site's Order and Reservations pages build a `wa.me`
(WhatsApp) link client-side and don't call any API. This exists as a
starting point for when that changes (e.g. persisting orders/reservations,
sending confirmations).

## Running

```sh
npm install
npm run dev
```

Starts the dev server (via `tsx watch`) on `http://localhost:3001` — override
with a `PORT` env var. `GET /health` returns `{ "status": "ok" }`.

## Building

```sh
npm run build   # compiles src/ to dist/ via tsc
npm start       # runs the compiled output
```

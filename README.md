# Mehfil

**Slow-fired Lahori cooking on Mall Road.**

Nihari at eight hours. Sealed clay-pot biryani. Mango-wood grill over a fire
that never drops. A table set in a colonial-era room with carved screens,
marble floors, and brass lamps that stay lit until the last guest leaves.

---

## The Site

A restaurant website for **Mehfil, Lahore** — menu, reservations, online
ordering, the chef's story, a gallery, and full visit details. Two versions
ship in this repo:

| Version | Location | Build |
| --- | --- | --- |
| **Standalone** | `index.html` | None — open in a browser |
| **Full site** | `frontend/` | `npm install && npm run dev` |

The standalone `index.html` is a single self-contained document (markup,
styles, and behaviour in one file). It's the quickest way to see the site and
it references the photography in `frontend/src/assets/` by relative path.

The `frontend/` version is the real thing: **React + TanStack Start** with
server-side rendering, file-based routing, TypeScript, Tailwind CSS, and
shadcn/ui components. It runs on Cloudflare Workers via Nitro.

---

## Architecture

```
mehfil_project/
├── index.html                  # standalone single-file site
├── frontend/                   # React + TanStack Start (SSR)
│   ├── src/
│   │   ├── routes/             # file-based routing (TanStack convention)
│   │   │   ├── index.tsx       # /  — home, hero, sourcing, reviews
│   │   │   ├── menu.tsx        # /menu — full menu with sourcing notes
│   │   │   ├── order.tsx       # /order — online ordering (WhatsApp checkout)
│   │   │   ├── reservations.tsx # /reservations — table booking (WhatsApp)
│   │   │   ├── story.tsx       # /story — the restaurant's history
│   │   │   ├── chef.tsx        # /chef — Chef Imran Saeed
│   │   │   ├── gallery.tsx     # /gallery — room, food, fires
│   │   │   └── visit.tsx       # /visit — address, hours, contact
│   │   ├── components/         # site-header, site-footer, ui/*
│   │   ├── data/menu.ts        # menu data, restaurant info, WhatsApp helper
│   │   ├── lib/                # error capture, error page, utils
│   │   ├── server.ts           # SSR entry — catches h3-swallowed errors
│   │   ├── start.ts            # TanStack Start middleware (error + CSRF)
│   │   └── styles.css          # Tailwind + design tokens
│   ├── vite.config.ts          # TanStack Start + Nitro (Cloudflare) config
│   └── ...
└── backend/                    # Express + TypeScript API scaffold
    └── src/index.ts            # /health endpoint — not yet wired to frontend
```

### How the frontend works

- **Routing** is file-based: every `.tsx` in `src/routes/` becomes a route.
  The root layout lives in `src/routes/__root.tsx` and wraps every page.
  See `frontend/src/routes/README.md` for conventions.
- **SSR** runs on Cloudflare Workers through Nitro. `src/server.ts` is a
  custom fetch entry that catches errors h3 swallows into generic 500s and
  renders a real error page instead.
- **Error handling** is layered: `src/start.ts` wraps server functions with
  error + CSRF middleware; `src/lib/error-capture.ts` patches `console.error`
  to record the original stack before it's serialized away.
- **Form flows** (reservations, orders) validate client-side with Zod and
  submit via **WhatsApp** — no backend call yet. The `backend/` scaffold is
  ready to take over when you want real persistence.

### How the backend fits

A minimal Express + TypeScript API with a single `/health` endpoint. It's
intentionally **not wired to the frontend** — the Order and Reservations
pages build a `wa.me` link client-side. The backend exists as a starting
point for persisting orders/reservations, sending confirmations, and
eventually serving the menu from a database. See `backend/README.md`.

---

## Design

A dark charcoal + brass aesthetic. Charcoal `#29231d` walls, brass
`#cfa75c` accents, Cormorant Garamond for display type, Karla for body.
The brass rule, the gradient veil on images, and the dotted leads on menu
items are all deliberate — slow, heavy, a little old-world.

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (the frontend uses TanStack Start + Nitro, which need a
  recent Node)
- **npm** (package manager)

### Run the standalone site

Just open it:

```sh
open index.html
```

Or serve it locally:

```sh
npx serve .
# → http://localhost:3000
```

### Run the frontend (React + TanStack Start)

```sh
cd frontend
npm install
npm run dev
# → http://localhost:8080
```

### Run the backend scaffold

```sh
cd backend
npm install
npm run dev
# → http://localhost:3001
curl http://localhost:3001/health
# → {"status":"ok"}
```

### Build for production

```sh
cd frontend
npm run build
# output goes to .output/ (deployable to Cloudflare Workers)
```
---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | TanStack Start (React 19 + TanStack Router) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Language | TypeScript 5.8, ES2022 |
| Build | Vite 8 + Nitro (Cloudflare Workers target) |
| Forms | Zod validation, sonner toasts |
| Backend | Express 4 + TypeScript (scaffold) |
| Deployment | Cloudflare Workers (Nitro `cloudflare-module` preset) |

---

## What's Next

The backend is the obvious next step — wire it to the Order and Reservations
pages to persist bookings, send confirmation emails/SMS, and serve the menu
from a database. After that: a real payment flow, user accounts, and review
management.

---

## Environment

The frontend doesn't need environment variables for its current feature set
(reservations and orders go through WhatsApp). The backend uses `dotenv` and
will need a `.env` when you wire it up:

```sh
cp backend/.env.example backend/.env   # fill in your values
```

**Never commit `.env` files.** All `.env*` files are ignored by `.gitignore`
except `.env.example` — commit that one as a template.

---

## License

Not specified — add one that fits.

---

*A mehfil is a gathering that runs late because nobody wants to be the first
to leave. We built the room for that, and then we built the menu for the
room.*

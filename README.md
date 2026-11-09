# Municipal Project Monitoring & Evaluation Management System

Production-oriented multi-module M&E platform for municipal governments.

**Initial configuration:** Kenya · Currency KES · FY 1 July–30 June  
**Architecture:** One codebase, one independent Supabase project per municipality deployment.

## Status

- **Phase 1:** UI foundation (dashboard, project register, module shells)
- **Phase 2 (started):** Supabase SSR clients, env wiring, and session-refresh proxy

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in your municipality Supabase keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/dashboard`).

```bash
npm run build
npm start
```

## Supabase

Required env vars (see `.env.example`):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Client helpers live in `src/utils/supabase/`:

- `client.ts` — browser / Client Components
- `server.ts` — Server Components, Server Actions, Route Handlers
- `middleware.ts` — session refresh used by `src/proxy.ts` (Next.js 16)

`.env.local` is gitignored; each municipality deployment gets its own Supabase project and keys.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Lucide React, Recharts, CVA UI primitives (shadcn-compatible)
- Supabase (`@supabase/supabase-js` + `@supabase/ssr`)

See `docs/PHASE1_ARCHITECTURE.md` for the deployment and security model.

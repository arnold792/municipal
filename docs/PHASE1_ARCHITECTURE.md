# Municipal M&E — Architecture (Phase 1)

## Deployment model

- One reusable Next.js codebase.
- One independent Supabase project per municipality installation.
- No shared database, auth users, storage, or cross-municipality administrator.
- Onboarding a municipality = new deployment + municipality-specific env vars.

## Runtime stack (Phase 1)

- Next.js App Router + TypeScript
- Tailwind CSS v4 design tokens
- Lucide icons, Recharts, CVA-based UI primitives
- Demonstration data only (explicitly labeled)

## Application layers

1. **Presentation** — `src/app`, `src/components`
2. **Domain services** — `src/services` (Phase 2+)
3. **Auth & permissions** — permission keys + RLS (Phase 2+)
4. **Data access** — `@supabase/ssr` clients (Phase 2+)

## Security model (from Phase 2)

- Trusted roles/permissions stored in PostgreSQL tables, never client metadata alone.
- RLS on every exposed table.
- Server Actions / Route Handlers re-check permission keys.
- Private storage buckets with authorized downloads.
- Separation of duties for financial approvals.

## UI design system

- Accent: purple (`#7C5CFC`) inspired by modern PM tools
- Dark elegant sidebar, light canvas surfaces
- Fonts: Sora (display) + Plus Jakarta Sans (body)
- Motion: fade-in / rise on shell content

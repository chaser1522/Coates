# Coates Landscape Supply — Monorepo (Web + API)

This is a **starter** implementation for the project described in your build brief. It includes:
- **Next.js 14** web app (mobile-first, Tailwind) with key pages and components.
- **NestJS** API with initial endpoints, OpenAPI, and data models.
- Shared TypeScript types.
- Stripe/Apple Pay placeholders, in-store pickup flow scaffolding, and a **smart parts assistant** stub.
- Same-day shipping cutoff logic (`America/Boise`, 12:00 PM Mon–Fri).
- CI skeleton and infra stubs.

> This repo is wired to run **without internet services** by default using fixtures. Swap env vars to connect to your real **SQL Server**, **Stripe**, **Azure Vision**, etc.

## Quick Start (Dev)

Requirements: Node 18+, pnpm or npm, Python optional.

```bash
# 1) Install deps (uses npm workspaces)
npm install

# 2) Start API
npm run dev:api

# 3) Start Web (in another terminal)
npm run dev:web
```

- Web: http://localhost:3000
- API: http://localhost:4000 (Swagger at /docs once running)

## Environment Variables

Copy and fill these from the examples:

- `apps/api/.env.example` -> `apps/api/.env`
- `apps/web/.env.local.example` -> `apps/web/.env.local`

**Important:** Set `TZ=America/Boise` on the server for correct shipping cutoff logic.

## SQL Server

By default, the API uses an **in-memory fixture** to run locally. To enable SQL Server, set:

```
DB_CLIENT=mssql
DB_HOST=your-sql-host
DB_PORT=1433
DB_USER=...
DB_PASS=...
DB_NAME=coates_supply
```

And ensure the `mssql` TypeORM config is enabled in `apps/api/src/config/typeorm.config.ts`. Provide stored procs:
- `usp_GetInventoryBySku`
- `usp_ReserveInventory`
- `usp_ReleaseReservation`

## Stripe / Apple Pay

- Add your Stripe keys in `apps/web/.env.local`.
- Place Apple's domain association file at `apps/web/public/.well-known/apple-developer-merchantid-domain-association`.
- In dev, we expose a **mock** checkout.

## OCR / Parts Assistant

- The API includes `POST /uploads/serial-plate` and `/parts/lookup` stubs.
- Wire to Azure Vision or Google Vision; provide keys in env.

## Scripts

```bash
npm run dev:web     # Next.js dev server on :3000
npm run dev:api     # NestJS dev server on :4000
npm run build       # builds both
npm run test        # placeholder test command
```

## CI & Infra

- `.github/workflows/ci.yml` runs lint/build/test.
- `infra/terraform/` contains Azure scaffolding to extend.

---

**Next Steps**
1. Connect to your real SQL Server and Stripe keys.
2. Add dealer tiers and pricing rules in `apps/api/src/pricing/` (placeholder).
3. Integrate Sanity/Contentful for Team/About content.
4. Replace fixtures with your catalog and images.

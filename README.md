# WorldPIN AI 🌐

Independent global postal code and places directory built with Next.js 16, React 19, TypeScript and Tailwind CSS.

> **Status: demonstration MVP.** Search uses a small sample dataset, **not** comprehensive or official worldwide postal data. Do not use sample records for address verification.

## Features delivered
- Responsive global-search homepage
- Country browser and detail pages
- Search API at `GET /api/search?q=10001&country=US`
- SEO metadata, robots and sitemap
- [Architecture and upcoming work](docs/ARCHITECTURE.md)

## Local setup
Install Node.js compatible with Next.js 16, then:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Vercel
Import this GitHub repository as a **separate** Vercel project. Configure `NEXT_PUBLIC_SITE_URL=https://your-domain.example` for sitemap URLs.

## Next milestones
1. Licensed postal-code import and validation (GeoNames/official country sources)
2. Indexed PostgreSQL schema and production-grade search
3. Hierarchical country/region/city/postal-code routes
4. Attribution, freshness, multilingual content, maps and properly licensed photographs
5. Automated testing, deployment checks and production hardening

**Isolation:** The existing `satya19000/Pin-directory-app` repository is untouched.

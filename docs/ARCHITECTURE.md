# WorldPIN AI architecture

## Current implementation (prototype)
- Next.js App Router, React, TypeScript, Tailwind CSS.
- Country browsing and responsive postal search with accessible labels.
- /api/search endpoint (explicitly demo-only).
- Metadata, robots.txt and sitemap.
- No database, background AI, photo services or global ingestion yet.

## Production architecture (planned)
1. PostgreSQL: countries, admin_regions, places, postal_codes, postal_place_relations, sources, import_runs.
2. Composite B-tree index on (country_code, normalized_postal_code). Add pg_trgm for multilingual place-name search with suitable normalization.
3. Streaming ETL import: download official/permitted GeoNames country archives, verify checksum, validate, stage, upsert, publish snapshot; track source license, attribution, freshness, errors.
4. Distinguish code as a string; postal codes are not globally unique; some regions have no postal codes. Support multiple places per postal code, and multiple codes per place.
5. Use server-rendered country and region directories, dynamic postal pages only where source-backed unique content exists. Prevent thin duplicate pages from indexing.
6. Use object storage/CDN for licensed imagery, OpenStreetMap with compliant tile provider, and independent image-source attribution.
7. Deploy app on Vercel and managed PostgreSQL; rate limit public search APIs, enable observability and periodic import jobs.
8. Apply data-source-specific licensing and postal authority restrictions before importing or displaying data.

## Data source options
- GeoNames: https://www.geonames.org/export/
- Universal Postal Union: https://www.upu.int/
- Country-specific official postal authorities (license dependent).

## Separation guarantee
This is a standalone repository. Do not modify satya19000/Pin-directory-app.

---
name: Route Health
description: Verify key Linarex routes render without internal server errors (500) or obvious runtime failures after changes to pages, layouts, data, or i18n.
---

## When to use
Use when edits touch routing, layouts, page components, `siteConfig`, i18n, metadata, or shared UI used by multiple pages.

## Key routes
- EN: `/`, `/proposal`, `/epk`, `/links`
- PL: `/pl`, `/pl/proposal`, `/pl/epk`

## Workflow
1. **Primary gate**: run the `build-smoke` check (`npm run build`). A clean Next.js production build is the strongest static signal that routes compile and common SSR/data issues are absent.

2. **Runtime smoke (optional but recommended for risky changes)**
   - Start production server in background from project root:
     `cd /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex && npm run start -- -p 3017`
   - Wait briefly for readiness, then fetch key routes and confirm HTTP 200 (and no error HTML/body indicators):
     `curl -sS -o /tmp/linarex-home.html -w "%{http_code}" http://127.0.0.1:3017/`
     repeat for `/proposal`, `/epk`, `/pl/proposal`, `/pl/epk`.
   - Pass criteria: 200 responses; no "Internal Server Error" / Next.js error overlay markers in critical pages.
   - **Always stop** the background server/process you started.

3. **If a route fails**
   - Reproduce via build output or server logs, fix the source (null/undefined data, missing locale keys, invalid client/server usage, bad imports), and re-test.

4. **Report**
   - State which gate was used (build and/or runtime), routes checked, status codes, and failures.

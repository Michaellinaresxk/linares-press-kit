---
name: Build Smoke
description: Run a production Next.js build to catch SSR, import, type-shape, and route/data issues that can cause internal server errors.
---

## When to use
Use after changing pages, layouts, components, metadata, `site-config`, i18n, server/client boundaries, or dependencies. Always run before considering a task complete if runtime behavior may be affected.

## Workflow
1. **Production build (required for affected changes)**
   - Run: `cd /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex && npm run build`
   - Pass criteria: `next build` completes successfully and routes/pages compile.
   - Watch for: prerender/SSR errors, missing exports/imports, invalid metadata, image/config issues, `use client`/server boundary mistakes, and undefined data access.

2. **If build fails**
   - Read the failing route/file from the output.
   - Fix root cause; re-run `npm run build` until clean (or until only known, pre-existing, user-acknowledged issues remain — state them).

3. **Report**
   - Confirm build success/failure and mention key routes compiled (especially `/proposal`, `/epk`, `/pl/proposal`, `/pl/epk` when changed).

---
name: Quality Gate
description: Run TypeScript and lint checks for the Linarex Next.js project to catch errors before finishing changes.
---

## When to use
Use before completing any code change, refactor, or fix in this repository.

## Workflow
1. **TypeScript (required)**
   - Run: `cd /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex && npx tsc --noEmit`
   - Pass criteria: command exits 0 with no type errors.
   - If it fails: fix the reported files/types (do not suppress with `any`/`@ts-ignore` unless the project already uses that pattern with justification).

2. **Lint (required)**
   - Run: `cd /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex && npm run lint`
   - Pass criteria: no blocking errors. Review warnings; fix warnings introduced by the current change when practical.
   - Project script: `eslint` (Next.js 15 / ESLint config in repo).

3. **Report**
   - List commands run, pass/fail, and any remaining diagnostics with `path:line` when available.
   - If checks cannot run (missing deps/env), state that explicitly and run `npm run build` as a fallback gate.

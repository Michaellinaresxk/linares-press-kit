---
name: UI System Check
description: Review UI changes for Linarex design-system consistency, SOLID/KISS/DRY structure, responsive margins, accessibility, and motion behavior.
---

## When to use
Use when changing components, CSS modules, Tailwind classes, layout, typography, spacing, or animations.

## Checklist
1. **Structure (SOLID/KISS/DRY)**
   - Components have clear responsibilities; shared behavior lives in shared components/utils (`siteConfig`, i18n, `src/lib/motion.ts`), not copied across pages.
   - No unnecessary abstraction; changes follow existing project patterns.

2. **Design system consistency**
   - Typography hierarchy matches established use (Bebas/Cormorant/DM Sans roles), labels/titles/body are organized.
   - Colors/contrast align with the dark palette/tokens; avoid ad-hoc values when a token/pattern exists.
   - CTAs/links have consistent states (`hover`, `focus-visible`) and adequate tap targets.

3. **Margins, layout, responsive**
   - Consistent gutters/containers (`min(100% - Xpx, max-width)`), section spacing, and alignment.
   - Check breakpoints (mobile ~360/520, tablet ~700/900, desktop). No overflow, clipped text, or content covering key imagery (e.g. hero faces).
   - Long strings (emails/URLs) wrap safely.

4. **Accessibility & i18n/motion**
   - Correct semantics (`h1`→`h2` order, landmarks), locale-aware labels/aria where applicable.
   - Animations/transforms respect `prefers-reduced-motion` and/or `useReducedMotion`.

5. **Report**
   - Note files reviewed, issues found (with `path:line`), fixes applied, and any visual checks recommended in browser.

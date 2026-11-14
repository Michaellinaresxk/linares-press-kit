# Plan — 001 Global positioning: Caribbean roots

**Spec:** `specs/001-global-positioning-caribbean-roots/spec.md`  
**Status:** draft (plan)  
**Scope:** copy/positioning + i18n keys/data for EN/PL across Home, Live show (`/proposal` today, renamed in spec 002), EPK, and shared UI. **No code changes in this step.**  
**Out of scope (other specs):** technical i18n/SEO/routing refactor (002), shared-component DRY refactor (003), visual redesign, PDF template rework beyond content fed into existing PDFs (coordinate with 002 R5 as noted in spec).

## 1. Current state (code review)

| Area | Current location | Notes |
|---|---|---|
| Home hero/about/music/experience | `src/lib/i18n/home.ts`, `src/components/Hero.tsx`, `src/components/About.tsx`, `src/components/FeaturedSinglePlayer.tsx`, `src/components/ExperienceTeaser.tsx` | `hero.badge` = tagline today; home bio is `about.bornAndNow` + `about.latestSingle`; `music.memoriesTagline` only for Memories. |
| Live show (proposal) | `src/lib/i18n/proposal.ts`, `src/components/ProposalView.tsx`, `src/app/(en)/proposal/page.tsx`, `src/app/(pl)/pl/proposal/page.tsx` | No brand eyebrow in hero; `liveShowBody`/experience copy local; people bios hardcoded in `siteConfig.live.artists` (EN only). |
| EPK | `src/lib/i18n/epk.ts`, `src/components/EpkView.tsx`, `src/app/(en)/epk/page.tsx`, `src/app/(pl)/pl/epk/page.tsx` | Uses `eyebrow` (“Electronic Press Kit”), `pitch`, `aboutText`, local `liveBody`, facts derived partly from config/labels in component, release descriptions from `siteConfig.releases[].description`. Metadata comes from `epk.metadata.*` and `siteConfig.seo.epk*`. |
| Footer | `src/components/SiteFooter.tsx` | Copy inline (EN/PL object) including `taglineLine2` with “familiar hits”. |
| Shared data | `src/lib/site-config.ts` | `seo.*` descriptions, `live.artists[].role/description`, `liveShow.description/trajectory`, `releases[].description`, proposal/live strings used across routes. |
| Music surfaces | `FeaturedSinglePlayer` (Memories) and EPK release list | Taglines/descriptions not yet unified as `music.*.tagline` shared keys. |

**Constraint to respect:** spec 001 requires shared keys without copies (`brand.tagline`, `live.intro`, `music.*.tagline`, shared about). Today translations are split by file and some text lives in `site-config`. The plan must make the source of truth explicit (single key/location) and update all consumers.

## 2. Implementation strategy

1. **Centralize 001 copy in i18n** (align with “nada hardcodeado”, same key EN/PL): introduce/adjust keys from the spec table in the appropriate `src/lib/i18n/*` modules (or a small shared module if needed for cross-route keys) and remove/stop using duplicated literals in components/config for those texts.
2. **Route-surface updates:** wire existing components/pages to the new keys so Home, Live show, EPK (and PL mirrors) render the same story; keep route roles distinct (no covers/hits outside Live show).
3. **Data alignment:** move/override display copy that must be bilingual and shared (e.g. Linarex people role/bio per 001, release taglines shown on site) into the translation source used by UI; keep non-translated proper nouns/titles as-is.
4. **Metadata/PDF content:** update EN/PL metadata strings required by E1/E6; identify PDF source/generation path for `public/linarex-epk.pdf` and `Live-Music-Proposal.pdf` (or their generators) so regenerated PDFs consume the new copy (execution may depend on 002 R5 pipeline — document exact steps/files found).
5. **Defer P1–P3 to the end** (assets/real quote; see section 6).

## 3. Files to change and how

### 3.1 i18n / copy sources (core)

| File | Changes |
|---|---|
| `src/lib/i18n/home.ts` | Add `brand.tagline` exposure for UI (or import from shared) per G1 usage on Home; replace/extend hero + about keys: set hero badge to `brand.tagline` (EN/PL), replace `about.bornAndNow`/`about.latestSingle` usage with `about.short.p1` + `about.short.p2` (H1) while keeping `about.quote` (H2) if non-redundant; add/use `music.memories.tagline`, `music.renacer.tagline`, `music.vaiven.tagline` as shared display taglines; update `experience.copy`/related text only if needed to avoid covers-on-home and keep roles consistent (verify against G2/L rules). Keep types in sync. |
| `src/lib/i18n/epk.ts` | Add `brand.tagline` (eyebrow, E1/G1), `epk.hero.intro`, `epk.facts.experience.value`, `epk.facts.sound.label/value`, `epk.facts.live.label/value`, `about.long.p1–p3`, consume shared `live.intro` (E4) and shared `music.*.tagline` (E5), add `meta.epk.description` (EN/PL) and wire metadata consumers to it; remove/replace old `pitch`, `aboutText`, `liveBody` duplicates so no parallel copies remain. |
| `src/lib/i18n/proposal.ts` | Add/consume `brand.tagline` eyebrow (L1), replace intro/body copy with shared `live.intro` (L2) where applicable, add `people.linarex.role` and `people.linarex.bio` (L3) for UI consumption; adjust any text that implies “familiar hits/covers” outside allowed framing (covers remain described only within Live show context per rules). |
| `src/lib/i18n/navigation.ts` (and/or new shared i18n module if clearer) | Host or re-export **shared** keys used across routes (`brand.tagline`, `live.intro`, `music.*.tagline`, possibly shared about helpers) to guarantee “misma clave en todas las rutas” without duplication. Keep naming consistent with spec keys. |
| `src/lib/site-config.ts` | Align data-as-copy with 001: update `seo.epkDescription` (and related EN defaults if surfaced) or delegate to i18n; update `releases[].description` / usage so EPK+Home music taglines come from `music.*.tagline` (single source) instead of hardcoded EN strings; update `live.artists` entry for Linarex to source role/bio from 001 copy (bilingual) or provide localized fields consumed by views; review `liveShow.description`/proposal-facing text to avoid conflicting/duplicated messaging vs `live.intro`. Keep proper nouns, song titles, “Linarex Experience”, “Executive Producer/feat.” unchanged except where role must be “Executive Producer”. |

### 3.2 Components / UI wiring

| File | Changes |
|---|---|
| `src/components/Hero.tsx` | Render `brand.tagline` (G1) from shared/i18n key (currently `copy.hero.badge`) so Home hero matches master tagline EN/PL. |
| `src/components/About.tsx` | H1: replace body paragraphs to render `about.short.p1` + `about.short.p2` (same story as EPK short/about), using vars if needed; keep pull quote `about.quote` (H2) only if not repeating bio. Ensure origin/location interpolation still correct. |
| `src/components/SiteFooter.tsx` | G2: replace inline `taglineLine2` with `footer.description` from i18n (EN/PL), remove “familiar hits/covers” messaging; keep booking/links behavior. May require importing locale copy or receiving props — choose minimal, consistent pattern. |
| `src/components/EpkView.tsx` | G1: show `brand.tagline` in hero/eyebrow area per spec (and keep “Electronic Press Kit” label only if design/IA requires, but do not conflict with spec — likely tagline as eyebrow). E1: hero intro = `epk.hero.intro`. E2: quick facts labels/values use `epk.facts.*` (Experience/Sound/Live) with correct EN/PL. E3: About renders `about.long.p1–p3`. E4: live intro uses shared `live.intro`. E5: music release taglines use `music.*.tagline`. Remove hardcoded strings inside component (e.g. connect/stream headings/descriptions, fact fallbacks) by moving to i18n keys where user-visible. |
| `src/components/ProposalView.tsx` | L1: add hero eyebrow with `brand.tagline`. L2: live intro/body uses shared `live.intro` (replacing/aligning `liveShowBody` / experience text as needed without duplicating). L3: Linarex card shows `people.linarex.role` and `people.linarex.bio` (EN/PL). Keep Jacke content unchanged here (translation of Jacke bios is spec 002 R3 per note). Ensure hero H1/tagline “Linarex Experience” preserved. |
| `src/components/ExperienceTeaser.tsx` | Review copy usage so Home teaser does not mention covers/hits (Home must not talk about covers/formats per roles/G2/L rules); align with 001 tone using existing/new keys as needed. |
| `src/components/FeaturedSinglePlayer.tsx` | Use `music.memories.tagline` (shared key) instead of `home.music.memoriesTagline` so tagline is consistent with EPK/Home as specified (E5). |
| `src/components/Music.tsx` | Only if prop/key wiring changes are required. |
| `src/components/ConnectAndStream.tsx`, `src/components/Contact.tsx`, `src/components/PhotoGallery.tsx`, `src/components/SiteNavigation.tsx` | Touch only if they contain hardcoded copy affected by 001 or need access to shared tagline/footer keys; otherwise no change. (Verify during implementation.) |

### 3.3 Routes, metadata, and PL parity

| File | Changes |
|---|---|
| `src/app/(en)/page.tsx`, `src/app/(pl)/pl/page.tsx` | Pass any new locale props only if required; ensure Home renders updated sections. |
| `src/app/(en)/epk/page.tsx`, `src/app/(pl)/pl/epk/page.tsx` | E6: set `metadata.description` (and OG/Twitter description where applicable) from `meta.epk.description` / updated `epkCopy.*.metadata` EN/PL. |
| `src/app/(en)/proposal/page.tsx`, `src/app/(pl)/pl/proposal/page.tsx` | Update metadata/copy only if 001 requires Live show messaging changes beyond view text (keep aligned with “covers mentioned only in Live show”). |
| `src/app/(en)/layout.tsx`, `src/app/(pl)/layout.tsx`, `src/const/metadata.ts` | Update only if global/site metadata strings must reflect 001 positioning; avoid scope creep into 002 SEO mechanics. |

### 3.4 Documents (PDFs)

| File / artifact | Changes |
|---|---|
| `public/linarex-epk.pdf`, `public/Live-Music-Proposal.pdf` (and any PL variants if they exist) | Regenerate with new copy EN/PL once content sources are updated (spec acceptance: “PDFs regenerados con el copy nuevo…”). Identify generator in repo (e.g. scripts, React-PDF templates, or external process); if none exists, document the manual/export step in tasks and add a follow-up note. |

## 4. Key mapping checklist (spec compliance)

- **G1 `brand.tagline`:** Home hero, Live show hero eyebrow, EPK hero eyebrow — same key/value per locale.
- **G2 `footer.description`:** all routes/footer instances, no “covers/familiar hits”.
- **H1:** Home bio = `about.short.p1` + `about.short.p2`.
- **H2:** keep pull quote if not redundant.
- **L1–L3:** Live show eyebrow + `live.intro` + `people.linarex.role/bio`.
- **E1–E6:** hero intro, facts, `about.long.p1–p3`, shared `live.intro`, shared `music.*.tagline`, `meta.epk.description`.
- **Shared keys (no copies):** `live.intro`, `music.memories|renacer|vaiven.tagline`.
- **Language/role rules:** no “charismatic/passionate/radiant” self-claims; no metal/producer(without Executive)/forbidden clichés; Linarex not presented as singer; covers/hits only on Live show; PL for all new keys (draft OK, mark for native review).

## 5. Suggested implementation order (P1–P3 last)

1. **Shared foundation:** define/add shared keys and PL drafts in i18n (`brand.tagline`, `footer.description`, `live.intro`, `about.short/long`, `people.linarex.*`, `music.*.tagline`, `epk.hero.intro`, `epk.facts.*`, `meta.epk.description`); remove duplicate sources.
2. **Global + Home:** wire G1/G2, H1/H2 in `Hero`, `About`, `SiteFooter`, `ExperienceTeaser`, `FeaturedSinglePlayer`/music surfaces; verify Home has no covers mention.
3. **Live show:** L1–L3 in `ProposalView`/proposal i18n + Linarex artist data localization; ensure covers remain only here.
4. **EPK:** E1–E6 in `EpkView`, EPK i18n, metadata routes, release tagline rendering.
5. **Cross-route QA pass (copy-level):** grep for forbidden terms/copies, confirm shared key reuse, confirm EN/PL parity for touched keys.
6. **Final tasks (do last, per request):** **P1** select/swap first Live block video showing public interaction (EPK + Live show assets/URLs), **P2** choose/swap EPK hero photo conveying warmth/energy, **P3** add real third-party quote with permission (or keep block hidden if none). Then regenerate PDFs after final copy/assets settle.

## 6. Validation plan (when implementing later)

- Manual: read `/`, `/proposal`, `/epk` and `/pl/*` on mobile widths; confirm tagline in all 3 heroes, “Caribbean” present in EPK hero/About/Live without same sentence repeated, no forbidden terms, footer clean.
- Automated gates per project flow: `npx tsc --noEmit`, `npm run lint`, `npm run build`, and `npx playwright test` (plus targeted checks for affected routes/components as needed).
- Spec acceptance: tick all criteria in `spec.md` including EN/PL completeness, no hardcoded text, PL native review, PDFs regenerated.

## 7. Risks / notes

- **Spec 002/003 overlap:** route is currently `/proposal` (not `/live-show`) and i18n architecture may evolve; implement 001 with minimal structural churn and prefer additive/shared keys that 002/003 can later consolidate.
- **Bilingual artist/config data:** `siteConfig` is currently EN-centric; 001 needs PL-visible role/bio/taglines — plan introduces localized fields or i18n lookups without breaking existing consumers.
- **“No copies” of shared text:** audit for any remaining inline duplicates in components, config, and metadata after wiring.
- **P1–P3 dependencies:** blocked on asset/quote decisions (open questions in spec) — explicitly scheduled last.

## 8. Open questions (carry over)

- [ ] P1: which clip best shows connection with the audience?
- [ ] P2: which photo for EPK hero?
- [ ] P3: real quote available (Deski, Jacke Matheus, other) and permission?
- [ ] Who reviews Polish copy? 
- [ ] PDF generation source/process in this repo for regenerating EN/PL outputs? (confirm during implementation)
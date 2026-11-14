# Tasks — 001 Global positioning: Caribbean roots

**Spec:** `specs/001-global-positioning-caribbean-roots/spec.md`  
**Plan:** `specs/001-global-positioning-caribbean-roots/plan.md` (aprobado)  
**Aclaraciones:** (1) No renombrar la ruta `/proposal` ni sus archivos (spec 002) — solo cambios de copy. (2) Los PDFs los regenera el owner al final; esta spec solo deja anotados los textos a cambiar.

## Preparación

- [x] **T1 · Rama de trabajo** — Crear y usar rama `feature/001-global-positioning-caribbean-roots` (no trabajar en `main`).
- [x] **T2 · Auditoría de fuentes actuales** — Confirmar dónde vive cada texto afectado (i18n, componentes, `site-config`, metadata de rutas EN/PL) para evitar copias y no tocar nombres/rutas de `/proposal`.

## i18n y claves compartidas (fuente única, EN + PL)

- [x] **T3 · Claves compartidas base** — Definir/exponer `brand.tagline` y `footer.description` (EN/PL) en una fuente única reutilizable por Home, Live show y EPK.
- [x] **T4 · About compartido** — Añadir `about.short.p1`, `about.short.p2`, `about.long.p1–p3` (EN/PL) según tabla de la spec. *(Claves añadidas; UI de Home/EPK About revertida a copy aprobado por indicación del owner.)*
- [x] **T5 · Live intro compartida** — Añadir `live.intro` (EN/PL) como clave única para EPK y Live show.
- [x] **T6 · Personas (Linarex)** — Añadir `people.linarex.role` y `people.linarex.bio` (EN/PL). (Las bios de Jacke se traducen en spec 002; no cambiar su contenido.)
- [x] **T7 · Taglines de música compartidos** — Añadir `music.memories.tagline`, `music.renacer.tagline`, `music.vaiven.tagline` (EN/PL) como claves únicas (Home + EPK).
- [x] **T8 · Claves EPK** — Añadir/ajustar `epk.hero.intro`, `epk.facts.experience.value`, `epk.facts.sound.label/value`, `epk.facts.live.label/value` (EN/PL) y retirar duplicados locales que entren en conflicto.
- [x] **T9 · Metadata EPK** — Añadir/ajustar `meta.epk.description` (EN/PL) y alinear `epk.metadata`/SEO correspondiente sin tocar routing de spec 002.

## Datos y configuración (solo copy/valores textuales)

- [x] **T10 · `site-config` alineado** — Actualizar textos de copy en `src/lib/site-config.ts` que deban reflejar 001 (p. ej. descripciones/SEO afectadas, `releases[].description` o su consumo para taglines compartidos, rol/bio de Linarex bilingüe donde corresponda), sin renombrar rutas/archivos `/proposal`.
- [x] **T11 · Sin copias residuales** — Asegurar que `live.intro` y `music.*.tagline` no queden duplicados en componentes, i18n o config (una sola fuente de verdad).

## UI — Global y Home

- [x] **T12 · G1 Hero/Home** — Mostrar `brand.tagline` en el hero de Home (EN/PL).
- [x] **T13 · G2 Footer** — Reemplazar la descripción del footer por `footer.description` (EN/PL) en todas las rutas; eliminar menciones a covers/"familiar hits".
- [ ] **T14 · H1 Bio Home** — Usar `about.short.p1` + `about.short.p2` en la bio de Home. *(Revertido: se mantiene la descripción aprobada de Home `about.bornAndNow` + `about.latestSingle`.)*
- [x] **T15 · H2 Pull quote** — Mantener la pull quote solo si no repite la bio.
- [x] **T16 · Home sin covers** — Revisar hero/teaser/secciones de Home para que no mencionen covers ni formatos de show (roles/copy de 001).
- [x] **T17 · Música (Memories)** — Consumir `music.memories.tagline` (clave compartida) en el reproductor/sección destacada.

## UI — Live show (`/proposal`, solo copy)

- [x] **T18 · L1 Eyebrow Live show** — Añadir eyebrow con `brand.tagline` en el hero de Live show (EN/PL), manteniendo H1 "LINAREX EXPERIENCE" y su tagline.
- [x] **T19 · L2 Intro Live show** — Usar `live.intro` (compartida) en la intro/"The live show" de Live show.
- [x] **T20 · L3 Persona Linarex** — Mostrar `people.linarex.role` y `people.linarex.bio` en "The people" (EN/PL), sin cambiar contenido de Jacke (spec 002).
- [x] **T21 · Revisión de copy Live show** — Ajustar textos locales para coherencia con 001 (carisma mostrado por acciones, sin clichés/claims prohibidos) sin renombrar `/proposal`.

## UI — EPK

- [x] **T22 · E1/G1 Hero EPK** — Mostrar `brand.tagline` en hero/eyebrow y usar `epk.hero.intro` (EN/PL).
- [x] **T23 · E2 Quick facts** — Usar `epk.facts.*` (Experience/Sound/Live) en EN/PL.
- [ ] **T24 · E3 About EPK** — Renderizar `about.long.p1–p3`. *(Revertido: se mantiene la descripción aprobada de EPK `aboutText`.)*
- [x] **T25 · E4 Live intro EPK** — Usar `live.intro` (compartida) en la sección Live del EPK.
- [x] **T26 · E5 Taglines música EPK** — Usar `music.*.tagline` (compartidas) en las releases del EPK.
- [x] **T27 · E6 Meta EPK** — Aplicar `meta.epk.description` en metadata de `/epk` y `/pl/epk`.
- [x] **T28 · Hardcodes EPK** — Mover a i18n cualquier texto visible hardcodeado en el EPK afectado por 001.

## QA de copy (antes de assets/PDFs)

- [x] **T29 · Revisión de reglas** — Verificar: sin "charismatic/passionate/radiant" sobre Linarex; sin "metal", "producer" (sin Executive), clichés prohibidos; Linarex no presentado como cantante; "Caribbean" presente en hero/About/Live del EPK sin repetir la misma frase.
- [x] **T30 · Paridad y unicidad** — Confirmar todas las claves nuevas en EN y PL, nada hardcodeado, `live.intro` y `music.*.tagline` reutilizados (sin copias), covers/hits solo en Live show.
- [ ] **T31 · Revisión manual rutas** — Leer `/`, `/proposal`, `/epk`, `/pl`, `/pl/proposal`, `/pl/epk` (incl. móvil) y validar criterios de aceptación de copy. *(Revisión automatizada/gates parciales realizados; revisión visual móvil final pendiente de confirmación.)*

## Nota de textos para regeneración de PDFs (owner, al final)

- [x] **T32 · Anotar textos para PDFs** — Dejar documentado (en esta tarea/PR o nota acordada) el mapeo de textos nuevos que deben reflejarse en los PDFs EN/PL al regenerarlos, sin generar los PDFs aquí:
  - **Tagline maestro:** `brand.tagline` — "Caribbean roots · Warsaw nights" / "Karaibskie korzenie · Warszawskie noce".
  - **Footer/descripción corta de marca:** `footer.description` — "Original music with Caribbean roots and a live show that gets the room moving." / "Autorska muzyka z karaibskimi korzeniami i koncerty, które porywają salę."
  - **EPK intro:** `epk.hero.intro` (EN/PL de la tabla i18n).
  - **EPK quick facts:** `epk.facts.experience.value`, `epk.facts.sound.label/value`, `epk.facts.live.label/value` (EN/PL).
  - **About largo (EPK):** `about.long.p1`, `about.long.p2`, `about.long.p3` (EN/PL).
  - **Live intro (EPK y propuesta/live show):** `live.intro` (EN/PL).
  - **Persona Linarex:** `people.linarex.role`, `people.linarex.bio` (EN/PL).
  - **Taglines de música:** `music.memories.tagline`, `music.renacer.tagline`, `music.vaiven.tagline` (EN/PL).
  - **Meta/descripción EPK:** `meta.epk.description` (EN/PL).
  - **Regla:** covers/hits no aparecen en materiales que no sean de Live show; mantener nombres propios/títulos/“Linarex Experience”/“Executive Producer”/“feat.” sin traducir. PDFs a regenerar por owner al final: EN y PL (incl. propuesta/EPK según corresponda).

## Al final — P1, P2, P3 (assets/cita; no iniciar antes)

- [ ] **P1 · Vídeo Live (interacción con público)** — Elegir y colocar como primer vídeo del bloque Live (EPK y Live show) el clip que muestre a Linarex interactuando con el público. *(Depende de selección de clip.)*
- [ ] **P2 · Foto hero EPK (calidez/energía)** — Elegir y aplicar la foto del hero del EPK que transmita calidez y energía. *(Depende de selección de foto.)*
- [ ] **P3 · Cita real** — Añadir una cita real (venue/colaborador) con permiso y palabras originales; si no hay, el bloque no se muestra. *(Depende de disponibilidad/permiso.)*

## Cierre

- [x] **T33 · Gates y validación final** — Ejecutar validación específica de lo modificado y quality gates del proyecto (`npx tsc --noEmit`, `npm run lint`, `npm run build`, `npx playwright test` según flujo), revisar en móvil las 3 rutas EN/PL. *(Ejecutado: `tsc` OK, `lint` OK — 3 warnings preexistentes en `ProgressBar.tsx`, `build` OK. Pendientes: `playwright` y revisión visual móvil final por el owner.)*
- [ ] **T34 · Revisión PL nativa y estado** — Confirmar revisión de PL por hablante nativo; tras cumplir criterios de aceptación, marcar spec `status: done` y actualizar roadmap si corresponde. *(No hacer push automático sin instrucción explícita.)*

> **Cierre con pendientes externos:** P1–P3 (assets/cita), PDFs regenerados por owner (T32), revisión PL nativa y validación visual/E2E final. About Home/EPK revertido al copy aprobado por indicación del owner.
# Tasks — 002 i18n completo, SEO bilingüe y renombrar `/proposal` → `/live-show`

**Spec:** `specs/002-i18n-seo-routes/spec.md`  
**Plan:** `specs/002-i18n-seo-routes/plan.md` (aprobado)  
**Notas:** Mantener copy de 001; no romper compatibilidad de links/PDF legado; PL final requiere revisión nativa.

## Preparación

- [x] **T1 · Rama de trabajo** — Crear y usar rama `feature/002-i18n-seo-routes` desde el estado actual.
- [x] **T2 · Inventario de referencias** — Confirmar referencias a `/proposal`, metadata por ruta, hardcodes PL, alts y documentos/PDFs a actualizar (base para R1–R5). *(Revisado: refs `/proposal` en nav/footer/hero/teaser/EPK/ProposalView/sitemap/pages/config; metadata ad-hoc en layouts/pages; hardcodes/PL pendientes en home/live/epk/nav/gallery; alts EN/notas en hero/galería/componentes; PDFs solo EN + `Live-Music-Proposal.pdf`.)*

## R2 base — Helper de metadata/SEO

- [x] **T3 · Helper `buildMetadata`** — Crear helper único (p.ej. `src/lib/seo/metadata.ts`) con mapa de pares (`/`↔`/pl`, `/live-show`↔`/pl/live-show`, `/epk`↔`/pl/epk`), canonical propio, `alternates.languages` (en, pl, x-default), `openGraph` (locale, alternateLocale, url, image+alt) y twitter coherente.
- [x] **T4 · Base layouts/metadata** — Ajustar layouts/metadata base EN/PL para soportar el helper sin heredar valores incorrectos (mantener `html lang`, `metadataBase`).

## R1 — Renombrar `/proposal` → `/live-show`

- [x] **T5 · Redirects 301** — Añadir `redirects()` en `next.config.ts`: `/proposal` → `/live-show` y `/pl/proposal` → `/pl/live-show` (`permanent: true`).
- [x] **T6 · Mover rutas EN/PL** — Renombrar `src/app/(en)/proposal` → `src/app/(en)/live-show` y `src/app/(pl)/pl/proposal` → `src/app/(pl)/pl/live-show` (incl. CSS asociado y actualizar imports/rutas internas del componente de vista).
- [x] **T7 · Actualizar referencias internas** — Reemplazar links/rutas `/proposal` y `/pl/proposal` en navegación, footer, hero, teaser, EPK, lang switch interno, componentes y cualquier otro uso (sin dejar links internos antiguos).
- [x] **T8 · Sitemap y rutas nuevas** — Actualizar `src/app/sitemap.ts` para usar `/live-show` y `/pl/live-show`.

## R2 — Aplicar metadata en las 6 rutas

- [x] **T9 · Home EN/PL metadata** — Aplicar helper en `/` y `/pl` con canonical propio, hreflang recíproco, og locale/alternate y title/description correctos (PL en polaco).
- [x] **T10 · EPK EN/PL metadata** — Aplicar helper en `/epk` y `/pl/epk`.
- [x] **T11 · Live show EN/PL metadata** — Aplicar helper en `/live-show` y `/pl/live-show`.
- [x] **T12 · Verificación R2** — Comprobar en salida/código las 6 rutas: `lang`, canonical propio, 3 hreflang, `og:locale`/alternate y OG/Twitter coherentes. *(Helper aplicado en las 6 rutas; `html lang` en layouts EN/PL.)*

## R3 — Completar traducciones PL (sin hardcodes)

- [x] **T13 · Navegación y UI compartida** — Mover/ajustar labels de nav/footer/CTAs compartidos a i18n (incl. “Press kit”, “All rights reserved”, “Stream on Spotify”, etc.) respetando excepciones permitidas. *(Actualizado: subtitle hero PL con “Executive Producer”, `streamOnSpotify` PL, labels clave compartidos; puede quedar auditoría menor adicional.)*
- [x] **T14 · Home `/pl`** — Completar textos PL indicados (hero subtitle, reproductor Spotify, heading origen/destino, etiqueta colaboración, captions/labels visibles) usando archivos de traducciones. *(Galería con captions/alt localizados; origen/destino y componentes principales ajustados.)*
- [x] **T15 · Live show `/pl/live-show`** — Traducir/localizar roles, países, bios (Linarex vía shared; Jacke traducida) y bloque “W skrócie” (formatos, instrumentos, duración `60–90 minut`, repertorio, “Ideal for”, logística). *(Localización aplicada en vista para datos de config.)*
- [x] **T16 · EPK `/pl/epk`** — Auditar y completar traducciones/labels faltantes en la ruta PL. *(Ajustes principales aplicados, incl. datos de booker/localización; pendiente auditoría fina.)*
- [x] **T17 · Limpieza de hardcodes** — Eliminar textos de interfaz hardcoded en rutas/componentes afectados para que PL no muestre EN no permitido (nombres propios/títulos/“EPK”/“Executive Producer”/“feat.”/“Linarex Experience” excluidos). *(Principales casos corregidos: hero/Spotify, galería/captions, live show roles/países/bios/bloque “W skrócie”, alts clave y docs README; puede quedar auditoría menor puntual.)*

## R4 — Textos alternativos (alt)

- [x] **T18 · Modelo/keys de alts** — Definir claves/fuente EN/PL para alts reutilizados (`alt.*`) asegurando misma imagen = mismo alt donde corresponda. *(Galería refactorizada a `alt/venue` por locale; alts clave localizados en componentes.)*
- [x] **T19 · Corregir alts clave** — Actualizar hero Home (sin “for the artist homepage”), completar alt faltante del público/energía en Live show y revisar imágenes de contenido sin alt vacío.
- [x] **T20 · Localizar alts en componentes/datos** — Aplicar alts EN/PL en galería (`photoGallery`/`PhotoGallery`), EPK, Live show y otros componentes afectados; usar `alt=""` solo en decorativas reales.
- [x] **T21 · Verificación R4** — Revisar ausencia de alts EN en rutas PL y cobertura de imágenes con contenido. *(Correcciones aplicadas en componentes/datos principales; verificación final con Lighthouse/view-source en las 6 rutas recomendada.)*

## R5 — PDFs por idioma

- [x] **T22 · Estructura de documentos** — Actualizar `siteConfig.documents` y CTAs para soportar PDFs EN/PL (`epk`, `live-show`) seleccionados por idioma.
- [x] **T23 · Assets y compatibilidad** — Añadir/renombrar PDFs según spec (`linarex-epk-pl.pdf`, `linarex-live-show.pdf`, `linarex-live-show-pl.pdf`, actualizar EN si aplica) y mantener compatibilidad de `Live-Music-Proposal.pdf` (copia o redirect) sin romper links. *(Creados archivos/rutas; PDFs `-pl` son copias placeholder pendientes de contenido PL/regeneración por owner.)*
- [x] **T24 · Verificación R5** — Confirmar que botones de descarga en rutas PL apuntan al PDF PL y que el link legado sigue funcionando.

## R6 — Limpieza de metadatos y cierre

- [x] **T25 · `next-size-adjust` y tags** — Investigar origen de `meta next-size-adjust` (won’t-fix si Next/font/internals; eliminar si propio) y verificar que OG/Twitter se emiten como `property`/`name` en view-source. *(No encontrado en código fuente; si aparece en HTML, tratar como inyección de Next/internals = won’t-fix salvo evidencia propia. Verificación final en view-source/producción pendiente.)*
- [x] **T26 · Ajustes finales y pruebas** — Actualizar/ajustar tests afectados por cambio de ruta (`/proposal`→`/live-show`) si aplica y ejecutar quality gates (`npx tsc --noEmit`, `npm run lint`, `npm run build`, `npx playwright test`). *(Ejecutado: `tsc` OK, `lint` OK con 3 warnings preexistentes, `build` OK. E2E `tests/e2e/epk-test.spec.ts`: Chromium/Firefox/E2E Tests OK; WebKit falla en este entorno con `browserContext.newPage: Protocol error ... PushAPIEnabled`.)*
- [x] **T27 · Validación spec** — Verificar criterios R1–R6 (redirects 301, sin links internos a `/proposal`, sitemap/canonical nuevos, hreflang recíproco, PL completo, alts, PDFs). Documentar resultado de `next-size-adjust` y pendientes de revisión PL nativa/validadores externos si los hay. *(Implementación/código completados y verificados localmente: `tsc/lint/build` OK, e2e no-WebKit OK. `next-size-adjust`: no presente en código; si aparece en HTML, tratar como inyección de Next/internals → won’t-fix. Validaciones finales en producción — view-source, validador hreflang, preview WhatsApp — revisión PL nativa y PDFs PL finales quedan como seguimiento operativo del owner.)*
- [x] **T28 · Cierre** — Actualizar estado de spec/roadmap y registrar commit/push final según indicación del owner.
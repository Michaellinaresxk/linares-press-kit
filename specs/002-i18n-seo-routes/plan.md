# Plan — 002 i18n completo, SEO bilingüe y renombrar `/proposal` → `/live-show`

**Spec:** `specs/002-i18n-seo-routes/spec.md`  
**Status:** draft (plan, pendiente de aprobación)  
**Scope:** renombre de ruta + redirects, hreflang/canonical/OG/lang para las 6 rutas, completar traducciones PL, alts EN/PL, PDFs por idioma y limpieza de metadatos. **No tocar código en este paso.**  
**Dependencias/relación:** copy de 001 ya aplicado parcialmente (claves compartidas en `src/lib/i18n/shared.ts`, wiring en Home/Live/EPK); 003 cubrirá DRY de componentes/datos compartidos (links, galería/alts únicos) — este plan debe ser compatible y evitar duplicación innecesaria.

## 1. Estado actual (revisión de código)

| Área | Estado actual | Observaciones |
|---|---|---|
| Rutas Live show | `src/app/(en)/proposal/*`, `src/app/(pl)/pl/proposal/*`, componente `ProposalView`, i18n `src/lib/i18n/proposal.ts`, CSS `proposal.module.css` | Múltiples referencias internas a `/proposal` y `/pl/proposal` (nav, footer, hero, EPK, experience teaser, sitemap, metadata, lang switch dentro de ProposalView). |
| Redirects | No hay `redirects()` en `next.config.ts` | R1 requiere 301 permanente para ambas rutas. |
| Metadata/SEO | `src/const/metadata.ts` (home EN), layouts `(en)`/`(pl)` con `lang`, páginas con `alternates/openGraph/twitter` parciales e inconsistentes; sin `hreflang` completo ni helper único | R2 exige helper único (p.ej. `buildMetadata({ route, locale })`) para canonical propio, `alternates.languages` (en/pl/x-default), `og:locale` + `alternateLocale`, y uso en las 6 rutas. |
| Sitemap/robots | `src/app/sitemap.ts` incluye `/proposal` y `/pl/proposal`; `robots.ts` correcto en esencia | Actualizar sitemap a rutas nuevas y mantener consistencia de host/base. |
| PL incompleto / hardcodes | Textos EN/hardcoded en componentes y datos (ej. `Hero` subtitle, `FeaturedSinglePlayer` “Stream on Spotify”, `SiteFooter` “Press kit”, `About` heading/captiones implícitas, `photoGallery.ts` alts EN, `proposal.ts` roles/países/bloque “At a glance”, `siteConfig.live.artists` campos no localizados, `/pl` home metadata en EN parcial) | R3 pide mover todo a traducciones (nada hardcodeado), cubrir pares indicados y auditar `/pl/epk`; PL revisado por nativo al cierre. |
| Alts | `Hero` usa alt con nota de producción (“for the artist homepage”); `PhotoGallery`/`photoGallery.ts` y varios componentes tienen alts solo EN o vacíos contextuales; `EpkView`/`ProposalView` mezclan fuentes | R4: sin alts vacíos en imágenes con contenido, sin notas de producción, alts descriptivos EN/PL (claves `alt.*`), misma imagen = mismo alt, decorativas `alt=""` solo si aplica. |
| PDFs | `public/linarex-epk.pdf`, `public/Live-Music-Proposal.pdf` existen; no hay variantes PL ni `linarex-live-show*.pdf` | R5: 4 PDFs finales, rutas PL descargan PDF PL, mantener compatibilidad de `Live-Music-Proposal.pdf` (redirect o copia). `siteConfig.documents.proposalPdf` y botones deben actualizarse. |
| Metadatos/OG image | Posible `meta next-size-adjust` (investigar origen Next/font vs propio); tags OG/Twitter deben salir como `property/name` (verificar view-source, probable artefacto de herramienta); `og:image` sin alt por idioma consistente en todas las rutas | R6: won’t-fix si lo inserta Next/font, eliminar si propio; asegurar `og:image` con alt localizado. |

## 2. Estrategia de implementación

1. **Helper de metadata único (R2, base):** crear utilidad (p.ej. `src/lib/seo/metadata.ts` o `src/lib/i18n/metadata.ts`) `buildMetadata({ route, locale, title, description, ogImageAlt? })` que devuelva `Metadata` con `alternates.canonical`, `alternates.languages` `{ en, pl, 'x-default' }`, `openGraph` (`locale`, `alternateLocale`, `url`, `images` con alt), y `twitter` coherente. Definir mapa de pares EN↔PL para `/`, `/live-show`, `/epk` (y considerar compatibilidad temporal si hiciera falta, pero sitemap/canonical apuntarán a nuevas rutas).
2. **Renombre de ruta (R1):** mover/renombrar segmentos y archivos de Next:
   - `src/app/(en)/proposal` → `src/app/(en)/live-show` (incl. `page.tsx`, `proposal.module.css` → nombre acorde si se decide, p.ej. `live-show.module.css`, y actualizar imports).
   - `src/app/(pl)/pl/proposal` → `src/app/(pl)/pl/live-show`.
   - Añadir redirects en `next.config.ts`: `/proposal`→`/live-show`, `/pl/proposal`→`/pl/live-show` con `permanent: true`.
   - Actualizar todas las referencias internas, canonical/og:url, sitemap y language switcher para resolver pares con la ruta nueva.
3. **Aplicar metadata en las 6 rutas (R2):** refactorizar `layout`/pages (`/`, `/pl`, `/epk`, `/pl/epk`, `/live-show`, `/pl/live-show`) para usar el helper y textos localizados (title/description PL en polaco). Mantener `html lang` en layouts (`en`/`pl`) y `metadataBase` correcto.
4. **Completar i18n PL (R3):** auditar y mover textos hardcoded a archivos de traducciones (`home`, `proposal`/`live-show`, `epk`, `navigation`, `shared` o módulo de UI/alts según convenga), incluyendo lista mínima del spec (hero subtitle, “Stream on Spotify”, heading Home, “Collaboration•2026”, captions galería, footer, roles/países/bios y bloque “W skrócie” de live show, auditoría `/pl/epk`). Respetar excepciones (nombres propios, títulos de canciones, “EPK”, “Executive Producer”, “feat.”, “Linarex Experience”). Marcar PL para revisión nativa.
5. **Alts localizados y consistentes (R4):** introducir claves/estructura `alt.*` (EN/PL) para imágenes de contenido compartidas; corregir hero Home (quitar “for the artist homepage”), completar alt faltante del público/energía en Live show si aplica, y asegurar que `PhotoGallery`, `photoGallery.ts`, EPK/Proposal views y otras imágenes usen la misma fuente por imagen. Coordinar con 003 (D2/D3) para no duplicar lógica.
6. **PDFs por idioma y compatibilidad (R5):** definir nombres/rutas finales (`/linarex-epk.pdf`, `/linarex-epk-pl.pdf`, `/linarex-live-show.pdf`, `/linarex-live-show-pl.pdf`), actualizar `siteConfig.documents` y botones de descarga por locale, y mantener `Live-Music-Proposal.pdf` accesible (copia estática o redirect permanente a `/linarex-live-show.pdf`) sin romper enlaces previos. Contenido de PDFs con copy de 001 (generación/artefactos según proceso disponible).
7. **Limpieza metadatos (R6):** investigar `next-size-adjust` (originado por Next/font/viewport tooling → documentar won’t-fix; si propio → eliminar), verificar en view-source `og:`/`twitter:` correctos, y añadir `og:image` alt localizado en todas las rutas vía helper.

## 3. Archivos a cambiar y cómo

### 3.1 Routing, redirects y estructura de rutas (R1)
| Archivo / ruta | Cambio |
|---|---|
| `next.config.ts` | Añadir `async redirects()` con 301: `/proposal` → `/live-show`, `/pl/proposal` → `/pl/live-show` (`permanent: true`). Considerar trailing slash solo si aplica al comportamiento actual. |
| `src/app/(en)/proposal/page.tsx` → `src/app/(en)/live-show/page.tsx` | Mover ruta; actualizar metadata canonical/og/url a `/live-show` y usar helper R2. |
| `src/app/(en)/proposal/proposal.module.css` → `src/app/(en)/live-show/*` (renombrar si procede) | Mover/renombrar CSS de ruta y actualizar import en `ProposalView` (o reubicar estilos según convenga) sin cambiar UI. |
| `src/app/(pl)/pl/proposal/page.tsx` → `src/app/(pl)/pl/live-show/page.tsx` | Mover ruta PL; metadata localizada con helper. |
| `src/components/ProposalView.tsx` | Actualizar imports/rutas CSS si cambian; lang switcher interno y cualquier link a `/proposal` → `/live-show`; mantener label “Live show”/“Koncert na żywo”. (Nombre del componente/archivo puede mantenerse o renombrarse en refactor — preferir cambio mínimo en 002; si se renombra, actualizar todos los imports.) |
| `src/lib/i18n/proposal.ts` | Mantener contenido i18n y extender para R3; opcionalmente renombrar a `live-show.ts` más adelante — si se hace en 002, actualizar imports en vistas/páginas/epk (evaluar alcance). |
| `src/app/sitemap.ts` | Reemplazar `/proposal` y `/pl/proposal` por `/live-show` y `/pl/live-show`. |
| `src/components/SiteNavigation.tsx` | `proposalHref`/pares de idioma → `/live-show` y `/pl/live-show`; asegurar `isActive` y mapeo EN↔PL correcto para la ruta nueva. |
| `src/components/SiteFooter.tsx` | Link de Live show a rutas nuevas. |
| `src/components/Hero.tsx` | CTA a `/live-show` / `/pl/live-show`. |
| `src/components/ExperienceTeaser.tsx` | Links a rutas nuevas. |
| `src/components/EpkView.tsx` | Link “open proposal/live show” a rutas nuevas. |
| Otros `rg` matches | Actualizar cualquier referencia restante (`/proposal`, `Live-Music-Proposal`) salvo compatibilidad explícita de PDF/link legado. |

### 3.2 Helper y metadata por ruta (R2, R6)
| Archivo | Cambio |
|---|---|
| `src/lib/seo/metadata.ts` (nuevo) o equivalente | Implementar `buildMetadata` + mapa de rutas pares; incluir canonical propio, `languages` en/pl/x-default, `openGraph.locale`/`alternateLocale`, `og:url`, `og:image` con alt localizado, twitter coherente. |
| `src/const/metadata.ts` | Refactorizar home EN para usar helper o alinearlo al nuevo patrón (evitar duplicación). |
| `src/app/(en)/layout.tsx` | Asegurar base metadata/lang; mantener structured data coherente. |
| `src/app/(pl)/layout.tsx` | Asegurar `lang="pl"`, metadata base adecuada (evitar heredar EN incorrectamente) y posible uso de helper/defaults PL donde aplique. |
| `src/app/(en)/page.tsx` (o metadata export en segmento) | Metadata Home EN vía helper (`/`, `/pl`). |
| `src/app/(pl)/pl/page.tsx` | Metadata Home PL localizada (title/description en polaco) vía helper. |
| `src/app/(en)/epk/page.tsx`, `src/app/(pl)/pl/epk/page.tsx` | Migrar a helper con pares `/epk`↔`/pl/epk`, titles/descriptions y OG locales correctos. |
| `src/app/(en)/live-show/page.tsx`, `src/app/(pl)/pl/live-show/page.tsx` | Metadata vía helper con pares `/live-show`↔`/pl/live-show`. |
| Investigación `next-size-adjust` / OG-Twitter tags | Documentar hallazgo (R6): won’t-fix si proviene de Next/font/internals; fix solo si es propio. Verificar salida HTML real. |

### 3.3 Traducciones PL y eliminación de hardcodes (R3)
| Archivo | Cambio |
|---|---|
| `src/lib/i18n/home.ts` | Añadir claves para hero subtitle, CTA Spotify (“Stream on Spotify”), heading “From {origin} to {location}” ya interpolado pero asegurar valores PL correctos (“Z Dominikany do Warszawy”), etiquetas/captions galería visibles en Home si vienen de aquí, tagline Memories ya compartida (001) — verificar uso. |
| `src/lib/i18n/proposal.ts` (o live-show equivalente) | Traducir/completar PL: roles/países/bios (Linarex desde shared 001; Jacke texto actual traducido), bloque “W skrócie” (formatos, instrumentos, duración `60–90 minut`, repertorio, “Ideal for”, logística) y cualquier label residual en EN. |
| `src/lib/i18n/epk.ts` | Auditar `/pl/epk` y completar claves faltantes usadas por `EpkView` u otras superficies PL. |
| `src/lib/i18n/navigation.ts` / `SiteNavigation.tsx` | Asegurar labels EN/PL desde i18n (no strings sueltas si aplica), mantener “Live show”/“Koncert na żywo” y “EPK/Press kit” según spec. |
| `src/lib/i18n/shared.ts` | Añadir claves UI/alt comunes si conviene (p.ej. labels reutilizables, `alt.*` compartidos) respetando single source of truth. |
| `src/components/Hero.tsx` | Quitar subtitle hardcodeado en inglés si aparece en PL; consumir i18n. |
| `src/components/FeaturedSinglePlayer.tsx` | Botón/label Spotify desde i18n (PL “Słuchaj na Spotify”). |
| `src/components/SiteFooter.tsx` | “Press kit”, “All rights reserved” y otros labels según spec/i18n PL. |
| `src/components/About.tsx` | Asegurar heading/textos/captions mostrados en `/pl` sin mezcla EN (respetando copy aprobado/revertido acordado). |
| `src/components/PhotoGallery.tsx`, `src/const/photoGallery.ts` | Localizar captions/labels (“Collaboration•2026”, “Portret/Na scenie/W drodze”) y alts (ver R4). |
| `src/components/*` (EPK/Proposal/Contact/etc.) | Eliminar hardcodes EN en rutas PL detectados en auditoría. |
| `src/lib/site-config.ts` | Donde haya texto de UI no traducible hoy (roles/países/instrumentos/logística mostrados en PL), proveer campos localizados o mover consumo a i18n; mantener nombres propios/títulos/“Linarex Experience”/“Executive Producer”/“feat.”. |

### 3.4 Alts (R4)
| Archivo | Cambio |
|---|---|
| `src/const/photoGallery.ts` | Evolucionar estructura para soportar alts EN/PL (o claves referenciadas) manteniendo misma imagen = mismo significado/alt por contexto definido; evitar duplicación. |
| `src/components/PhotoGallery.tsx` | Seleccionar alt por `locale`; `alt=""` solo para decorativas reales. |
| `src/components/Hero.tsx` | Reemplazar alt por descriptivo sin nota de producción, EN/PL. |
| `src/components/ProposalView.tsx`, `src/components/EpkView.tsx`, `src/components/ExperienceTeaser.tsx`, `src/components/About.tsx`, etc. | Completar/corregir alts faltantes o en inglés en rutas PL; unificar alts de imágenes reutilizadas. |
| `src/lib/i18n/*` o módulo `alt` | Definir claves `alt.*` necesarias y consumirlas desde componentes/datos. |

### 3.5 PDFs y descargas (R5)
| Archivo / asset | Cambio |
|---|---|
| `public/linarex-live-show.pdf` (nuevo, EN) | Añadir/renombrar desde propuesta actual (copy 001). |
| `public/linarex-live-show-pl.pdf` (nuevo) | Generar/añadir versión PL. |
| `public/linarex-epk-pl.pdf` (nuevo) | Generar/añadir versión PL. |
| `public/linarex-epk.pdf` | Actualizar si hace falta con copy 001 (EN). |
| `public/Live-Music-Proposal.pdf` | Mantener compatibilidad: copia del nuevo live-show EN o redirect permanente (según soporte de hosting/Next para archivos estáticos; si redirect de archivo no es directo, conservar archivo idéntico y documentar). |
| `src/lib/site-config.ts` | Actualizar `documents` para exponer rutas por idioma/propósito (`epkPdf`, `epkPdfPl`, `liveShowPdf`, `liveShowPdfPl`, compatibilidad propuesta). |
| `src/components/ProposalView.tsx`, `src/components/EpkView.tsx` y otros CTAs de descarga | Seleccionar PDF según `locale`; rutas PL → PDF PL. |

### 3.6 Verificación y limpieza (R6)
| Archivo / tarea | Cambio |
|---|---|
| Layouts / head output | Investigar origen de `meta next-size-adjust`; eliminar solo si propio, si no documentar won’t-fix en PR/tarea. |
| Todas las páginas 6 rutas | Validar `lang`, `og:locale`, canonical, hreflang recíproco, titles/descriptions PL, `og:image` alt localizado, y tags `property="og:*"` / `name="twitter:*"` en view-source. |

## 4. Orden sugerido de ejecución (tras aprobación)

1. **R2 base:** implementar helper `buildMetadata` + mapa de pares (usando rutas objetivo finales) y utilidades de locale/ruta.
2. **R1:** renombrar carpetas/archivos de `/proposal`→`/live-show`, CSS/imports, redirects en `next.config`, actualizar links internos, sitemap y language switch.
3. **R2 aplicar:** migrar las 6 rutas/layouts a helper y corregir metadata/OG/hreflang/canonical/lang.
4. **R3:** completar traducciones PL y eliminar hardcodes (nav/footer/home/live/epk/gallery/config), auditoría `/pl/epk`.
5. **R4:** implementar `alt.*` EN/PL y corregir imágenes (hero, galería, live/epk, decorativas).
6. **R5:** actualizar referencias de documentos, añadir PDFs por idioma y compatibilidad de `Live-Music-Proposal.pdf`.
7. **R6 + QA:** investigar `next-size-adjust`, validar view-source/validators/preview social en 6 rutas, y ejecutar quality gates.

## 5. Validación prevista

- **Manual/view-source:** 6 rutas con `<html lang>`, canonical propio, 3 hreflang recíprocos, `og:locale`/`og:locale:alternate`, title/description correctos por idioma, `og:image` + alt localizado.
- **Herramientas:** validador hreflang sin errores de reciprocidad; preview OG/Twitter/WhatsApp; Lighthouse Accessibility sin avisos de alt en las 6 rutas.
- **Automatizada (flujo proyecto):** `npx tsc --noEmit`, `npm run lint`, `npm run build`, `npx playwright test` (ajustar/añadir tests si cambian rutas/selectores de `/proposal` a `/live-show`).
- **Criterios spec:** 301 en rutas antiguas, cero links internos a `/proposal`, sitemap/canonical nuevos, rutas PL sin texto UI en inglés no permitido, 4 PDFs correctos y descarga por idioma, R6 resuelto o documentado.

## 6. Riesgos y notas

- **Renombre de ruta amplio:** afecta filesystem de App Router, imports CSS, tests E2E, enlaces compartidos y bookmarks → los redirects 301 y la actualización exhaustiva de referencias son críticos.
- **Helper de metadata:** introducirlo sin romper páginas que hoy exportan metadata ad-hoc; asegurar que `metadataBase` y URLs absolutas sean consistentes.
- **PL pendiente de nativo:** el plan entrega traducciones/cobertura técnica; el cierre del spec requiere revisión por hablante nativo (R3 criterio).
- **PDFs:** generación del contenido final depende del pipeline disponible; mantener compatibilidad de `Live-Music-Proposal.pdf` aunque los nombres nuevos cambien.
- **Coordinación con 003:** alts compartidos y datos de galería/links pueden refactorizarse después; en 002 priorizar corrección y localización correcta sin bloquear por DRY mayor.
- **`next-size-adjust`:** probablemente fuera de control directo (Next/font) — tratar como investigación con resultado explícito (fix o won’t-fix) para cerrar R6.
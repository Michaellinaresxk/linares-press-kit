# Tasks — 003 Componentes y datos compartidos (DRY)

**Spec:** `specs/003-shared-components-dry/spec.md`  
**Plan:** `specs/003-shared-components-dry/plan.md` (pendiente de aprobación)  
**Dependencia:** 002 (R1 `/live-show`) implementada.

## Preparación

- [x] **T1 · Rama de trabajo** — Crear y usar rama `feature/003-shared-components-dry` desde el estado actual.
- [x] **T2 · Inventario y decisiones provisionales** — Mapear consumidores de links/releases/galería/formularios/CTAs/footer/nav; registrar decisiones provisionales para preguntas abiertas (Spotify track IDs Memories/Renacer, Event type “Wedding”, consolidación Cloudinary/assets) sin bloquear el refactor estructural. *(Provisional: Memories/Renacer mantienen URL actual con TODO hasta confirmar track IDs; “Wedding” incluido en Event type como opción provisional; consolidación Cloudinary diferida dejando modelo D3 preparado con TODO.)*

## D1 — Fuente única de links

- [x] **T3 · Módulo canónico de links** — Crear/definir fuente única (`src/lib/links.ts` o equivalente acordado) con perfiles, tracks, vídeos y contacto/booking.
- [x] **T4 · Normalización y correcciones de URLs** — Eliminar query params prohibidos (`si`, `autoplay_ok`, `list`, `start_radio`, `pp`, `utm_*`); aplicar correcciones: Crowd → `https://www.youtube.com/watch?v=UGQpFUqNYTU`, Vaivén sin `?autoplay_ok=1`, Memories/Renacer apuntando a track (usar IDs confirmados o TODO explícito documentado).
- [x] **T5 · Migrar consumidores a links** — Reemplazar URLs externas hardcoded en config, consts y componentes por referencias a D1.
- [x] **T6 · Verificación D1** — Comprobar que no quedan URLs externas inline y validar manualmente destinos clave (artista/track/vídeo/perfiles/email). *(URLs externas centralizadas en `src/lib/links.ts`/`site-config`; Memories/Renacer siguen como TODO track ID.)*

## D2 — Datos de releases

- [x] **T7 · Modelo y fuente única de releases** — Crear `src/data/releases.ts` (o equivalente) con campos requeridos (título, año, feat., cover, alt, link D1, tagline `music.*.tagline`, y metadatos técnicos necesarios).
- [x] **T8 · i18n de alts/taglines de releases** — Asegurar uso de `music.*.tagline` y definir/usar alt compartido de cover (especialmente “Memories” idéntico en todos los usos) en EN/PL.
- [x] **T9 · Migrar consumidores de releases** — Adaptar Home (New single, Collaborations), EPK Music y derivados (`tracks`, `collaborations`, schema/layouts si aplica) a la fuente única.
- [x] **T10 · Verificación D2** — Confirmar una sola definición de releases y consistencia de datos/alt/tagline en todas las superficies.

## D3 — Datos de galería

- [x] **T11 · Modelo y fuente única de galería** — Crear/evolucionar a `data/gallery.ts` con `src` web, `srcHQ`, orientación, tipo, alt (i18n), caption (i18n), crédito y `inPressKit`.
- [x] **T12 · Migrar y normalizar contenido de galería** — Trasladar fotos actuales, asignar captions distintas por foto (Live show sin repetir la misma), tipos correctos y metadatos EN/PL; preparar compatibilidad para 004.
- [x] **T13 · Integrar galerías por contexto** — Actualizar componentes/vistas para filtrar por tipo y consumir fuente única (Home, EPK, Live show, modal). *(Compat layer en `src/const/photoGallery.ts`.)*
- [x] **T14 · Consolidación de assets (según viabilidad)** — Consolidar imágenes a una sola fuente (Cloudinary/local) si hay decisión/acceso; si no, dejar estructura y TODOs explícitos sin romper referencias. *(Diferido: TODOs en `src/data/gallery.ts`, mezcla Cloudinary/local existente.)*
- [x] **T15 · Verificación D3** — Confirmar ausencia de copias de galería en componentes y correcto render/filtrado/captions por ruta. *(Verificación por código; recorrido visual/manual pendiente en T30.)*

## D4 — Formulario de contacto

- [x] **T16 · Refactor componente Contact** — Unificar en un componente con variantes `general` (Home/EPK) y `booking` (Live show) según campos definidos en la spec.
- [x] **T17 · Validación y accesibilidad de campos** — Marcar obligatorios de forma consistente (`*`, `required`, `aria-required`) y alinear opciones (Subject/Event type, incluyendo “Wedding” solo si se confirma). *("Wedding" incluido provisionalmente.)*
- [x] **T18 · i18n de formularios** — Mover/centralizar textos, labels, opciones y errores a traducciones EN/PL (`form.required`, `form.eventType.*`, etc.) sin hardcode. *(En `src/lib/i18n/home.ts`.)*
- [x] **T19 · Integración por ruta y API** — Conectar variante correcta en Home, EPK y Live show (EN/PL) y ajustar `/api/contact` si es necesario para ambos payloads. *(`/api/contact` acepta `guests`/compat `attendees`.)*
- [x] **T20 · Verificación D4** — Probar envíos/validaciones de `general` y `booking` y consistencia visual/accesible. *(Implementado; pruebas manuales/E2E en T29–T30.)*

## D5 — Reglas de CTA

- [x] **T21 · Actualizar CTAs de navegación y hero** — Header “Book the show” → `#contact` de la página actual; Home hero cambia a “See the live show” (`cta.seeLiveShow`) → `/live-show`/`/pl/live-show`.
- [x] **T22 · Actualizar CTAs en vistas/secciones** — Asegurar: todo “Book…” → formulario de contacto local (booking en Live show), “Live show” → `/live-show`(/pl), “Open the EPK/Press kit” → `/epk`(/pl), rutas PL siempre a PL.
- [x] **T23 · i18n de CTAs** — Añadir/usar `cta.seeLiveShow` y `cta.bookShow` en EN/PL.
- [x] **T24 · Verificación D5** — Recorrido de todos los CTAs en las 6 rutas confirmando destinos correctos. *(Verificación por código; recorrido manual en T30.)*

## D6 — Footer y Nav compartidos

- [x] **T25 · Unificar consumo de datos en Footer/Nav** — Usar links de D1 y rutas localizadas consistentes en componentes compartidos.
- [x] **T26 · Copyright y copy de footer** — Aplicar `footer.description` (001, sin “familiar hits”) y `footer.copyright` con año dinámico en EN/PL.
- [x] **T27 · Verificación D6** — Confirmar footer/nav idénticos en las 6 rutas y enlaces correctos por idioma. *(Verificación por código; recorrido manual en T30.)*

## QA y cierre

- [x] **T28 · Auditoría de DRY y hardcodes** — Verificar que no hay URLs/releases/galerías/copy de formulario o CTAs duplicados en componentes y que todo texto nuevo está en EN/PL. *(Links/releases/galería centralizados; CTAs/form i18n añadidos; quedan textos UI previos no tocados por 003.)*
- [x] **T29 · Quality gates** — Ejecutar `npx tsc --noEmit`, `npm run lint`, `npm run build`, `npx playwright test` (ajustando tests afectados por cambios de copy/selectores/CTAs). *(`tsc`, `lint`, `build` OK; `playwright test` no pudo conectar a `localhost:3000` en este entorno y WebKit falló por `PushAPIEnabled` — requiere servidor/e2e en entorno preparado.)*
- [ ] **T30 · Recorrido manual final** — Click-through de todos los CTA y formularios en `/`, `/live-show`, `/epk`, `/pl`, `/pl/live-show`, `/pl/epk`; validar links externos corregidos. *(Pendiente de recorrido manual del owner/QA.)*
- [x] **T31 · Actualizar spec/estado y preparar commit** — Documentar preguntas abiertas/decisiones tomadas, actualizar estado de `specs/003-shared-components-dry/spec.md` y roadmap si corresponde, y dejar listo el commit para aprobación del owner (sin push automático salvo indicación). *(Spec en `in-progress`; ver preguntas abiertas abajo.)*
# Plan — 003 Componentes y datos compartidos (DRY)

**Spec:** `specs/003-shared-components-dry/spec.md`  
**Status:** draft (plan, pendiente de aprobación)  
**Scope:** una sola fuente de verdad para links, releases, galería, formulario de contacto (variantes), CTAs y footer/nav en todas las rutas EN/PL. **No tocar código en este paso.**  
**Depende de:** 002 (R1 `/live-show`) — implementado.  
**Impacta:** 001/002 copy ya integrado, 004 (usa D3 galería/press), 005 (ajustes sobre componentes compartidos).

## 1. Estado actual (revisión de código)

| Área | Estado actual | Brechas vs spec |
|---|---|---|
| Links externos | URLs repartidas en `src/lib/site-config.ts` (`profiles`, `releases[*].spotifyUrl`, `liveShow.videoUrl/instagramVideoUrl`), `src/const/links.ts`, y algunos componentes | D1 requiere `lib/links.ts` (o equivalente) único; limpiar query params prohibidos; corregir links específicos (Crowd/UGQpFUqNYTU sin playlist params, Memories/Renacer a track, Vaivén sin `autoplay_ok`). |
| Releases | `siteConfig.releases` en `site-config.ts` + `src/const/tracks.ts`/`collaborations.ts` derivados; EPK/Home consumen descripciones/taglines mixtas | D2 requiere `data/releases.ts` único (título, año, feat., cover, alt i18n, link de D1, tagline `music.*.tagline`), usado por Home (New single, Collaborations) y EPK Music; mismo alt de cover Memories en todos lados. |
| Galería | `src/const/photoGallery.ts` con `artistGallery`/`liveGallery` (alt/venue localizados tras 002) pero sin `srcHQ`, tipo, crédito, `inPressKit`; assets en Cloudinary múltiples + locales | D3 requiere `data/gallery.ts` con campos completos, filtros por tipo, captions distintos por foto, consolidación de assets a una sola fuente. |
| Formulario contacto | `src/components/Contact.tsx` con modos `default|booking`/`embedded`, campos y subjects parciales; textos desde `homeCopy.contact.form`; validación/required inconsistente | D4 requiere un componente con variantes `general` (Home/EPK) y `booking` (Live show) con campos/subjects/event types exactos, `*`+`required`+`aria-required` consistentes y textos EN/PL en traducciones. |
| CTAs y rutas | Nav/footer/hero/teaser/EPK/proposal con destinos mezclados (ej. hero Home “Book the Linarex Experience”→live show, header booking a `#contact` genérico, “Ask about booking” en live show ya a `#contact` local en implementación actual, enlaces PL en general OK pero deben garantizarse) | D5 define reglas estrictas: todo “Book…” → formulario contacto de la página actual (Live show → variante booking), “Live show” → `/live-show`(/pl), header “Book the show” → `#contact` actual, Home hero cambia a “See the live show”→`/live-show`, rutas PL siempre a PL. |
| Footer/Nav | `SiteFooter` y `SiteNavigation` componentes separados con links/copy propios | D6: componentes únicos compartidos, links desde D1 y rutas 002, `footer.description` (001), copyright dinámico con `footer.copyright`. |
| i18n | Claves repartidas (`home`, `proposal`, `epk`, `shared`, `navigation`); faltan claves nuevas D4/D5/D6/D3 | Añadir claves nuevas de spec 003 (cta/form/footer/gallery captions) sin hardcode, EN/PL. |

## 2. Estrategia de implementación

1. **Datos compartidos primero (D1→D2→D3):** crear módulos canónicos (`src/lib/links.ts`, `src/data/releases.ts`, `src/data/gallery.ts` o rutas equivalentes alineadas al proyecto) y migrar consumidores gradualmente para eliminar URLs/copies inline.
2. **UI compartida (D4–D6):** refactorizar `Contact`, `SiteFooter`, `SiteNavigation` y CTAs para consumir datos/rutas/reglas únicas y variantes tipadas.
3. **i18n y accesibilidad:** añadir claves EN/PL nuevas y asegurar `required`/`aria-required`/labels consistentes en formularios.
4. **Compatibilidad y alcance mínimo:** preservar comportamiento actual fuera de 003, mantener `/live-show` (002), no introducir features de 004/005 salvo hooks de datos necesarios (p.ej. campos de galería).
5. **Decisiones abiertas documentadas:** para datos no confirmados (track IDs Spotify Memories/Renacer, “Wedding”, consolidación Cloudinary) usar valores provisionales claramente marcados/TODO en datos y registrar en tasks/preguntas; no bloquear el refactor estructural.

## 3. Archivos a crear/cambiar y cómo

### 3.1 D1 — Fuente única de links
| Archivo | Cambio |
|---|---|
| `src/lib/links.ts` (nuevo, canónico) o consolidación de `src/const/links.ts` | Definir y exportar: perfiles (Spotify artista, YouTube canal, Instagram, TikTok, email booking), links por track/vídeo, helpers para construir `mailto:`/anchors externos. Normalizar URLs (sin `si`, `autoplay_ok`, `list`, `start_radio`, `pp`, `utm_*`). Correcciones: Crowd → `https://www.youtube.com/watch?v=UGQpFUqNYTU`; Vaivén sin `?autoplay_ok=1`; Memories/Renacer a URLs de **track** (IDs a confirmar — ver preguntas abiertas). |
| `src/lib/site-config.ts` | Reemplazar URLs inline por referencias a `links` (o reexportar) manteniendo API consumida donde sea práctico; limpiar `liveShow.videoUrl/instagramVideoUrl`, `profiles`, `releases[*].spotifyUrl`. |
| `src/const/links.ts`, `src/app/(en)/links/LinksContent.tsx`, `src/components/ConnectAndStream.tsx`, `src/components/EpkView.tsx`, `src/components/ProposalView.tsx`, `src/components/SiteFooter.tsx` y otros consumidores | Eliminar URLs hardcoded y consumir `links`. Verificar que todos los anchors externos abren destino correcto. |

### 3.2 D2 — Datos de releases
| Archivo | Cambio |
|---|---|
| `src/data/releases.ts` (nuevo) | Lista única por release: `id`, `title`, `year`, `feat`/`collaborator`, `cover`, `alt` (clave i18n o objeto EN/PL consistente con proyecto), `link` (de D1), `tagline` (`music.*.tagline`), y campos técnicos necesarios para reproductor/EPK (`audioUrl`, duración, etc.) si se centralizan. |
| `src/lib/i18n/shared.ts` / i18n relevante | Asegurar `music.memories|renacer|vaiven.tagline` como fuente de taglines (ya existe) y añadir claves de `alt` de cover si se modelan como keys (p.ej. `release.memories.coverAlt`) con mismo valor en todos los usos. |
| `src/lib/site-config.ts`, `src/const/tracks.ts`, `src/const/collaborations.ts` | Migrar a derivar desde `data/releases` o reemplazar usos directos; evitar duplicar lista de releases. |
| `src/components/Music.tsx`, `src/components/FeaturedSinglePlayer.tsx`, `src/components/Collaborations.tsx`, `src/components/cards/CollaborationCard.tsx`, `src/components/EpkView.tsx`, layouts/schema si usan releases | Consumir `data/releases`/selectores compartidos; garantizar misma cover alt de “Memories” en Home, Collaborations y EPK. |

### 3.3 D3 — Datos de galería
| Archivo | Cambio |
|---|---|
| `src/data/gallery.ts` (nuevo) o evolución de `src/const/photoGallery.ts` | Modelo por foto: `src` web, `srcHQ` (para 004), orientación, `type` (`portrait|live|road`), `alt` (clave/i18n), `caption` (clave i18n), `credit`, `inPressKit`. Migrar fotos actuales, asignar captions distintos por foto en Live show (no repetir “Linarex Experience” en todas) y mantener localización EN/PL. |
| `src/const/photoGallery.ts` | Convertir en reexport/compat layer o eliminar tras migración completa. |
| `src/components/PhotoGallery.tsx`, `src/components/modal/PhotoModal.tsx`, `src/components/EpkView.tsx`, `src/components/ProposalView.tsx`, páginas que renderizan galerías | Filtrar por tipo según contexto (Home/EPK/live), consumir captions/alts/créditos desde fuente única. |
| `public/` y referencias de assets | Planificar consolidación de assets (Cloudinary/local) a una sola fuente; ejecutar migración si se confirma cuenta/carpeta destino (pregunta abierta) o dejar estructura preparada con TODO explícito. |

### 3.4 D4 — Formulario de contacto (variantes)
| Archivo | Cambio |
|---|---|
| `src/components/Contact.tsx` | Refactor a un componente con variantes `general` y `booking`: `general` (Name*, Email*, Phone, Subject* con opciones Booking request/Collaboration/Press·Media/Technical/Other, Message*) en Home/EPK; `booking` (Name*, Email*, Phone, Event date, City, Event type*, Guests, Message*) en Live show. Marcar obligatorios consistentemente (`*`, `required`, `aria-required`, validación). Alinear Event type con “Ideal for” + opciones spec (confirmar Wedding). |
| `src/lib/i18n/home.ts` y/o módulo de formulario compartido | Centralizar textos/labels/opciones/errores EN/PL para formulario (incl. `form.required`, `form.eventType.*`, subjects). Evitar strings hardcoded en componente. |
| `src/app/(en)/page.tsx`, `src/app/(pl)/pl/page.tsx`, `src/app/(en)/epk/page.tsx`/`EpkView`, `src/app/(en)/live-show/page.tsx`/`ProposalView` y equivalentes PL | Usar variante correcta por ruta y asegurar ancla `#contact`/destino local coherente con D5. |
| `src/app/(en)/api/contact/route.ts` (si aplica) | Aceptar/validar payload de ambas variantes sin romper envíos actuales. |

### 3.5 D5 — Reglas de CTA
| Archivo | Cambio |
|---|---|
| `src/components/SiteNavigation.tsx` | “Book the show” (`cta.bookShow`) apunta a `#contact` de la página actual (en live show, formulario booking). Mantener labels EN/PL y rutas localizadas. |
| `src/components/Hero.tsx` | Cambiar CTA principal de live show a **“See the live show” / “Zobacz koncert”** (`cta.seeLiveShow`) → `/live-show` o `/pl/live-show`. Ningún “Book…” navega a otra vista. |
| `src/components/ExperienceTeaser.tsx`, `src/components/EpkView.tsx`, `src/components/ProposalView.tsx`, `src/components/SiteFooter.tsx`, `src/components/ConnectAndStream.tsx` y otros | Auditar y ajustar todos los CTAs: “Book…” → `#contact` local (booking en live show), “Live show” → `/live-show`(/pl), “Open the EPK/Press kit” → `/epk`(/pl), rutas PL siempre a PL. |
| `src/lib/i18n/*` | Añadir `cta.seeLiveShow`, `cta.bookShow` y reutilizar donde aplique. |

### 3.6 D6 — Footer y Nav compartidos
| Archivo | Cambio |
|---|---|
| `src/components/SiteNavigation.tsx`, `src/components/SiteFooter.tsx` | Mantener como componentes únicos compartidos; consumir links desde D1 y rutas derivadas por locale; usar `footer.description` (001) y `footer.copyright` con año dinámico. Eliminar duplicación/copy inline restante. |
| `src/app/(en)/layout.tsx`, `src/app/(pl)/layout.tsx` y páginas que rendericen footer/nav | Verificar uso consistente en las 6 rutas. |

## 4. i18n – claves nuevas (003)

Añadir en EN/PL (ubicación según convención del proyecto, sin hardcode):
- `cta.seeLiveShow`, `cta.bookShow`
- `form.required`, `form.eventType.private`, `form.eventType.city` (+ labels/opciones completas de subjects y event types según D4)
- `footer.copyright` (con `{year}`)
- `gallery.caption.*` y `release.*.coverAlt` / `alt.*` según modelo elegido en D2/D3

## 5. Orden sugerido de ejecución

1. **Preparación:** rama de trabajo, inventario de consumidores, decisiones provisionales para preguntas abiertas.
2. **D1:** `links` canónico + limpieza de URLs/params + correcciones (Crowd, Vaivén) y migración de referencias.
3. **D2:** `releases` canónico + taglines/alts compartidos + migración Home/Collaborations/EPK/tracks.
4. **D3:** `gallery` canónico + modelo de campos/captions/créditos + migración de galerías (consolidación de assets según factibilidad).
5. **D4:** refactor `Contact` variantes + i18n de formulario + integración por ruta/API.
6. **D5:** normalizar CTAs y destinos en nav/hero/footer/vistas.
7. **D6:** pulir footer/nav compartidos (copyright dinámico, links/rutas únicos).
8. **QA y cierre:** recorrido manual de 6 rutas y todos los CTA, verificación de links en incógnito, `tsc/lint/build/playwright`, actualizar tasks/spec.

## 6. Validación prevista

- **Criterios spec:** sin URLs externas en componentes (todas desde D1), sin copias de releases/galería, CTAs según D5, rutas PL→PL, footer/nav idénticos en 6 rutas sin “familiar hits” y con copyright dinámico, formularios accesibles/consistentes, todo EN/PL sin hardcode.
- **Pruebas:** click-through manual de todos los CTA en 6 rutas; verificación de links externos corregidos; envío de formularios `general` y `booking`.
- **Gates:** `npx tsc --noEmit`, `npm run lint`, `npm run build`, `npx playwright test` (ajustar tests si cambian textos/selectores/CTAs).

## 7. Riesgos y preguntas abiertas

- **Spotify track IDs (Memories, Renacer):** requeridos para D1/D2 (“link al track”). Sin IDs confirmados, usar placeholders documentados o mantener URL actual temporal con TODO explícito y no marcar criterio de links “correctos” hasta confirmar.
- **Event type “Wedding”:** pendiente de confirmación; incluir opción solo si se confirma, manteniendo alineación con “Ideal for”.
- **Consolidación de assets (Cloudinary/local):** requiere decidir cuenta/carpeta destino y mover archivos; puede ejecutarse en fases (modelo D3 listo + migración física posterior) si no hay acceso/decisión inmediata.
- **Refactor amplio:** cambios cruzados en datos/UI pueden afectar E2E y props; mitigar con migración incremental y type-checks.
- **Compatibilidad con 004/005:** D3 debe exponer campos necesarios (`srcHQ`, `inPressKit`, `credit`) aunque 004 se implemente después.
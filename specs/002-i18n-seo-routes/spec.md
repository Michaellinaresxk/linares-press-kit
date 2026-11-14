---
id: 002-i18n-seo-routes
status: draft
priority: P1
date: 2026-11-14
owner: Michael (Linarex)
rutas: /, /live-show, /epk + /pl, /pl/live-show, /pl/epk
idiomas: EN, PL (obligatorio)
---

# 002 – i18n completo, SEO bilingüe y renombrar `/proposal` → `/live-show`

## Objetivo
Que cada ruta exista correctamente en EN y PL (sin textos mezclados), que Google y las redes sepan
qué versión es cuál, y que la URL del show diga claramente lo que es: **live show**.

## Alcance

### R1 · Renombrar la ruta
| Antes | Después | Redirect |
|---|---|---|
| `/proposal` | `/live-show` | 301 permanente |
| `/pl/proposal` | `/pl/live-show` | 301 permanente |

- Redirects en `next.config` (`redirects()` con `permanent: true`) para no romper links ya compartidos.
- Actualizar: menú, footer, botones internos, canonical, `og:url`, sitemap.
- El label del menú se mantiene: **Live show** / PL: **Koncert na żywo** *(revisar con nativo)*.

**Criterios**
- [ ] `/proposal` y `/pl/proposal` responden 301 a la ruta nueva.
- [ ] Ningún link interno apunta a `/proposal`.
- [ ] Sitemap y canonical usan la ruta nueva.

### R2 · Referencias entre idiomas (las 6 rutas)
Para cada par EN/PL:
- `<html lang="en">` / `<html lang="pl">`.
- `og:locale` = `en_US` / `pl_PL`, con `og:locale:alternate` cruzado.
- `canonical` → a sí misma (nunca cruzado).
- `hreflang` en **las dos** versiones del par:
  ```html
  <link rel="alternate" hreflang="en" href="https://linares-press-kit.vercel.app{rutaEN}" />
  <link rel="alternate" hreflang="pl" href="https://linares-press-kit.vercel.app{rutaPL}" />
  <link rel="alternate" hreflang="x-default" href="https://linares-press-kit.vercel.app{rutaEN}" />
  ```
- Implementarlo con un **helper único** (p. ej. `buildMetadata({ route, locale })` que genere
  `alternates.languages`, canonical y openGraph), en lugar de repetirlo en cada página.

| Par | EN | PL |
|---|---|---|
| Home | `/` | `/pl` |
| Live show | `/live-show` | `/pl/live-show` |
| EPK | `/epk` | `/pl/epk` |

**Criterios**
- [ ] Las 6 rutas tienen `lang`, `og:locale`, canonical propio y los 3 `hreflang` (comprobado con view-source).
- [ ] Un validador de hreflang no muestra errores de reciprocidad.
- [ ] Title y description de cada ruta PL en polaco.

### R3 · Completar las traducciones al polaco
Textos detectados en inglés dentro de las rutas PL (lista mínima, auditar el resto):

**/pl**
- Subtítulo del hero: "Composer, Drummer & Executive Producer" → `Kompozytor, perkusista i Executive Producer`
- Botón del reproductor: "Stream on Spotify" → `Słuchaj na Spotify`
- Encabezado mezclado: "Z Dominican Republic do Warsaw, Poland" → `Z Dominikany do Warszawy`
- Etiqueta de colaboraciones: "Collaboration•2026" → `Współpraca • 2026`
- Captions de la galería: "Artist portrait" / "Live performance" / "On the road" → `Portret` / `Na scenie` / `W drodze`
- Tagline de "Memories" → `music.memories.tagline` (spec 001)
- Footer: "All rights reserved" / "Press kit" → `Wszelkie prawa zastrzeżone` / `Press kit` *(se puede mantener)*

**/pl/live-show**
- Roles y países: "Composer & Drummer", "Vocalist & Guitarist", "Dominican Republic", "Colombia"
  → `Kompozytor i perkusista`, `Wokalista i gitarzysta`, `Dominikana`, `Kolumbia`
- Bios de Linarex (spec 001 `people.linarex.bio`) y de Jacke Matheus (traducir el texto actual tal cual)
- Todo el bloque "W skrócie": formatos, instrumentos, duración ("60–90 minutes" → `60–90 minut`),
  repertorio, "Ideal for", logística

**/pl/epk**
- Auditar con la misma checklist (no se revisó en detalle).

**Criterios**
- [ ] Ninguna ruta PL muestra texto de interfaz en inglés (excepto nombres propios, títulos de canciones,
  "EPK", "Executive Producer", "feat.", "Linarex Experience").
- [ ] Todos los textos vienen del archivo de traducciones (nada hardcodeado).
- [ ] PL revisado por un nativo.

### R4 · Textos alternativos (alt) en las 6 rutas
- Ninguna imagen con contenido tiene `alt` vacío (p. ej. la foto del público en el bloque de energía de Live show).
- Quitar notas de producción del alt (p. ej. "...for the artist homepage" en el hero de la Home).
- Alt descriptivos, distintos entre fotos parecidas, en EN y PL (claves `alt.*`).
- Una misma imagen usa el mismo alt en todas partes (ver spec 003, D2/D3).
- Imágenes puramente decorativas → `alt=""` (solo si de verdad no aportan información).

**Criterios**
- [ ] Lighthouse Accessibility sin avisos de alt en las 6 rutas.
- [ ] Ningún alt en inglés dentro de las rutas PL.

### R5 · PDFs por idioma
| Documento | EN | PL |
|---|---|---|
| EPK | `linarex-epk.pdf` | `linarex-epk-pl.pdf` |
| Live show | `linarex-live-show.pdf` *(antes `Live-Music-Proposal.pdf`)* | `linarex-live-show-pl.pdf` |

- Cada ruta descarga el PDF de su idioma.
- Mantener `Live-Music-Proposal.pdf` con redirect o como copia, para no romper links enviados por email.

**Criterios**
- [ ] Los 4 PDF existen, con el copy de la spec 001.
- [ ] Los botones de descarga de las rutas PL apuntan al PDF en polaco.

### R6 · Limpieza de metadatos
- `meta next-size-adjust` vacío: investigar el origen. Si lo inserta Next.js (`next/font`) → **no tocar**, marcar *won't fix*.
  Si es código propio → eliminarlo.
- Confirmar con view-source que los tags OG/Twitter salen como `property="og:..."` y `name="twitter:..."`
  (el prefijo `meta-` visto en la revisión probablemente es un artefacto de la herramienta de lectura).
- Cada ruta tiene un `og:image` con alt en su idioma.

## Fuera de alcance
- El contenido del copy (spec 001).
- Links de Spotify/YouTube (spec 003, D1).

## Definición de terminado
Todos los criterios marcados, comprobado en producción con view-source + validador de hreflang + preview
de WhatsApp en las 6 rutas. `status: done`.

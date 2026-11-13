# Linarex Website

Sitio web de Linarex / Linarex Experience construido con [Next.js 15](https://nextjs.org) (App Router), TypeScript y Tailwind.

## Requisitos y comandos

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción
npm run start    # servir build
npm run lint     # ESLint
npx tsc --noEmit # chequeo de tipos
npx playwright test # pruebas E2E (tests/e2e)
```

---

## Guía de contenido: dónde cambiar cada cosa

La arquitectura separa **datos globales**, **textos por idioma (copy)**, **listas/constantes**, **assets** y **rutas/páginas**. Por eso, un mismo “contenido” puede vivir en más de un lugar.

### Mapa rápido

| Qué quieres cambiar                                                                                                              | Dónde hacerlo                                                                                           | Notas                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Datos del artista/proyecto (nombre, rol, origen, años, ubicación, email, WhatsApp)                                               | `src/lib/site-config.ts`                                                                                | Fuente de verdad compartida entre páginas/componentes.                                               |
| Redes/perfiles (Spotify, YouTube, Instagram, TikTok, Apple Music)                                                                | `src/lib/site-config.ts` → `profiles`                                                                   | Afecta secciones “Connect & Stream”, EPK, links, etc.                                                |
| Lanzamientos/singles (título, año, portada, links, audio, descripción)                                                           | `src/lib/site-config.ts` → `releases`                                                                   | Usado en Home (música), EPK y textos que referencian releases.                                       |
| Info del show en vivo (formatos, duración, repertorio, idiomas, tipos de evento, logística, trayectoria, vídeos, setlist, rider) | `src/lib/site-config.ts` → `liveShow` y `live.artists`                                                  | Usado en Proposal, EPK, etc.                                                                         |
| PDFs/documentos (EPK, propuesta)                                                                                                 | `public/` (archivos) + rutas en `src/lib/site-config.ts` → `documents`                                  | Coloca el PDF en `public/` y actualiza la ruta.                                                      |
| Textos/párrafos por página e idioma (Home, EPK, Proposal, navegación)                                                            | `src/lib/i18n/home.ts`, `src/lib/i18n/epk.ts`, `src/lib/i18n/proposal.ts`, `src/lib/i18n/navigation.ts` | **Debes actualizar EN y PL** dentro del mismo archivo (o donde aplique) para mantener ambos idiomas. |
| Galerías de fotos (artista / live)                                                                                               | `src/const/photoGallery.ts`                                                                             | Arrays `artistGallery`, `liveGallery` (src, alt, venue, etc.).                                       |
| Colaboraciones                                                                                                                   | `src/const/collaborations.ts`                                                                           | Datos mostrados en la sección de colaboraciones.                                                     |
| Links (página /links y secciones de plataformas)                                                                                 | `src/const/links.ts`                                                                                    | Plataformas/URLs estructuradas.                                                                      |
| Tracks/repertorio técnico o listas específicas                                                                                   | `src/const/tracks.ts`, `src/const/technicalSpecs.ts` (según uso)                                        | Revisa dónde se importan antes de cambiar estructura.                                                |
| Imágenes, audio, PDFs                                                                                                            | `public/`                                                                                               | Rutas públicas: `/img/...`, `/audio/...`, `/archivo.pdf`.                                            |
| Estructura/orden de secciones de una página                                                                                      | `src/app/(en)/**/page.tsx` y `src/app/(pl)/pl/**/page.tsx` + componentes en `src/components/`           | Las rutas EN y PL suelen componer las mismas secciones con `locale`.                                 |
| Metadatos SEO por ruta (cuando no vienen de config/copy)                                                                         | `page.tsx` / `layout.tsx` en cada ruta                                                                  | Ej.: `src/app/(en)/proposal/page.tsx`, `src/app/(pl)/pl/proposal/page.tsx`.                          |

### Idiomas y rutas

- **Inglés (EN):** `src/app/(en)/...` → URLs como `/`, `/epk`, `/proposal`, `/links`
- **Polaco (PL):** `src/app/(pl)/pl/...` → URLs como `/pl`, `/pl/epk`, `/pl/proposal`
- Las páginas suelen renderizar un componente de vista con `locale='en' | 'pl'` (ej. `ProposalView`, `EpkView`) y/o componentes de sección que reciben `locale`.
- **Importante:** si cambias un texto en `src/lib/i18n/*.ts`, normalmente debes cambiarlo en **ambos** objetos (`en` y `pl`) dentro del mismo archivo.

### Dónde vive el contenido (capas)

1. **`src/lib/site-config.ts` — datos globales/compartidos**
   - Identidad y contacto: `name`, `role`, `email`, `contact.whatsapp`, `location`, `origin`, `yearsOnStage`.
   - Perfiles y enlaces: `profiles`.
   - Documentos: `documents` (rutas a archivos en `public/`).
   - Música/lanzamientos: `releases` (portada, audio, links, descripciones).
   - Show en vivo: `live.artists`, `liveShow` (formatos, set, repertorio, idiomas, eventos, logística, trayectoria, vídeos, etc.).
   - Úsalo cuando el dato es “canónico” y se reutiliza en varias páginas/idiomas.

2. **`src/lib/i18n/*.ts` — textos por idioma (UI/copy)**
   - `home.ts`: textos de secciones del home.
   - `epk.ts`: textos del EPK.
   - `proposal.ts`: textos de la propuesta/live show.
   - `navigation.ts`: etiquetas de navegación.
   - Úsalo para titulares, párrafos, labels y CTA que cambian según el idioma.

3. **`src/const/*.ts` — listas y contenido estructurado**
   - `photoGallery.ts`: fotos (`artistGallery`, `liveGallery`).
   - `collaborations.ts`, `links.ts`, `tracks.ts`, `technicalSpecs.ts`, etc.
   - Úsalo para colecciones (arrays/objetos) que alimentan componentes.

4. **`public/` — archivos estáticos (assets)**
   - Imágenes: `public/img/...` → se referencian como `/img/...`
   - Audio: `public/audio/...` → `/audio/...`
   - PDFs: `public/*.pdf` → `/archivo.pdf`
   - Al agregar un asset, súbelo a `public/` y usa la ruta pública en config/const/componentes.

5. **`src/app/...` y `src/components/...` — composición y presentación**
   - `src/app/(en)/...` y `src/app/(pl)/pl/...`: definen rutas, layouts y qué secciones se renderizan.
   - `src/components/*.tsx`: implementan las secciones; muchas leen de `site-config`, `i18n` y `const`.
   - Cambia aquí cuando quieras **reordenar secciones, mostrar/ocultar bloques o modificar estructura/layout**, no solo el texto.

---

## Paso a paso: tareas comunes

### 1) Cambiar un texto o párrafo

1. Identifica la página/sección (Home, EPK, Proposal, Links, etc.).
2. Busca si el texto viene de **i18n**: `src/lib/i18n/<area>.ts` (lo más común para copy por idioma).
3. Si es un dato compartido (nombre, email, formato, trayectoria, etc.), revisa **`src/lib/site-config.ts`**.
4. Edita el valor en **EN y PL** cuando aplique.
5. Verifica en `npm run dev` en ambas rutas (`/ruta` y `/pl/ruta`).

### 2) Agregar o cambiar una foto

1. **Agrega el archivo** en `public/img/...` (o usa URL externa si ya se usa CDN).
2. Si la foto es parte de una galería/lista, edita `src/const/photoGallery.ts` (añade objeto con `src`, `alt`, etc.).
3. Si es una imagen fija de una sección (hero, retrato, card), busca el componente en `src/components/...` o la vista correspondiente y actualiza el `src`/`alt`.
4. Ajusta `sizes`/dimensiones en `next/image` si cambias proporción para mantener buena visualización responsive.

### 3) Agregar un nuevo lanzamiento o canción

1. Añade el audio en `public/audio/...` (si aplica) y la portada en `public/img/...` o URL.
2. Agrega/actualiza el item en `src/lib/site-config.ts` → `releases` (`id`, `title`, `year`, `coverImage`, `audioUrl`, `spotifyUrl`, `description`, etc.).
3. Revisa textos relacionados en `src/lib/i18n/home.ts` / `src/lib/i18n/epk.ts` si mencionan un release específico.
4. Verifica Home y EPK en EN/PL.

### 4) Cambiar información del show en vivo / propuesta

1. Datos estructurados (formatos, duración, idiomas, repertorio, eventos, logística, trayectoria, artistas, vídeos): `src/lib/site-config.ts` → `live`, `liveShow`.
2. Textos y etiquetas de la propuesta: `src/lib/i18n/proposal.ts` (EN/PL).
3. Si el cambio es de layout/orden de secciones: `src/components/ProposalView.tsx` y/o `src/app/(en)/proposal/proposal.module.css`.
4. Revisa `/proposal` y `/pl/proposal`.

### 5) Actualizar contacto, redes o documentos

- **Email/WhatsApp:** `src/lib/site-config.ts` (`email`, `contact.whatsapp`). WhatsApp en formato internacional sin `+` (ej. `48123456789`).
- **Redes:** `src/lib/site-config.ts` → `profiles`.
- **EPK/Proposal PDF:** reemplaza el archivo en `public/` y confirma la ruta en `site-config.ts` → `documents`.

### 6) Agregar una nueva sección o cambiar el orden en una página

1. Crea o edita el componente en `src/components/`.
2. Importa y colócalo en el `page.tsx` correspondiente en **EN** (`src/app/(en)/...`) y **PL** (`src/app/(pl)/pl/...`).
3. Si la sección tiene texto, agrega las claves/copy en el archivo i18n adecuado (EN/PL) o en `site-config` si es dato compartido.
4. Añade estilos (CSS module/Tailwind) según el patrón de la sección.

---

## Consejos para no perderte

- **Busca el texto literal** en el repo para ubicar su fuente: `rg "texto a cambiar" src`.
- **Busca el componente** de la sección si no sabes si viene de i18n o config: `rg "NombreSeccion|texto visible" src`.
- **Cambia en ambos idiomas** cuando edites `src/lib/i18n/*`.
- **Verifica en ambas rutas** (`/` y `/pl`, `/proposal` y `/pl/proposal`, etc.) después de cada cambio de contenido.
- Si algo se ve repetido, puede estar definido en `site-config`/`i18n` y renderizado en más de un componente.

## Estructura relevante (resumen)

```text
public/                  # Imágenes, audio, PDFs (rutas /img, /audio, /*.pdf)
src/
  app/
    (en)/                # Rutas en inglés: /, /epk, /proposal, /links
    (pl)/pl/             # Rutas en polaco: /pl, /pl/epk, /pl/proposal
  components/            # Secciones y UI reutilizable
  const/                 # Listas/datos estructurados (galerías, links, etc.)
  lib/
    site-config.ts       # Datos globales compartidos
    i18n/                # Copy por idioma (home, epk, proposal, navigation)
```

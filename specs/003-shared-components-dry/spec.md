---
id: 003-shared-components-dry
status: draft
priority: P2
date: 2026-11-14
owner: Michael (Linarex)
rutas: todas
idiomas: EN, PL (obligatorio)
depende de: 002 (R1 – ruta /live-show)
---

# 003 – Componentes y datos compartidos (una sola fuente de verdad)

## Objetivo

Que links, releases, galería, formularios, footer y CTAs se definan **una sola vez** y se reutilicen en
las 3 rutas y sus versiones PL. Así un cambio se hace en un solo sitio y los bugs no se repiten por página.

## Alcance

### D1 · Archivo único de links (`lib/links.ts` o equivalente)

Contiene: Spotify (artista + cada track), YouTube (canal + cada vídeo), Instagram, TikTok, email de booking.

Correcciones incluidas:

- **"The Crowd — In Motion":** `https://www.youtube.com/watch?v=UGQpFUqNYTU` (sin `list=RD…` ni `start_radio`).
- **"Memories" y "Renacer":** link al **track** (`open.spotify.com/track/<ID>`), no al álbum.
- **"Vaivén":** sin `?autoplay_ok=1`.
- **Regla:** ningún link externo lleva query params de tracking o reproducción
  (`si`, `autoplay_ok`, `list`, `start_radio`, `pp`, `utm_*`).

**Criterios**

- [ ] Ningún componente tiene URLs externas escritas a mano; todas vienen de `links`.
- [ ] Los links abren el contenido correcto (prueba manual en incógnito).

### D2 · Datos de releases (`data/releases.ts`)

Una sola lista: título, año, feat., cover, alt (clave i18n), link (de D1), tagline (clave `music.*.tagline` de la spec 001).

- La usan: bloque "New single" de la Home, Collaborations de la Home y Music del EPK.
- La cover de "Memories" usa **el mismo alt** en todas partes.

### D3 · Datos de la galería (`data/gallery.ts`)

Por foto: src web, src HQ (spec 004), orientación, tipo (portrait/live/road), alt (clave i18n),
caption (clave i18n), crédito del fotógrafo, `inPressKit: boolean`.

- La usan la galería de la Home, la del EPK y la galería en vivo de Live show (filtrando por tipo).
- Captions distintos por foto (hoy la galería de Live show repite "Linarex Experience" en todas).
- **Consolidar los assets:** hoy vienen de 3 cuentas de Cloudinary + archivos locales → mover todo a una sola fuente.

### D4 · Formulario de contacto (un componente, dos variantes)

| Variante  | Dónde     | Campos                                                                                                    |
| --------- | --------- | --------------------------------------------------------------------------------------------------------- |
| `general` | Home, EPK | Name*, Email*, Phone, Subject*(Booking request, Collaboration, Press / Media, Technical, Other), Message* |
| `booking` | Live show | Name*, Email*, Phone, Event date, City, Event type*, Guests, Message*                                     |

- Campos obligatorios marcados igual en todas partes (`*` + `required` + `aria-required`).
- Opciones de **Event type** alineadas con el bloque "Ideal for": Club / Bar, Festival, Corporate,
  Private event, City / park event, Wedding _(confirmar)_, Other.
- Textos del formulario en EN/PL desde el archivo de traducciones.

### D5 · Reglas de CTA (decididas)

| Botón                                       | Destino                                                                                              |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Cualquier **"Book…"** / "Ask about booking" | Formulario de contacto **de la página actual** (`#contact`). En Live show → su formulario `booking`. |
| **"Live show"** (menú, footer, botones)     | `/live-show` (o `/pl/live-show`)                                                                     |
| "Open the EPK" / "Press kit"                | `/epk` (o `/pl/epk`)                                                                                 |

Cambios concretos:

- Home hero: **"Book the Linarex Experience"** (hoy lleva a /proposal) → renombrar a
  **"See the live show"** / PL **"Zobacz koncert"**, apuntando a `/live-show`. Así un botón "Book" nunca lleva a otra vista.
- Live show: **"Ask about booking"** (hoy lleva a `/#contact` de la Home) → al formulario de la misma página.
- Botón "Book the show" del header: lleva al `#contact` de la página actual, y en Live show a su formulario `booking`.
- Las rutas PL apuntan siempre a rutas PL.

### D6 · Footer y Nav compartidos

- Un solo componente para cada uno, con links desde D1 y rutas desde la spec 002.
- Copy del footer: `footer.description` (spec 001), sin "familiar hits".
- Copyright con año dinámico: `© {year} Linarex · All rights reserved` / `© {year} Linarex · Wszelkie prawa zastrzeżone`.

## i18n – claves nuevas

| Clave                    | Ref.           | EN                                     | PL (borrador)                                 |
| ------------------------ | -------------- | -------------------------------------- | --------------------------------------------- |
| `cta.seeLiveShow`        | Home hero      | See the live show                      | Zobacz koncert                                |
| `cta.bookShow`           | Header (todas) | Book the show                          | Zarezerwuj koncert                            |
| `form.required`          | Formularios    | Required                               | Wymagane                                      |
| `form.eventType.private` | Form booking   | Private event                          | Wydarzenie prywatne                           |
| `form.eventType.city`    | Form booking   | City / park event                      | Wydarzenie miejskie / plenerowe               |
| `footer.copyright`       | Footer         | © {year} Linarex · All rights reserved | © {year} Linarex · Wszelkie prawa zastrzeżone |
| `gallery.caption.*`      | Galerías       | _(por foto)_                           | _(por foto)_                                  |

## Criterios de aceptación

- [ ] Links, releases y galería se definen una vez y no hay copias en los componentes.
- [ ] Todos los "Book…" llevan a un formulario de contacto; ningún "Book…" lleva a otra vista.
- [ ] "Live show" lleva siempre a `/live-show` (o `/pl/live-show`).
- [ ] Desde una ruta PL, ningún link interno lleva a una ruta EN.
- [ ] Footer y nav idénticos en las 6 rutas, sin "familiar hits", con año en el copyright.
- [ ] Formularios con campos obligatorios marcados de forma consistente y accesible.
- [ ] Todo en EN y PL, sin textos hardcodeados.

## Preguntas abiertas

- [ ] IDs de track en Spotify de "Memories" y "Renacer".
- [ ] ¿"Wedding" se queda en Event type?
- [ ] ¿A qué cuenta de Cloudinary (o carpeta local) se consolida todo?

## Definición de terminado

Criterios marcados, recorrido manual de las 6 rutas haciendo click en todos los CTA. `status: done`.

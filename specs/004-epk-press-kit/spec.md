---
id: 004-epk-press-kit
status: draft
priority: P2
date: 2026-11-14
owner: Michael (Linarex)
rutas: /epk, /pl/epk
idiomas: EN, PL (obligatorio)
depende de: 003 (D3 – datos de galería)
---

# 004 – EPK: fotos de prensa descargables

## Objetivo
Que prensa y festivales puedan descargar fotos oficiales en alta resolución, con crédito, sin pedirlas por email.

## Alcance

### B1 · Paquete de fotos
- **4–6 fotos**, mínimo 2 horizontales y 2 verticales (`inPressKit: true` en `data/gallery.ts`).
- De cada foto:
  - **HQ:** lado largo ≥ 3000 px, JPG ~90, sRGB.
  - **Web:** lado largo ~1600 px.
- Nombres: `linarex_<tipo>_<orientación>_<nn>.jpg` (p. ej. `linarex_live_horizontal_01.jpg`).
- Incluir al menos una foto **en vivo con el público** (refuerza la spec 001, P1/P2).

### B2 · ZIP
- `/public/press/linarex-press-photos.zip`: solo las HQ + `CREDITS.txt` bilingüe.
- ≤ 25 MB. Si se pasa, bajar la calidad JPG antes que la resolución.

```
LINAREX — PRESS PHOTOS / ZDJĘCIA PRASOWE

EN: Free for press and promotional use related to Linarex. Credit required.
PL: Do swobodnego użytku prasowego i promocyjnego związanego z Linarex. Wymagane podanie autora.

linarex_live_horizontal_01.jpg — Photo / Fot.: <Nombre Apellido>
```

### B3 · UI en el EPK
- Botón **"Download press photos (.zip · {size})"** en la galería del EPK.
- Link **"Press photos"** junto a "Download EPK" en el hero.
- Cada foto del paquete: crédito visible + link **"Download HQ"** con el atributo `download`.
- La galería carga las versiones web (`next/image`); las HQ solo se descargan al hacer click.

## i18n – claves
| Clave | Ref. | EN | PL (borrador) |
|---|---|---|---|
| `epk.press.downloadZip` | EPK galería | Download press photos (.zip · {size}) | Pobierz zdjęcia prasowe (.zip · {size}) |
| `epk.press.downloadHero` | EPK hero | Press photos | Zdjęcia prasowe |
| `epk.press.downloadHQ` | EPK galería, cada foto | Download HQ | Pobierz w wysokiej jakości |
| `epk.press.credit` | EPK galería, cada foto | Photo: {name} | Fot. {name} |
| `epk.press.usage` | EPK, bajo el botón | Free for press and promotional use. Credit required. | Do swobodnego użytku prasowego i promocyjnego. Wymagane podanie autora. |

## Criterios de aceptación
- [ ] El ZIP descarga y se abre en Chrome, Safari iOS y Android.
- [ ] 4–6 fotos ≥ 3000 px (≥ 2 horizontales, ≥ 2 verticales) + `CREDITS.txt` bilingüe.
- [ ] Cada foto del paquete muestra su crédito.
- [ ] Botones con texto accesible, utilizables con teclado.
- [ ] Lighthouse Performance de `/epk` no baja.
- [ ] Todo igual en EN y PL; claves en los dos idiomas; PL revisado.

## Fuera de alcance
- Rider técnico y stage plot (spec futura).
- Embeber players de Spotify/YouTube (spec futura).
- Kit de logos (puede añadirse al ZIP más adelante).

## Preguntas abiertas
- [ ] ¿Qué 4–6 fotos y de quién es el crédito de cada una?
- [ ] ¿Hay originales en alta de todas?

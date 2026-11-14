---
id: 005-live-show-and-home-adjustments
status: draft
priority: P3
date: 2026-11-14
owner: Michael (Linarex)
rutas: /live-show, /pl/live-show, /, /pl
idiomas: EN, PL (obligatorio)
depende de: 001 (copy), 003 (componentes)
---

# 005 – Ajustes propios de Live show y Home

## Objetivo

Corregir lo que solo afecta a cada ruta, una vez resuelto lo global (001–003).

## Live show

### S1 · Formación coherente

- Hoy: "4-piece band", pero solo aparecen 2 artistas con nombre y 6 instrumentos sin asignar.
- Nuevo: explicar el formato sin prometer nombres que no hay. Por ejemplo:
  _"Linarex & Jacke Matheus, with trusted Warsaw musicians on bass and keys."_
  PL: _"Linarex i Jacke Matheus oraz sprawdzeni warszawscy muzycy na basie i klawiszach."_
- Instrumentos: separar la **base** (Drums · Guitar · Bass · Keys) de los **extras bajo pedido** (Brass, Percussion).

### S2 · Quitar repeticiones

- La idea "refused to sit down" aparece 3 veces (H2, subtítulo de la galería y pull quote) → dejarla **una vez**.
- Propuesta: se queda en el H2; el subtítulo de la galería y el pull quote se cambian.
- Pull quote sin atribución → usar una cita real (spec 001, P3) o quitarlo.

### S3 · Voz consistente

- El formulario usa primera persona del singular ("Tell me") y otros bloques "we'll bring".
- Regla: en Live show se habla como banda (**we**); en Home y EPK, Linarex en primera o tercera persona según el bloque.

### S4 · Precios / paquetes

- Hoy no hay precios. **Decisión:** se mantiene "precio bajo consulta", pero se añade una línea clara:
  _"Tell us the date, city and type of event — we'll reply with a tailored quote within 48h."_ _(confirmar plazo)_

## Home

### M1 · Contenido duplicado con el EPK

- La Home se enfoca en el fan/oyente (spec 001, "Rol de cada ruta").
- La galería de la Home puede ser más corta (selección de `data/gallery.ts`) con un link "More photos → EPK".

### M2 · Cover de "Memories" duplicada

- Se usa en el bloque "New single" y en Collaborations → mantener las dos, pero con el mismo alt (viene de 003, D2).

## i18n – claves nuevas

| Clave                    | Ref.           | EN                                                                                       | PL (borrador)                                                                               |
| ------------------------ | -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `live.lineup.note`       | Live show – S1 | Linarex & Jacke Matheus, with trusted Warsaw musicians on bass and keys.                 | Linarex i Jacke Matheus oraz sprawdzeni warszawscy muzycy na basie i klawiszach.            |
| `live.instruments.core`  | Live show – S1 | Drums · Guitar · Bass · Keys                                                             | Perkusja · Gitara · Bas · Klawisze                                                          |
| `live.instruments.extra` | Live show – S1 | Brass & percussion on request                                                            | Sekcja dęta i perkusjonalia na życzenie                                                     |
| `live.quote.cta`         | Live show – S4 | Tell us the date, city and type of event — we'll reply with a tailored quote within 48h. | Podaj datę, miasto i rodzaj wydarzenia — w ciągu 48 godzin odpowiemy z indywidualną ofertą. |
| `home.gallery.more`      | Home – M1      | More photos in the press kit                                                             | Więcej zdjęć w press kicie                                                                  |

## Criterios de aceptación

- [ ] La formación descrita coincide con lo que se ofrece (sin músicos fantasma).
- [ ] "refused to sit down" aparece una sola vez.
- [ ] Voz consistente por ruta.
- [ ] La Home no duplica secciones completas del EPK.
- [ ] Todo en EN y PL desde el archivo de traducciones; PL revisado.

## Preguntas abiertas

- [ ] ¿Bass y keys son siempre músicos de sesión? ¿Los extras (brass/percussion) son reales bajo pedido?
- [ ] ¿Plazo de respuesta real para presupuestos (48h)?
- [ ] ¿Qué fotos quedan en la galería corta de la Home?

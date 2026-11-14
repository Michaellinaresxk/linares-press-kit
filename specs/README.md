# Specs – Linarex Press Kit (linares-press-kit.vercel.app)

Historial de lo que se planifica y se trabaja en el sitio. **Las specs no se borran**: al terminar
se marcan `status: done`. Si una queda obsoleta → `status: superseded` + link a la nueva.

## Rutas del sitio
| Ruta EN | Ruta PL | Rol |
|---|---|---|
| `/` | `/pl` | **Home** – entrada para fans y oyentes: música original, quién es Linarex |
| `/live-show` *(antes `/proposal`)* | `/pl/live-show` | **Live show** – el show en vivo (Linarex Experience) para venues y eventos |
| `/epk` | `/pl/epk` | **EPK** – kit profesional para prensa, festivales y bookers |

## Roadmap
| # | Spec | Alcance | Prioridad | Depende de |
|---|---|---|---|---|
| 001 | [Posicionamiento global – raíces caribeñas](001-global-positioning-caribbean-roots/spec.md) | Todas las rutas | **P1** | — |
| 002 | [i18n + SEO + renombrar ruta](002-i18n-seo-routes/spec.md) | Todas las rutas | **P1** | — |
| 003 | [Componentes y datos compartidos (DRY)](003-shared-components-dry/spec.md) | Todas las rutas | P2 | 002 (R1, nueva ruta) |
| 004 | [EPK – fotos de prensa y PDF](004-epk-press-kit/spec.md) | /epk | P2 | 003 (D3, galería) |
| 005 | [Ajustes Live show + Home](005-live-show-and-home-adjustments/spec.md) | /live-show, / | P3 | 001, 003 |

**Orden recomendado:** 001 y 002 en paralelo (copy vs. técnico) → 003 → 004 → 005.

## Reglas comunes a TODAS las specs
1. **Bilingüe obligatorio (EN + PL).** Ningún texto se publica si falta un idioma.
2. **Nada hardcodeado.** Todo texto va al archivo de traducciones del proyecto, con la misma clave en EN y PL.
   Cada clave lleva su **referencia** (ruta / componente).
3. **El PL de las specs es un borrador** → lo revisa un hablante nativo antes de `done`.
4. **No se traducen:** nombres propios, títulos de canciones, "Linarex Experience", "Executive Producer", "feat.".
5. **Una sola fuente de verdad:** links, releases, galería y copy compartido se definen una vez (spec 003)
   y se reutilizan en todas las rutas.
6. **Reglas de CTA:**
   - Botones **"Book…"** → siempre al **formulario de contacto**.
   - **"Live show"** → siempre a `/live-show`.

## Cómo ejecutar una spec
1. `Lee specs/00X-.../spec.md y genera plan.md en la misma carpeta` (en Plan Mode). Revisar y aprobar.
2. `Del plan, genera tasks.md con tareas pequeñas y checkbox`.
3. `Implementa T1 de specs/00X-.../tasks.md` → revisar → commit → siguiente task.
4. Al terminar todos los criterios de aceptación → `status: done`.

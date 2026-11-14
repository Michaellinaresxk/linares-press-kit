---
id: 001-global-positioning-caribbean-roots
status: in-progress # draft | in-progress | done | superseded
priority: P1
date: 2026-11-14
owner: Michael (Linarex)
rutas: /, /live-show, /epk (+ /pl, /pl/live-show, /pl/epk) + PDFs
idiomas: EN, PL (obligatorio)
---

# 001 – Posicionamiento global: raíces caribeñas + rock/funk/indie + carisma en vivo

## Objetivo

Que todo el sitio cuente **una sola historia**: Linarex trae sus raíces caribeñas al rock, al funk y al
indie, con energía, pasión y un carisma que conecta con el público, liderando la banda desde la batería.

Hoy cada página dice algo distinto: la Home tiene "CARIBBEAN ROOTS · WARSAW NIGHTS", el Live show tiene
otro tagline y el EPK no menciona las raíces como propuesta.

## Mensaje central

> **Raíz caribeña + rock/funk/indie = una noche que se baila, se siente y conecta. En tres idiomas.**

**Tagline maestro (ya existe en la Home, se convierte en la marca de todo el sitio):**
`Caribbean roots · Warsaw nights` / PL: `Karaibskie korzenie · Warszawskie noce`

## Rol de cada ruta (para no duplicar contenido)

| Ruta      | Habla a                     | Enfoque                                                          | NO debe                                                      |
| --------- | --------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| Home      | Fans, oyentes               | Música original, nuevo single, quién es Linarex                  | Hablar de covers ni de formatos de show                      |
| Live show | Venues, bares, eventos      | Linarex Experience: energía, originales + covers, formatos       | Repetir la bio larga                                         |
| EPK       | Prensa, festivales, bookers | Resumen profesional: trayectoria, música, show, fotos, descargas | Repetir la galería completa de la Home sin función de prensa |

## Principios de copy (obligatorios en todas las rutas)

1. **Mostrar, no decir.** Nunca escribir "charismatic", "radiant" o "passionate" sobre uno mismo. El carisma
   se demuestra con **acciones** (lidera la banda, cuenta historias, habla con el público, hace cantar a la sala)
   - **foto y vídeo**. Solo se usa si lo dice una cita real de terceros.
2. **Raíces sin clichés.** Caribe = groove, calidez, energía. Nada de cumbia, merengue, bachata, "latin party",
   "tropical night", palmeras ni banderas.
3. **Linarex es el artista**, no "el proyecto de Michael Linares".
4. **No presentarlo como cantante.** Canta partes, lidera desde la batería. "Drummer" se mantiene.
5. La batería no es el centro de la música: canciones con emoción real, letras con sentido, buena vibra.
6. Rol: **Executive Producer**.
7. Corto, directo, sin repeticiones entre bloques. "poetic" máximo una vez por página. Nunca "metal".
8. El show se presenta como **Linarex Experience** (originales + covers), no por géneros.
9. **Covers/hits solo se mencionan en la ruta Live show**, nunca en Home ni en el footer.

---

## Cambios de copy

> ⚠️ Donde el "actual" es un **resumen**, copiar el texto exacto del código antes de editar.
> Todas las claves y su versión PL están en la tabla **i18n**.

### Global (componentes compartidos)

- **G1 · Tagline maestro** `brand.tagline` → en el hero de Home (ya está), como eyebrow en el hero de Live show
  y en el hero del EPK.
- **G2 · Footer** `footer.description`
  - Actual (resumen): música en vivo, canciones originales + "familiar hits".
  - Nuevo: _Original music with Caribbean roots and a live show that gets the room moving._

### Home

- **H1 · Bio** (bajo "From Dominican Republic to Warsaw, Poland") → usa `about.short.p1` + `about.short.p2`
  (versión corta del About del EPK, misma historia).
- **H2 · Pull quote** sobre "convertir emociones en conceptos musicales" → se mantiene si no repite la bio.

### Live show

- **L1 · Hero** → eyebrow `brand.tagline`. El H1 "LINAREX EXPERIENCE" y su tagline se mantienen.
- **L2 · Intro "The live show"** → usa la clave compartida `live.intro` (la misma del EPK).
- **L3 · Bio de Linarex en "The people"** → `people.linarex.bio`
  - Nuevo: _Dominican-born composer and drummer who leads the band from behind the kit — bringing Caribbean
    groove, rock power and stories that pull the room in._

### EPK

- **E1 · Hero intro** `epk.hero.intro`
- **E2 · Quick facts** `epk.facts.*` (Experience / Sound / Live)
- **E3 · About** `about.long.p1–p3`
- **E4 · Live show intro** → `live.intro` (compartida)
- **E5 · Taglines de música** → `music.*.tagline` (compartidas con la Home)
- **E6 · Meta description** `meta.epk.description`

### Pruebas del carisma (no son texto)

- **P1 ·** El primer vídeo del bloque Live (EPK y Live show) muestra a Linarex **interactuando con el público**.
- **P2 ·** La foto del hero del EPK transmite **calidez y energía**, no solo un retrato serio.
- **P3 ·** Una cita real (venue / colaborador), con permiso y sus palabras. Si no hay, el bloque no se muestra.

---

## i18n – claves (EN base / PL borrador para revisar)

| Clave                        | Ref.                      | EN                                                                                                                                                                                                                                                                                                                                                            | PL                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brand.tagline`              | Hero Home, Live show, EPK | Caribbean roots · Warsaw nights                                                                                                                                                                                                                                                                                                                               | Karaibskie korzenie · Warszawskie noce                                                                                                                                                                                                                                                                                                                                       |
| `footer.description`         | Footer (todas)            | Original music with Caribbean roots and a live show that gets the room moving.                                                                                                                                                                                                                                                                                | Autorska muzyka z karaibskimi korzeniami i koncerty, które porywają salę.                                                                                                                                                                                                                                                                                                    |
| `epk.hero.intro`             | EPK hero                  | Born in the Dominican Republic, based in Warsaw. Linarex brings his Caribbean roots into indie rock and funk — songs with groove, heart and a story behind every beat. Songs that start with a feeling and end with a room moving together.                                                                                                                   | Urodzony na Dominikanie, mieszka w Warszawie. Linarex wnosi swoje karaibskie korzenie do indie rocka i funku — piosenki z groovem, sercem i historią w każdym uderzeniu. Piosenki, które zaczynają się od uczucia, a kończą salą, która porusza się razem.                                                                                                                   |
| `epk.facts.experience.value` | EPK quick facts           | 20+ years on stage · rock, jazz, funk, reggae                                                                                                                                                                                                                                                                                                                 | 20+ lat na scenie · rock, jazz, funk, reggae                                                                                                                                                                                                                                                                                                                                 |
| `epk.facts.sound.label`      | EPK quick facts           | Sound                                                                                                                                                                                                                                                                                                                                                         | Brzmienie                                                                                                                                                                                                                                                                                                                                                                    |
| `epk.facts.sound.value`      | EPK quick facts           | Indie rock & funk with Caribbean roots                                                                                                                                                                                                                                                                                                                        | Indie rock i funk z karaibskimi korzeniami                                                                                                                                                                                                                                                                                                                                   |
| `epk.facts.live.label`       | EPK quick facts           | Live                                                                                                                                                                                                                                                                                                                                                          | Na żywo                                                                                                                                                                                                                                                                                                                                                                      |
| `epk.facts.live.value`       | EPK quick facts           | Trilingual show · EN · ES · PL                                                                                                                                                                                                                                                                                                                                | Koncert w trzech językach · EN · ES · PL                                                                                                                                                                                                                                                                                                                                     |
| `about.long.p1`              | EPK About                 | Linarex grew up between Caribbean rhythm and rock. Born in the Dominican Republic and based in Warsaw, he has spent more than 20 years on stage — from summers in Jurata with Rongo Rongo to backing artists across Warsaw's venues — absorbing rock, progressive rock, jazz, funk and reggae.                                                                | Linarex dorastał między karaibskim rytmem a rockiem. Urodzony na Dominikanie, mieszka w Warszawie i ma za sobą ponad 20 lat na scenie — od letnich koncertów w Juracie z zespołem Rongo Rongo po granie z artystami w warszawskich klubach — chłonąc rock, rock progresywny, jazz, funk i reggae.                                                                            |
| `about.long.p2`              | EPK About                 | A multi-instrumentalist, he writes from guitar, piano and drums, turning real emotions into songs with groove and meaning, and shapes every release as Executive Producer.                                                                                                                                                                                    | Jako multiinstrumentalista komponuje na gitarze, pianinie i perkusji, zamieniając prawdziwe emocje w piosenki z groovem i znaczeniem, a jako Executive Producer czuwa nad każdym wydawnictwem.                                                                                                                                                                               |
| `about.long.p3`              | EPK About                 | The result carries his roots without boxing them in: indie rock melancholy, funk you can dance to, and Caribbean warmth in every groove.                                                                                                                                                                                                                      | Efekt to muzyka, która niesie jego korzenie, nie zamykając się w nich: melancholia indie rocka, funk, przy którym się tańczy, i karaibskie ciepło w każdym groovie.                                                                                                                                                                                                          |
| `about.short.p1`             | Home bio                  | Linarex grew up between Caribbean rhythm and rock, and has spent more than 20 years on stage.                                                                                                                                                                                                                                                                 | Linarex dorastał między karaibskim rytmem a rockiem i ma za sobą ponad 20 lat na scenie.                                                                                                                                                                                                                                                                                     |
| `about.short.p2`             | Home bio                  | He writes from guitar, piano and drums — songs that start with a real emotion and end with a room moving together.                                                                                                                                                                                                                                            | Komponuje na gitarze, pianinie i perkusji — piosenki, które zaczynają się od prawdziwej emocji, a kończą salą, która porusza się razem.                                                                                                                                                                                                                                      |
| `live.intro`                 | EPK Live + Live show      | Linarex Experience is a night to dance, feel and connect. Linarex leads the band from behind the drum kit — counting in, singing parts, telling the stories behind the songs and pulling the crowd into every chorus. Originals meet hand-picked covers in English, Spanish and Polish. Caribbean energy, rock power — and a room that ends up moving as one. | Linarex Experience to wieczór, by tańczyć, czuć i być razem. Linarex prowadzi zespół zza perkusji — odlicza, śpiewa fragmenty, opowiada historie stojące za piosenkami i wciąga publiczność do każdego refrenu. Autorskie utwory spotykają starannie wybrane covery po angielsku, hiszpańsku i polsku. Karaibska energia, rockowa moc — i sala, która porusza się jak jedno. |
| `people.linarex.role`        | Live show people          | Composer & Drummer                                                                                                                                                                                                                                                                                                                                            | Kompozytor i perkusista                                                                                                                                                                                                                                                                                                                                                      |
| `people.linarex.bio`         | Live show people          | Dominican-born composer and drummer who leads the band from behind the kit — bringing Caribbean groove, rock power and stories that pull the room in.                                                                                                                                                                                                         | Urodzony na Dominikanie kompozytor i perkusista, który prowadzi zespół zza perkusji — wnosi karaibski groove, rockową moc i historie, które wciągają salę.                                                                                                                                                                                                                   |
| `music.memories.tagline`     | Home + EPK                | Some memories keep the light on.                                                                                                                                                                                                                                                                                                                              | Niektóre wspomnienia nie pozwalają zgasnąć światłu.                                                                                                                                                                                                                                                                                                                          |
| `music.renacer.tagline`      | Home + EPK                | A new beginning — experimental funk pop with a hypnotic groove.                                                                                                                                                                                                                                                                                               | Nowy początek — eksperymentalny funk pop z hipnotycznym groovem.                                                                                                                                                                                                                                                                                                             |
| `music.vaiven.tagline`       | Home + EPK                | The first Linarex single — Afro-Latin pop with a beach-sunset vibe.                                                                                                                                                                                                                                                                                           | Pierwszy singiel Linarex — afro-latin pop z klimatem plaży o zachodzie słońca.                                                                                                                                                                                                                                                                                               |
| `meta.epk.description`       | EPK `<head>`              | Linarex — Dominican-born, Warsaw-based artist bringing Caribbean roots into indie rock and funk. Trilingual live show, original music, press photos and booking.                                                                                                                                                                                              | Linarex — urodzony na Dominikanie artysta z Warszawy, który wnosi karaibskie korzenie do indie rocka i funku. Koncert w trzech językach, autorska muzyka, zdjęcia prasowe i booking.                                                                                                                                                                                         |
| `quote.*`                    | EPK / Live show           | _(cita real, idioma original)_                                                                                                                                                                                                                                                                                                                                | _(traducción, con "tłum.")_                                                                                                                                                                                                                                                                                                                                                  |

> Las bios de Jacke Matheus (`people.jacke.*`) se traducen en la spec 002 (R3), sin cambiar el contenido.

---

## Criterios de aceptación

- [x] `brand.tagline` aparece en el hero de las 3 rutas, EN y PL.
- [x] Quien lee solo el hero del EPK o de Live show puede decir: "caribeño, rock/funk, show con energía".
- [ ] "Caribbean" aparece en hero, About y Live del EPK sin repetir la misma frase. *(Hero/Live actualizados; About EPK revertido al copy aprobado por owner — revisar cumplimiento final al cerrar.)*
- [x] Ninguna ruta usa "charismatic / passionate / radiant" sobre Linarex.
- [x] No aparecen: "metal", "producer" (sin Executive), "cumbia/merengue/bachata", "latin party", "tropical".
- [x] El footer ya no menciona covers ni "familiar hits" (EN y PL).
- [x] Covers/hits solo se mencionan en Live show.
- [x] `live.intro` y `music.*.tagline` son la misma clave en todas las rutas donde aparecen (sin copias).
- [ ] Jurata/Rongo Rongo y el trabajo como músico acompañante aparecen en el About del EPK. *(Depende de H1/E3; About Home/EPK revertido al copy aprobado por owner.)*
- [ ] El primer vídeo del bloque Live muestra interacción con el público; la foto del hero del EPK es de energía/calidez. *(P1/P2 pendientes — dependen de selección de assets.)*
- [ ] Todas las claves existen en EN y PL; nada hardcodeado; PL revisado por un nativo. *(Claves EN/PL implementadas/cableadas en los cambios aplicados; About Home/EPK con copy aprobado; revisión por hablante nativo pendiente.)*
- [ ] PDFs regenerados con el copy nuevo (EN y PL; ver spec 002 R5). *(Los regenera el owner; ver `tasks.md` T32 con textos a cambiar.)*

## Fuera de alcance

- Implementación técnica de i18n, hreflang y renombrar la ruta (spec 002).
- Refactor de componentes compartidos (spec 003).
- Rediseño visual.

## Preguntas abiertas

- [ ] ¿Qué clip muestra mejor la conexión con el público?
- [ ] ¿Qué foto va al hero del EPK?
- [ ] ¿Hay alguien (Deski, Jacke Matheus, otro) que pueda dar una cita real?
- [ ] ¿Quién revisa el polaco?

## Definición de terminado

Todos los criterios marcados en EN y PL, revisado leyendo las 3 rutas en el móvil, `status: done`.

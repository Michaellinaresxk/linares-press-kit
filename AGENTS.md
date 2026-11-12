# AGENTS.md — Linarex (instrucciones para agentes)

Este repositorio define un flujo obligatorio de trabajo y calidad. **Antes de iniciar cualquier tarea**, el agente debe seguir estas reglas.

## Regla principal (leer antes de actuar)

1. Leer y aplicar la skill/procedimiento: `.opencode/skills/linarex-quality-gate/SKILL.md`
2. Si el entorno permite cargar skills, cargar `linarex-quality-gate` cuando la tarea implique cambios en el proyecto.

## Flujo obligatorio

### Antes de empezar
- Crear rama de trabajo: `git checkout -b feature/<task>` (no trabajar en `main` para features/fixes).

### Después de terminar
- Probar el **componente o funcionalidad** implementada/modificada (validación específica; unitarias/de componente si aplica).
- Ejecutar **E2E** para confirmar que todo funciona correctamente: `npx playwright test`.
- Pasar quality checks: `npx tsc --noEmit`, `npm run lint`, `npm run build`.
- No hacer `git push` automáticamente salvo instrucción explícita del usuario.

## Skills relacionadas
- `.opencode/skills/linarex-quality-gate/SKILL.md` — flujo de rama + pruebas + gates
- `.opencode/skills/quality-gate/SKILL.md` — checks TS/lint
- `.opencode/skills/build-smoke/SKILL.md`, `.opencode/skills/route-health/SKILL.md`, `.opencode/skills/ui-system-check/SKILL.md` — según aplique

---
name: linarex-quality-gate
description: Flujo obligatorio del proyecto Linarex antes y después de cada tarea: crear rama feature/<task>, probar el componente/funcionalidad modificada y ejecutar E2E antes de finalizar.
---

# Linarex Quality Gate (Workflow del proyecto)

> **Importante:** Antes de iniciar cualquier tarea, el agente debe leer esta skill y seguir el flujo definido aquí (antes y después de implementar cambios).

## Purpose

Este flujo asegura que el proyecto Linarex (Next.js) mantenga calidad y funcionamiento tras cada cambio: trabajo en rama, validación de la funcionalidad/componente afectado y verificación end-to-end.

## Workflow obligatorio (antes y después de cada tarea)

### Antes de empezar la tarea

1. **Crear una rama de trabajo** desde la rama base actual:

   ```bash
   git checkout -b feature/<task>
   ```

   - Reemplaza `<task>` por un nombre corto y descriptivo (ej. `feature/epk-contact-links`, `feature/fix-booker-info`).
   - No trabajar directamente en `main` para cambios de features/fixes.

### Durante la implementación

- Realizar los cambios solicitados en la rama `feature/<task>`.
- Mantener cambios enfocados en la tarea.

### Después de terminar la tarea (verificación obligatoria)

1. **Prueba del componente o funcionalidad implementada/modificada**
   - Validar específicamente el componente o la funcionalidad afectada (comportamiento esperado, estados, casos relevantes, UI/interacción según aplique).
   - Si existe o aplica, ejecutar/agregar pruebas unitarias o de componente para esa funcionalidad.

2. **Pruebas end-to-end (E2E)**
   - Ejecutar las pruebas E2E para confirmar que todo funciona perfectamente y que no hay regresiones:

     ```bash
     npx playwright test
     ```

3. **Quality checks técnicos**
   - Ejecutar TypeScript, lint y build y corregir errores antes de dar la tarea por finalizada.

Una tarea solo se considera completa cuando la funcionalidad/componente probado y las pruebas E2E pasan correctamente.

## When to Use

- Before completing any code change in the Linarex project
- After implementing new features (EPK, BookerInfo, contact flows, etc.)
- Before deployment to verify everything works

## Commands

### 1. TypeScript Check

```bash
cd /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex && npx tsc --noEmit
```

- Pass criteria: command exits 0 with no type errors.

### 2. Lint Check

```bash
cd /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex && npm run lint
```

- Pass criteria: no blocking errors.

### 3. Build Check

```bash
cd /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex && npm run build
```

- Pass criteria: compiles successfully without errors.

### 4. E2E Tests (Playwright)

```bash
cd /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex && npx playwright test
```

- Runs tests in `tests/e2e/`.
- Reports: `npx playwright show-report`

### 5. Local Development Start

```bash
cd /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex && npm run dev
```

- Starts dev server at <http://localhost:3000>

## Example Workflow

```bash
# 0. Antes de empezar: crear rama de la tarea
git checkout -b feature/<task>

# 1. Implementar cambios (componente/funcionalidad)

# 2. Probar el componente o funcionalidad implementada/modificada
#    (validación manual y/o pruebas de componente/unitarias según corresponda)

# 3. Check TypeScript
npx tsc --noEmit

# 4. Run lint
npm run lint

# 5. Build
npm run build

# 6. Run E2E tests (confirmar que todo funciona perfectamente)
npx playwright test

# 7. If all pass, commit and leave ready for push (no push automático)
```

## Notes

- Next.js 15 app router (`/app/(en)/epk/page.tsx`, `/app/(pl)/pl/epk/page.tsx`).
- No hacer `git push` automáticamente salvo instrucción explícita del usuario.

# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/epk-test.spec.ts >> Contact email link is present in EPK
- Location: tests/e2e/epk-test.spec.ts:32:1

# Error details

```
Error: Channel closed
```

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "http://localhost:3000/epk", waiting until "networkidle"

```

```
Error: browserContext.close: Target page, context or browser has been closed
```
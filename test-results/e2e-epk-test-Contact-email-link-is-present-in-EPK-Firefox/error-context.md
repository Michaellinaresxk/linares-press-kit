# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/epk-test.spec.ts >> Contact email link is present in EPK
- Location: tests/e2e/epk-test.spec.ts:32:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://localhost:3000/epk", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic:
  - generic [active]:
    - generic [ref=f37e3]:
      - generic [ref=f37e4]:
        - navigation [ref=f37e6]:
          - button [disabled] [ref=f37e7]:
            - img "previous" [ref=f37e8]
          - generic [ref=f37e10]:
            - generic [ref=f37e11]: 1/
            - text: "1"
          - button [disabled] [ref=f37e12]:
            - img "next" [ref=f37e13]
        - link "Next.js 15.5.9 (outdated) Webpack" [ref=f37e16] [cursor=pointer]:
          - /url: https://nextjs.org/docs/messages/version-staleness
          - generic "An outdated version detected (latest is 16.4.6), upgrade is highly recommended!" [ref=f37e19]: Next.js 15.5.9 (outdated)
          - generic [ref=f37e20]: Webpack
      - generic [ref=f37e21]:
        - dialog "Runtime Error" [ref=f37e22]:
          - generic [ref=f37e25]:
            - generic [ref=f37e26]:
              - generic [ref=f37e27]:
                - generic [ref=f37e28]: Runtime Error
                - generic [ref=f37e30]:
                  - button "Copy Error Info" [ref=f37e31] [cursor=pointer]
                  - button "No related documentation found" [disabled] [ref=f37e34]
                  - link "Learn more about enabling Node.js inspector for server code with Chrome DevTools" [ref=f37e37] [cursor=pointer]:
                    - /url: https://nextjs.org/docs/app/building-your-application/configuring/debugging#server-side-code
              - generic [ref=f37e46]:
                - paragraph [ref=f37e47]: "Cannot find module './611.js' Require stack: - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/webpack-runtime.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/pages/_document.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/require.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/load-components.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/utils.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/swc/options.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/swc/index.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/next-config-ts/transpile-config.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/config.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/next.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/lib/start-server.js"
                - button "Show More" [ref=f37e49] [cursor=pointer]
            - generic [ref=f37e51]:
              - generic [ref=f37e52]:
                - paragraph [ref=f37e53]:
                  - text: Call Stack
                  - generic [ref=f37e54]: "48"
                - button "Show 46 ignore-listed frame(s)" [ref=f37e55] [cursor=pointer]
              - generic [ref=f37e58]:
                - generic [ref=f37e59]: <unknown>
                - text: .next/server/pages/_document.js (1:325)
              - generic [ref=f37e60]:
                - generic [ref=f37e61]: Object.<anonymous>
                - text: .next/server/pages/_document.js (1:371)
          - generic [ref=f37e62]:
            - generic [ref=f37e63]: "1"
            - generic [ref=f37e64]: "2"
        - contentinfo [ref=f37e65]:
          - region "Error feedback" [ref=f37e66]:
            - paragraph [ref=f37e67]:
              - link "Was this helpful?" [ref=f37e68] [cursor=pointer]:
                - /url: https://nextjs.org/telemetry#error-feedback
            - button "Mark as helpful" [ref=f37e69] [cursor=pointer]
            - button "Mark as not helpful" [ref=f37e73] [cursor=pointer]
    - generic [ref=f37e80] [cursor=pointer]:
      - button "Open Next.js Dev Tools" [ref=f37e81]
      - generic [ref=f37e86]:
        - button "Open issues overlay" [ref=f37e87]:
          - generic [ref=f37e88]:
            - generic [aria-hidden] [ref=f37e89]: "0"
            - generic [ref=f37e90]: "1"
          - generic [ref=f37e91]: Issue
        - button "Collapse issues badge" [ref=f37e92]
  - alert [ref=f37e95]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('EPK page loads and shows key content', async ({ page }) => {
  4  |   await page.goto('/epk', { waitUntil: 'networkidle' });
  5  |   
  6  |   // Check page title
  7  |   await expect(page).toHaveTitle(/Linarex/);
  8  |   
  9  |   // Check key content is present (using text-based detection for CSS module compatibility)
  10 |   const pageText = await page.textContent('body');
  11 |   expect(pageText).toContain('Linarex');
  12 |   expect(pageText).toContain('Original music');
  13 |   expect(pageText).toContain('Connect & Stream');
  14 |   expect(pageText).toMatch(/originals?/i);
  15 |   expect(pageText).toMatch(/covers?/i);
  16 | });
  17 | 
  18 | test('Homepage loads correctly', async ({ page }) => {
  19 |   await page.goto('/', { waitUntil: 'networkidle' });
  20 |   await expect(page).toHaveTitle(/Linarex/);
  21 |   await expect(page.locator('header')).toBeVisible();
  22 | });
  23 | 
  24 | test('BookerInfo does not show new dates text', async ({ page }) => {
  25 |   await page.goto('/epk', { waitUntil: 'networkidle' });
  26 |   
  27 |   // The page should not contain "New dates coming soon"
  28 |   const pageText = await page.textContent('body');
  29 |   expect(pageText).not.toContain('New dates coming soon');
  30 | });
  31 | 
  32 | test('Contact email link is present in EPK', async ({ page }) => {
> 33 |   await page.goto('/epk', { waitUntil: 'networkidle' });
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  34 |  
  35 |   // Check for email address in the body text
  36 |   const pageText = await page.textContent('body');
  37 |   expect(pageText).toContain('linarexinfo@gmail.com');
  38 | });
  39 | 
  40 | test('Live show section shows repertoire', async ({ page }) => {
  41 |   await page.goto('/epk', { waitUntil: 'networkidle' });
  42 |   
  43 |   // The repertoire description should mention originals and covers
  44 |   const pageText = await page.textContent('body');
  45 |   expect(pageText).toMatch(/originals?/i);
  46 |   expect(pageText).toMatch(/covers?/i);
  47 | });
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/epk-test.spec.ts >> Contact email link is present in EPK
- Location: tests/e2e/epk-test.spec.ts:32:1

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "linarexinfo@gmail.com"
Received string:    "{\"props\":{\"pageProps\":{\"statusCode\":500,\"hostname\":\"localhost\"}},\"page\":\"/_error\",\"query\":{},\"buildId\":\"development\",\"isFallback\":false,\"err\":{\"name\":\"Error\",\"source\":\"server\",\"message\":\"Cannot find module './611.js'\\nRequire stack:\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/webpack-runtime.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/pages/_document.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/require.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/load-components.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/utils.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/swc/options.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/swc/index.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/next-config-ts/transpile-config.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/config.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/next.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/lib/start-server.js\",\"stack\":\"Error: Cannot find module './611.js'\\nRequire stack:\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/webpack-runtime.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/pages/_document.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/require.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/load-components.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/utils.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/swc/options.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/swc/index.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/next-config-ts/transpile-config.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/config.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/next.js\\n- /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/lib/start-server.js\\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1212:15)\\n    at /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/require-hook.js:57:36\\n    at Module._load (node:internal/modules/cjs/loader:1043:27)\\n    at Module.require (node:internal/modules/cjs/loader:1298:19)\\n    at mod.require (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/require-hook.js:68:28)\\n    at require (node:internal/modules/helpers:182:18)\\n    at __webpack_require__.f.require (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/webpack-runtime.js:190:28)\\n    at /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/webpack-runtime.js:103:40\\n    at Array.reduce (\\u003canonymous\\u003e)\\n    at __webpack_require__.e (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/webpack-runtime.js:102:67)\\n    at Array.map (\\u003canonymous\\u003e)\\n    at __webpack_require__.X (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/webpack-runtime.js:154:22)\\n    at /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/pages/_error.js:19:11086\\n    at Object.\\u003canonymous\\u003e (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/pages/_error.js:19:11132)\\n    at Module._compile (node:internal/modules/cjs/loader:1529:14)\\n    at Module._extensions..js (node:internal/modules/cjs/loader:1613:10)\\n    at Module.load (node:internal/modules/cjs/loader:1275:32)\\n    at Module._load (node:internal/modules/cjs/loader:1096:12)\\n    at Module.require (node:internal/modules/cjs/loader:1298:19)\\n    at mod.require (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/require-hook.js:68:28)\\n    at require (node:internal/modules/helpers:182:18)\\n    at requirePage (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/require.js:99:80)\\n    at loadComponentsImpl (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/load-components.js:132:57)\\n    at runNextTicks (node:internal/process/task_queues:60:5)\\n    at listOnTimeout (node:internal/timers:545:9)\\n    at process.processTimers (node:internal/timers:519:7)\\n    at async DevServer.findPageComponentsImpl (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/next-server.js:899:36)\\n    at async DevServer.findPageComponents (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/dev/next-dev-server.js:705:16)\\n    at async DevServer.renderErrorToResponseImpl (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/base-server.js:1687:26)\\n    at async pipe.req.req (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/base-server.js:1610:30)\\n    at async DevServer.pipeImpl (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/base-server.js:1025:25)\\n    at async NextNodeServer.handleCatchallRenderRequest (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/next-server.js:408:21)\\n    at async DevServer.handleRequestImpl (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/base-server.js:916:17)\\n    at async /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/dev/next-dev-server.js:399:20\\n    at async Span.traceAsyncFn (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/trace/trace.js:157:20)\\n    at async DevServer.handleRequest (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/dev/next-dev-server.js:395:24)\\n    at async invokeRender (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/lib/router-server.js:240:21)\\n    at async handleRequest (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/lib/router-server.js:437:24)\\n    at async requestHandlerImpl (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/lib/router-server.js:485:13)\\n    at async Server.requestListener (/Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/lib/start-server.js:226:13)\"},\"gip\":true,\"scriptLoader\":[]}"
```

# Page snapshot

```yaml
- generic:
  - generic [active]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - navigation [ref=e6]:
          - button [disabled] [ref=e7]:
            - img "previous" [ref=e8]
          - generic [ref=e10]:
            - generic [ref=e11]: 1/
            - text: "1"
          - button [disabled] [ref=e12]:
            - img "next" [ref=e13]
        - link "Next.js 15.5.9 (outdated) Webpack" [ref=e16] [cursor=pointer]:
          - /url: https://nextjs.org/docs/messages/version-staleness
          - generic "An outdated version detected (latest is 16.4.6), upgrade is highly recommended!" [ref=e19]: Next.js 15.5.9 (outdated)
          - generic [ref=e20]: Webpack
      - generic [ref=e21]:
        - dialog "Runtime Error" [ref=e22]:
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]:
                - generic [ref=e28]: Runtime Error
                - generic [ref=e30]:
                  - button "Copy Error Info" [ref=e31] [cursor=pointer]
                  - button "No related documentation found" [disabled] [ref=e34]
                  - link "Learn more about enabling Node.js inspector for server code with Chrome DevTools" [ref=e37] [cursor=pointer]:
                    - /url: https://nextjs.org/docs/app/building-your-application/configuring/debugging#server-side-code
              - generic [ref=e46]:
                - paragraph [ref=e47]: "Cannot find module './611.js' Require stack: - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/webpack-runtime.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/.next/server/pages/_document.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/require.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/load-components.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/utils.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/swc/options.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/swc/index.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/build/next-config-ts/transpile-config.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/config.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/next.js - /Users/mikemac/Mike-docs/DEV-EDUCATION/app/react/linarex/linarex/linarex/node_modules/next/dist/server/lib/start-server.js"
                - button "Show More" [ref=e49] [cursor=pointer]
            - generic [ref=e51]:
              - generic [ref=e52]:
                - paragraph [ref=e53]:
                  - text: Call Stack
                  - generic [ref=e54]: "40"
                - button "Show 38 ignore-listed frame(s)" [ref=e55] [cursor=pointer]
              - generic [ref=e58]:
                - generic [ref=e59]: <unknown>
                - text: .next/server/pages/_error.js (19:11086)
              - generic [ref=e60]:
                - generic [ref=e61]: Object.<anonymous>
                - text: .next/server/pages/_error.js (19:11132)
          - generic [ref=e62]:
            - generic [ref=e63]: "1"
            - generic [ref=e64]: "2"
        - contentinfo [ref=e65]:
          - region "Error feedback" [ref=e66]:
            - paragraph [ref=e67]:
              - link "Was this helpful?" [ref=e68] [cursor=pointer]:
                - /url: https://nextjs.org/telemetry#error-feedback
            - button "Mark as helpful" [ref=e69] [cursor=pointer]
            - button "Mark as not helpful" [ref=e73] [cursor=pointer]
    - generic [ref=e80] [cursor=pointer]:
      - button "Open Next.js Dev Tools" [ref=e81]
      - generic [ref=e85]:
        - button "Open issues overlay" [ref=e86]:
          - generic [ref=e87]:
            - generic [aria-hidden] [ref=e88]: "0"
            - generic [ref=e89]: "1"
          - generic [ref=e90]: Issue
        - button "Collapse issues badge" [ref=e91]
  - alert [ref=e94]
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
  33 |   await page.goto('/epk', { waitUntil: 'networkidle' });
  34 |  
  35 |   // Check for email address in the body text
  36 |   const pageText = await page.textContent('body');
> 37 |   expect(pageText).toContain('linarexinfo@gmail.com');
     |                    ^ Error: expect(received).toContain(expected) // indexOf
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
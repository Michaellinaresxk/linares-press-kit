# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/epk-test.spec.ts >> Live show section shows repertoire
- Location: tests/e2e/epk-test.spec.ts:40:1

# Error details

```
Error: page.goto: NS_ERROR_CONNECTION_REFUSED
Call log:
  - navigating to "http://localhost:3000/epk", waiting until "networkidle"

```

# Page snapshot

```yaml
- article [ref=e3]:
  - generic [ref=e6]:
    - heading "Unable to connect" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - text: Nightly can’t connect to the server at
      - strong [ref=e9]: localhost:3000
    - generic [ref=e10]:
      - heading "What can you do about it?" [level=3] [ref=e11]
      - list [ref=e12]:
        - listitem [ref=e13]: The site could be temporarily unavailable or too busy. Try again in a few moments.
        - listitem [ref=e14]: If you are unable to load any pages, check your computer’s network connection.
        - listitem [ref=e15]: If your computer or network is protected by a firewall or proxy, make sure that Nightly is permitted to access the web.
    - button "Try Again" [ref=e18]
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
  37 |   expect(pageText).toContain('linarexinfo@gmail.com');
  38 | });
  39 | 
  40 | test('Live show section shows repertoire', async ({ page }) => {
> 41 |   await page.goto('/epk', { waitUntil: 'networkidle' });
     |              ^ Error: page.goto: NS_ERROR_CONNECTION_REFUSED
  42 |   
  43 |   // The repertoire description should mention originals and covers
  44 |   const pageText = await page.textContent('body');
  45 |   expect(pageText).toMatch(/originals?/i);
  46 |   expect(pageText).toMatch(/covers?/i);
  47 | });
```
import { test, expect } from '@playwright/test';

test('EPK page loads and shows key content', async ({ page }) => {
  await page.goto('/epk', { waitUntil: 'networkidle' });
  
  // Check page title
  await expect(page).toHaveTitle(/Linarex/);
  
  // Check key content is present (using text-based detection for CSS module compatibility)
  const pageText = await page.textContent('body');
  expect(pageText).toContain('Linarex');
  expect(pageText).toContain('Original music');
  expect(pageText).toContain('Connect & Stream');
  expect(pageText).toContain('Original songs');
  expect(pageText).toContain('covers');
});

test('Homepage loads correctly', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page).toHaveTitle(/Linarex/);
  await expect(page.locator('header')).toBeVisible();
});

test('BookerInfo does not show new dates text', async ({ page }) => {
  await page.goto('/epk', { waitUntil: 'networkidle' });
  
  // The page should not contain "New dates coming soon"
  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('New dates coming soon');
});

test('Contact email link is present in EPK', async ({ page }) => {
  await page.goto('/epk', { waitUntil: 'networkidle' });
 
  // Check for email address in the body text
  const pageText = await page.textContent('body');
  expect(pageText).toContain('linarexinfo@gmail.com');
});

test('Live show section shows repertoire', async ({ page }) => {
  await page.goto('/epk', { waitUntil: 'networkidle' });
  
  // The repertoire description should mention original songs and covers
  const pageText = await page.textContent('body');
  expect(pageText).toContain('Original songs');
  expect(pageText).toContain('covers');
});
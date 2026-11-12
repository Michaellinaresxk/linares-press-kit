import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  use: {
    baseURL: 'http://localhost:3000',
    ...devices['Desktop Chrome'],
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'E2E Tests',
      testDir: './tests/e2e',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Install browsers if command fails.
  // projects: [...],
  // reporter: [['list', { slow: 1000 }], ['html', { open: 'never' }]],
});
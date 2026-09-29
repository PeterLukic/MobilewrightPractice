import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: [
    'features/steps/**/*.ts',
    'features/support/**/*.ts',
  ],
});

export default defineConfig({
  testDir,
  workers: 1,
  timeout: 90_000,
  reporter: [['list'], ['html', { open: 'never' }]],
});
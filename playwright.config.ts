import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  }
});


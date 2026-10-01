import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: "./tests",
  platform: "android",
  bundleId: 'com.halooglasi.android',
  autoAppLaunch: true,
  viewTree: 'on-failure',
  reporter: [['html', { open: 'never' }]],
});

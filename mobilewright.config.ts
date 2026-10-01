import { defineConfig } from 'mobilewright';
import  data from './utils/data.json';

export default defineConfig({
  testDir: "./tests",
  platform: "android",
  bundleId: data.bundleId,
  autoAppLaunch: true,
  viewTree: 'on-failure',
  reporter: [['html', { open: 'never' }]],
});

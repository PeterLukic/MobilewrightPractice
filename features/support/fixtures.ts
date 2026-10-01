import { test as base } from 'playwright-bdd';
import { android } from 'mobilewright';
import { PageManager } from '../../pageobjects/PageManager';
import  data from '../..//utils/data.json';


const bundleId = data.bundleId;

export const test = base.extend<{ pages: PageManager }>({
  pages: async ({}, use) => {
    const device = await android.launch({ bundleId });

    try {
      await use(new PageManager(device.screen));
    } finally {
      try {
        await device.terminateApp(bundleId);
      } finally {
        await device.close();
      }
    }
  },
});
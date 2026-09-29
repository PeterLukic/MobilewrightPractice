import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I open My Profile', async ({ pages }) => {
  await pages.home.tapMyProfileTab();
});

import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { Then } = createBdd(test);

Then('I tap login button', async ({ pages }) => {
  await pages.myProfile.tapLoginButton();
});
import { createBdd } from 'playwright-bdd';
import { expect } from 'mobilewright';
import { test } from '../support/fixtures';

const {  When, Then } = createBdd(test);

Then('I tap login button', async ({ pages }) => {
  await pages.myProfile.tapLoginButton();
});

When(
  'I log in with email {string} and password {string}',
  async ({ pages }, email: string, password: string) => {
    await pages.login.enterEmail(email);
    await pages.login.enterPassword(password);
    await pages.login.tapLoginButton();
  }
);

Then('the invalid login message is visible', async ({ pages }) => {
  await expect(pages.login.failedLoginMessage).toBeVisible();
});
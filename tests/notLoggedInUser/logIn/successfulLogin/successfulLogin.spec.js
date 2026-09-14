import { test } from "../../../_fixtures/fixtures";
import { severity, Severity } from 'allure-js-commons';


// eslint-disable-next-line max-len
test('Successful login with valid credentials', async ({ existingUser, homePage }) => {
  await severity(Severity.BLOCKER);
  await homePage.fillUsernameField(existingUser.username);
  await homePage.fillPasswordField(existingUser.password);
  await homePage.clickLogInButton();
  // await homePage.assertLoginSuccess(); // once you write this
});
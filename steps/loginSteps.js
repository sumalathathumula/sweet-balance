
import { expect } from "@playwright/test";
import { Given, When, Then } from '../fixtures/fixtures';

Given('User clicked login button after reaching SweetBalance app homepage', async ({loginPage}) => {
  // Step: Given User clicked login button after reaching SweetBalance app homepage
  // From: features\loginPage.feature:4:1
  //await loginPage.goto();
  
});

Given('User is on the login page', async ({loginPage}) => {
  // Step: Given User is on the login page
  // From: features\loginPage.feature:7:1
  await loginPage.goto();
});

When('Registered user clicks continue with email button after entering a valid existing email', async ({loginPage}) => {
  // Step: When Registered user clicks continue with email button after entering a valid existing email
  // From: features\loginPage.feature:8:1
  await loginPage.enteremail(process.env.USER_EMAIL);  
  await loginPage.clickcontinuewithemailbutton()
  await loginPage.enterPassword(process.env.USER_PASSWORD);
  await loginPage.clickSigninButton();

});

Then('User should get password field', async ({loginPage}) => {
  // Step: Then User should get password field
  // From: features\loginPage.feature:9:1
});

When('Registered user clicks sign in after entering password', async ({loginPage}) => {
  // Step: When Registered user clicks sign in after entering password
  // From: features\loginPage.feature:12:1
  // await loginPage.enterPassword(process.env.USER_PASSWORD);
  // await loginPage.clickSigninButton();
});

Then('User should be navigated to home page', async ({loginPage}) => {
  // Step: Then User should be navigated to home page
  // From: features\loginPage.feature:13:1
});
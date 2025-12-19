import { expect } from "@playwright/test";
import { Given, When, Then } from '../fixtures/fixtures';

Given('User is in upgrade to premium page', async ({upgradeToPremiumPage}) => {
  // Step: Given User is in upgrade to premium page
  // From: features\upgradeToPremium.feature:5:3
  await upgradeToPremiumPage.navigateToPremiumPaymentPage();
});

Then('Page title should be {string}', async ({upgradeToPremiumPage}, arg) => {
  // Step: Then Page title should be "Upgrade to Premium"
  // From: features\upgradeToPremium.feature:6:3
  await upgradeToPremiumPage.verifyOnUpgradePage();
});

Then('User should see {string}', async ({upgradeToPremiumPage}, arg) => {
  // Step: Then User should see "Get personalized insights and advanced features to better manage your diabetes."
  // From: features\upgradeToPremium.feature:10:3
    await upgradeToPremiumPage.verifyGetPersonalizedinsightsText();
});

Then('User should see text {string}', async ({upgradeToPremiumPage}, arg) => {
  // Step: Then User should see text "Premium Features"
  // From: features\upgradeToPremium.feature:15:3
    await upgradeToPremiumPage.verifyPremiumFeaturesHeading();
});

Then('User should see cancel anytime text below the pricing details', async ({upgradeToPremiumPage}) => {
  // Step: Then User should see cancel anytime text below the pricing details
  // From: features\upgradeToPremium.feature:35:3
  await upgradeToPremiumPage.verifyCancelAnytimeText();
});

Then('User should see heading {string}', async ({upgradeToPremiumPage}, arg) => {
  // Step: Then User should see heading "Card Number"
  // From: features\upgradeToPremium.feature:40:3
  await upgradeToPremiumPage.verifyCardNumberText();
});

Then('User should see card number field', async ({upgradeToPremiumPage}) => {
  // Step: Then User should see card number field
  // From: features\upgradeToPremium.feature:44:3
  await upgradeToPremiumPage.verifyCardNumberField();
});

Then('User should see expiration field', async ({upgradeToPremiumPage}) => {
  // Step: Then User should see expiration field
  // From: features\upgradeToPremium.feature:45:3
  await upgradeToPremiumPage.verfyExpirationField();
});

Then('User should see cvv field', async ({upgradeToPremiumPage}) => {
  // Step: Then User should see cvv field
  // From: features\upgradeToPremium.feature:46:3
  await upgradeToPremiumPage.verifyCvvField();
});

Then('User should see {string} button', async ({upgradeToPremiumPage}, arg) => {
  // Step: Then User should see "Pay $9.99 USD" button
  // From: features\upgradeToPremium.feature:50:3
  await upgradeToPremiumPage.verifyPayButton();
});

 //--payment card validation steps

 When('User clicks the {string} button without entering any card details', async ({upgradeToPremiumPage}, arg) => {
  // Step: When User clicks the "Pay $9.99 USD" button without entering any card details
  // From: features\upgradeToPremium.feature:54:3
  await upgradeToPremiumPage.clickPay();
});

Then('User should see validation messages for all required fields', async ({upgradeToPremiumPage}) => {
  // Step: Then User should see validation messages for all required fields
  // From: features\upgradeToPremium.feature:55:3
  await upgradeToPremiumPage.verifyErrorMessage();
});

When('User clicks the {string} button with invalid card number', async ({upgradeToPremiumPage}, arg) => {
  // Step: When User clicks the "Pay $9.99 USD" button with invalid card number
  // From: features\upgradeToPremium.feature:59:3
  await upgradeToPremiumPage.enterPaymentDetails('1234 5678 9012 3456', '12/25', '123');
  await upgradeToPremiumPage.clickPay();
});

Then('error message should be displayed', async ({upgradeToPremiumPage}) => {
  // Step: Then error message should be displayed
  // From: features\upgradeToPremium.feature:60:3
  await upgradeToPremiumPage.verifyErrorMessage();
});

When('User clicks the {string} button with expired card', async ({upgradeToPremiumPage}, arg) => {
  // Step: When User clicks the "Pay $9.99 USD" button with expired card
  // From: features\upgradeToPremium.feature:64:3
  await upgradeToPremiumPage.enterPaymentDetails('4242 4242 1234 1234', '12/20', '123');
  await upgradeToPremiumPage.clickPay();
});

When('User clicks the {string} button with valid payment details', async ({upgradeToPremiumPage}, arg) => {
  // Step: When User clicks the "Pay $9.99 USD" button with valid payment details
  // From: features\upgradeToPremium.feature:69:3
  await upgradeToPremiumPage.enterPaymentDetails('4242 4242 4242 4242', '02/2030', '123');
  await upgradeToPremiumPage.clickPay();
});

Then('User should be redirected to the confirmation or home page with premium access enabled', async ({upgradeToPremiumPage}) => {
  // Step: Then User should be redirected to the confirmation or home page with premium access enabled
  // From: features\upgradeToPremium.feature:70:3
  await upgradeToPremiumPage.verifySuccessRedirect();
});



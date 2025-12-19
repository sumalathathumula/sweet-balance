import { expect } from "@playwright/test";
import { Given, When, Then } from '../fixtures/fixtures';

Given('User launches the browser', async ({launchPage}) => {
  // Step: Given User launches the browser
  // From: features\launchPage.feature:4:3
  await launchPage.goto();
});

When('User enters the SweetBalance url', async ({launchPage}) => {
  // Step: When User enters the SweetBalance url
  // From: features\launchPage.feature:5:3
  await launchPage.goto();
});

Then('User should see app name on the top left', async ({launchPage}) => {
  // Step: Then User should see app name on the top left
// From: features\launchPage.feature:6:3
    await launchPage.verifyAppName();
});
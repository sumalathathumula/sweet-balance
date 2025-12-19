// Generated from: features\loginPage.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Login page field and functional Validation', () => {

  test('Verify email input accepts valid existing email', async ({ Given, loginPage }) => { 
    await Given('User is on the login page', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\loginPage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]}]},
]; // bdd-data-end
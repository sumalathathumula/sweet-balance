// Generated from: features\launchPage.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Verify Homepage UI components', () => {

  test('Validate the presence of App Name on the home page', async ({ Given, launchPage }) => { 
    await Given('User launches the browser', null, { launchPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\launchPage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]}]},
]; // bdd-data-end
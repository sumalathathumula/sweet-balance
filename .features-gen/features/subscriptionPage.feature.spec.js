// Generated from: features\subscriptionPage.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Subscription page validation', () => {

  test.describe('Verify feature availability on Subscription page', () => {

    test('Example #1', async ({ Given, Then, subscriptionPage }) => { 
      await Given('User completes onboarding process', null, { subscriptionPage }); 
      await Then('"Daily Meal Plan" should be "both"', null, { subscriptionPage }); 
    });

    test('Example #2', async ({ Given, Then, subscriptionPage }) => { 
      await Given('User completes onboarding process', null, { subscriptionPage }); 
      await Then('"Weekly Meal Plan" should be "premium only"', null, { subscriptionPage }); 
    });

    test('Example #3', async ({ Given, Then, subscriptionPage }) => { 
      await Given('User completes onboarding process', null, { subscriptionPage }); 
      await Then('"Personalized Exercise Plan" should be "premium only"', null, { subscriptionPage }); 
    });

    test('Example #4', async ({ Given, Then, subscriptionPage }) => { 
      await Given('User completes onboarding process', null, { subscriptionPage }); 
      await Then('"10-Day Quick Reversal Plan" should be "premium only"', null, { subscriptionPage }); 
    });

    test('Example #5', async ({ Given, Then, subscriptionPage }) => { 
      await Given('User completes onboarding process', null, { subscriptionPage }); 
      await Then('"30-Day Blood Sugar Reduction Plan" should be "premium only"', null, { subscriptionPage }); 
    });

    test('Example #6', async ({ Given, Then, subscriptionPage }) => { 
      await Given('User completes onboarding process', null, { subscriptionPage }); 
      await Then('"Glucose Level Graph" should be "both"', null, { subscriptionPage }); 
    });

    test('Example #7', async ({ Given, Then, subscriptionPage }) => { 
      await Given('User completes onboarding process', null, { subscriptionPage }); 
      await Then('"BMI Calculation" should be "both"', null, { subscriptionPage }); 
    });

    test('Example #8', async ({ Given, Then, subscriptionPage }) => { 
      await Given('User completes onboarding process', null, { subscriptionPage }); 
      await Then('"Downloadable Meal Plan PDF" should be "premium only"', null, { subscriptionPage }); 
    });

    test('Example #9', async ({ Given, Then, subscriptionPage }) => { 
      await Given('User completes onboarding process', null, { subscriptionPage }); 
      await Then('"Reminders (Medication, Appointments, Health Tasks)" should be "premium only"', null, { subscriptionPage }); 
    });

  });

  test('Verify Continue Free button visibility', async ({ Given, Then, subscriptionPage }) => { 
    await Given('User completes onboarding process', null, { subscriptionPage }); 
    await Then('Continue Free button should be visible', null, { subscriptionPage }); 
  });

  test('Verify Upgrade to Premium button visibility', async ({ Given, Then, subscriptionPage }) => { 
    await Given('User completes onboarding process', null, { subscriptionPage }); 
    await Then('Upgrade to Premium button should be visible', null, { subscriptionPage }); 
  });

  test('Verify Free Account label', async ({ Given, Then, subscriptionPage }) => { 
    await Given('User completes onboarding process', null, { subscriptionPage }); 
    await Then('Free Account label should be displayed', null, { subscriptionPage }); 
  });

  test('Verify Premium Account label', async ({ Given, Then, subscriptionPage }) => { 
    await Given('User completes onboarding process', null, { subscriptionPage }); 
    await Then('Premium Account label should be displayed', null, { subscriptionPage }); 
  });

  test('Verify upgrade message header', async ({ Given, Then, subscriptionPage }) => { 
    await Given('User completes onboarding process', null, { subscriptionPage }); 
    await Then('Upgrade message header should be displayed', null, { subscriptionPage }); 
  });

  test('Verify terms and conditions text', async ({ Given, Then, subscriptionPage }) => { 
    await Given('User completes onboarding process', null, { subscriptionPage }); 
    await Then('Terms and Conditions text should be visible', null, { subscriptionPage }); 
  });

  test('Verify Continue Free button navigation', async ({ Given, When, Then, subscriptionPage }) => { 
    await Given('User completes onboarding process', null, { subscriptionPage }); 
    await When('User clicks Continue Free button', null, { subscriptionPage }); 
    await Then('User should be navigated to Home page', null, { subscriptionPage }); 
  });

  test('Verify Upgrade to Premium button navigation', async ({ Given, When, Then, subscriptionPage }) => { 
    await Given('User completes onboarding process', null, { subscriptionPage }); 
    await When('User clicks  Upgrade to Premium button', null, { subscriptionPage }); 
    await Then('User should be navigated to upgrade page', null, { subscriptionPage }); 
  });

  test('Navigate to Upgrade page from Home page using View Full Plan', async ({ Given, When, Then, subscriptionPage }) => { 
    await Given('User is logged in with Free account', null, { subscriptionPage }); 
    await When('User clicks View Full Plan on Home page', null, { subscriptionPage }); 
    await Then('User should be redirected to the subscription payment screen', null, { subscriptionPage }); 
  });

  test('Navigate to Upgrade page from Exercise tab using View Full Schedule', async ({ Given, When, Then, subscriptionPage }) => { 
    await Given('User is logged in with Free account', null, { subscriptionPage }); 
    await When('User navigates to Exercise tab', null, { subscriptionPage }); 
    await When('User clicks View Full Schedule', null, { subscriptionPage }); 
    await Then('User should be redirected to the subscription payment screen', null, { subscriptionPage }); 
  });

  test('Navigate to Upgrade page from Dashboard', async ({ Given, When, Then, subscriptionPage }) => { 
    await Given('User is logged in with Free account', null, { subscriptionPage }); 
    await When('User clicks Upgrade to Premium on Dashboard', null, { subscriptionPage }); 
    await Then('User should be redirected to the subscription payment screen', null, { subscriptionPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\subscriptionPage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then \"Daily Meal Plan\" should be \"both\"","stepMatchArguments":[{"group":{"start":0,"value":"\"Daily Meal Plan\"","children":[{"start":1,"value":"Daily Meal Plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"both\"","children":[{"start":29,"value":"both","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then \"Weekly Meal Plan\" should be \"premium only\"","stepMatchArguments":[{"group":{"start":0,"value":"\"Weekly Meal Plan\"","children":[{"start":1,"value":"Weekly Meal Plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":29,"value":"\"premium only\"","children":[{"start":30,"value":"premium only","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then \"Personalized Exercise Plan\" should be \"premium only\"","stepMatchArguments":[{"group":{"start":0,"value":"\"Personalized Exercise Plan\"","children":[{"start":1,"value":"Personalized Exercise Plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"premium only\"","children":[{"start":40,"value":"premium only","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then \"10-Day Quick Reversal Plan\" should be \"premium only\"","stepMatchArguments":[{"group":{"start":0,"value":"\"10-Day Quick Reversal Plan\"","children":[{"start":1,"value":"10-Day Quick Reversal Plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"premium only\"","children":[{"start":40,"value":"premium only","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":29,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then \"30-Day Blood Sugar Reduction Plan\" should be \"premium only\"","stepMatchArguments":[{"group":{"start":0,"value":"\"30-Day Blood Sugar Reduction Plan\"","children":[{"start":1,"value":"30-Day Blood Sugar Reduction Plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"premium only\"","children":[{"start":47,"value":"premium only","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":34,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then \"Glucose Level Graph\" should be \"both\"","stepMatchArguments":[{"group":{"start":0,"value":"\"Glucose Level Graph\"","children":[{"start":1,"value":"Glucose Level Graph","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":32,"value":"\"both\"","children":[{"start":33,"value":"both","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":39,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then \"BMI Calculation\" should be \"both\"","stepMatchArguments":[{"group":{"start":0,"value":"\"BMI Calculation\"","children":[{"start":1,"value":"BMI Calculation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"both\"","children":[{"start":29,"value":"both","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":43,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":44,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then \"Downloadable Meal Plan PDF\" should be \"premium only\"","stepMatchArguments":[{"group":{"start":0,"value":"\"Downloadable Meal Plan PDF\"","children":[{"start":1,"value":"Downloadable Meal Plan PDF","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"premium only\"","children":[{"start":40,"value":"premium only","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then \"Reminders (Medication, Appointments, Health Tasks)\" should be \"premium only\"","stepMatchArguments":[{"group":{"start":0,"value":"\"Reminders (Medication, Appointments, Health Tasks)\"","children":[{"start":1,"value":"Reminders (Medication, Appointments, Health Tasks)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":63,"value":"\"premium only\"","children":[{"start":64,"value":"premium only","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":55,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":56,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then Continue Free button should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":61,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Upgrade to Premium button should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":66,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then Free Account label should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":71,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then Premium Account label should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":75,"pickleLine":49,"tags":[],"steps":[{"pwStepLine":76,"gherkinStepLine":50,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then Upgrade message header should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":80,"pickleLine":53,"tags":[],"steps":[{"pwStepLine":81,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Terms and Conditions text should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":85,"pickleLine":57,"tags":[],"steps":[{"pwStepLine":86,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When User clicks Continue Free button","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Home page","stepMatchArguments":[]}]},
  {"pwTestLine":91,"pickleLine":62,"tags":[],"steps":[{"pwStepLine":92,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given User completes onboarding process","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When User clicks  Upgrade to Premium button","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to upgrade page","stepMatchArguments":[]}]},
  {"pwTestLine":97,"pickleLine":68,"tags":[],"steps":[{"pwStepLine":98,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"Given User is logged in with Free account","stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When User clicks View Full Plan on Home page","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the subscription payment screen","stepMatchArguments":[]}]},
  {"pwTestLine":103,"pickleLine":74,"tags":[],"steps":[{"pwStepLine":104,"gherkinStepLine":75,"keywordType":"Context","textWithKeyword":"Given User is logged in with Free account","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When User navigates to Exercise tab","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":77,"keywordType":"Action","textWithKeyword":"When User clicks View Full Schedule","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the subscription payment screen","stepMatchArguments":[]}]},
  {"pwTestLine":110,"pickleLine":80,"tags":[],"steps":[{"pwStepLine":111,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given User is logged in with Free account","stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When User clicks Upgrade to Premium on Dashboard","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the subscription payment screen","stepMatchArguments":[]}]},
]; // bdd-data-end
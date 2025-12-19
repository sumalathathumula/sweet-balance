// Generated from: features\upgradeToPremium.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Upgrade to Premium payment screen validation', () => {

  test('Verify Upgrade to Premium page title', async ({ Given, Then, upgradeToPremiumPage }) => { 
    await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
    await Then('Page title should be "Upgrade to Premium"', null, { upgradeToPremiumPage }); 
  });

  test('Verify upgrade page main description', async ({ Given, Then, upgradeToPremiumPage }) => { 
    await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
    await Then('User should see "Get personalized insights and advanced features to better manage your diabetes."', null, { upgradeToPremiumPage }); 
  });

  test('Verify premium features section text', async ({ Given, Then, upgradeToPremiumPage }) => { 
    await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
    await Then('User should see text "Premium Features"', null, { upgradeToPremiumPage }); 
  });

  test.describe('Verify premium feature is displayed', () => {

    test('Example #1', async ({ Given, Then, upgradeToPremiumPage }) => { 
      await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
      await Then('User should see "Personalized meal plans"', null, { upgradeToPremiumPage }); 
    });

    test('Example #2', async ({ Given, Then, upgradeToPremiumPage }) => { 
      await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
      await Then('User should see "Advanced analytics"', null, { upgradeToPremiumPage }); 
    });

    test('Example #3', async ({ Given, Then, upgradeToPremiumPage }) => { 
      await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
      await Then('User should see "Priority support"', null, { upgradeToPremiumPage }); 
    });

  });

  test('Verify pricing information', async ({ Given, Then, upgradeToPremiumPage }) => { 
    await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
    await Then('User should see "$9.99/month"', null, { upgradeToPremiumPage }); 
  });

  test('Verify cancel anytime message', async ({ Given, Then, upgradeToPremiumPage }) => { 
    await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
    await Then('User should see cancel anytime text below the pricing details', null, { upgradeToPremiumPage }); 
  });

  test('Verify payment card section heading', async ({ Given, Then, upgradeToPremiumPage }) => { 
    await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
    await Then('User should see heading "Card Number"', null, { upgradeToPremiumPage }); 
  });

  test('Verify card input fields', async ({ Given, Then, upgradeToPremiumPage }) => { 
    await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
    await Then('User should see card number field', null, { upgradeToPremiumPage }); 
    await Then('User should see expiration field', null, { upgradeToPremiumPage }); 
    await Then('User should see cvv field', null, { upgradeToPremiumPage }); 
  });

  test('Verify payment button', async ({ Given, When, Then, upgradeToPremiumPage }) => { 
    await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
    await Then('User should see "Pay $9.99 USD" button', null, { upgradeToPremiumPage }); 
    await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
    await When('User clicks the "Pay $9.99 USD" button without entering any card details', null, { upgradeToPremiumPage }); 
    await Then('User should see validation messages for all required fields', null, { upgradeToPremiumPage }); 
  });

  test('Verify User able to do payment with invalid card number', async ({ Given, When, Then, upgradeToPremiumPage }) => { 
    await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
    await When('User clicks the "Pay $9.99 USD" button with invalid card number', null, { upgradeToPremiumPage }); 
    await Then('error message should be displayed', null, { upgradeToPremiumPage }); 
  });

  test('Verify User able to do payment with expired card', async ({ Given, When, Then, upgradeToPremiumPage }) => { 
    await Given('User is in upgrade to premium page', null, { upgradeToPremiumPage }); 
    await When('User clicks the "Pay $9.99 USD" button with expired card', null, { upgradeToPremiumPage }); 
    await Then('error message should be displayed', null, { upgradeToPremiumPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\upgradeToPremium.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Page title should be \"Upgrade to Premium\"","stepMatchArguments":[{"group":{"start":21,"value":"\"Upgrade to Premium\"","children":[{"start":22,"value":"Upgrade to Premium","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":11,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Get personalized insights and advanced features to better manage your diabetes.\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Get personalized insights and advanced features to better manage your diabetes.\"","children":[{"start":17,"value":"Get personalized insights and advanced features to better manage your diabetes.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User should see text \"Premium Features\"","stepMatchArguments":[{"group":{"start":21,"value":"\"Premium Features\"","children":[{"start":22,"value":"Premium Features","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Personalized meal plans\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Personalized meal plans\"","children":[{"start":17,"value":"Personalized meal plans","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":29,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Advanced analytics\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Advanced analytics\"","children":[{"start":17,"value":"Advanced analytics","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":34,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Priority support\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Priority support\"","children":[{"start":17,"value":"Priority support","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":41,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then User should see \"$9.99/month\"","stepMatchArguments":[{"group":{"start":16,"value":"\"$9.99/month\"","children":[{"start":17,"value":"$9.99/month","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":45,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":46,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then User should see cancel anytime text below the pricing details","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":38,"tags":[],"steps":[{"pwStepLine":51,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then User should see heading \"Card Number\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Card Number\"","children":[{"start":25,"value":"Card Number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":55,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":56,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User should see card number field","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then User should see expiration field","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then User should see cvv field","stepMatchArguments":[]}]},
  {"pwTestLine":62,"pickleLine":48,"tags":[],"steps":[{"pwStepLine":63,"gherkinStepLine":49,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Pay $9.99 USD\" button","stepMatchArguments":[{"group":{"start":16,"value":"\"Pay $9.99 USD\"","children":[{"start":17,"value":"Pay $9.99 USD","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When User clicks the \"Pay $9.99 USD\" button without entering any card details","stepMatchArguments":[{"group":{"start":16,"value":"\"Pay $9.99 USD\"","children":[{"start":17,"value":"Pay $9.99 USD","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":67,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then User should see validation messages for all required fields","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":57,"tags":[],"steps":[{"pwStepLine":71,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When User clicks the \"Pay $9.99 USD\" button with invalid card number","stepMatchArguments":[{"group":{"start":16,"value":"\"Pay $9.99 USD\"","children":[{"start":17,"value":"Pay $9.99 USD","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":73,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then error message should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":76,"pickleLine":62,"tags":[],"steps":[{"pwStepLine":77,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given User is in upgrade to premium page","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When User clicks the \"Pay $9.99 USD\" button with expired card","stepMatchArguments":[{"group":{"start":16,"value":"\"Pay $9.99 USD\"","children":[{"start":17,"value":"Pay $9.99 USD","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":79,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then error message should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end
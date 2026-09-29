// Generated from: features\login.feature
import { test } from "../../features/support/fixtures.ts";

test.describe('Halo Oglasi login', () => {

  test('Login with invalid credentials', { tag: ['@mobile', '@negative'] }, async ({ Given, When, Then, pages }) => { 
    await Given('I open My Profile', null, { pages }); 
    await Then('I tap login button', null, { pages }); 
    await When('I log in with email "test123@gmail.com" and password "invalidpassword"', null, { pages }); 
    await Then('the invalid login message is visible', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@mobile","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I open My Profile","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I tap login button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I log in with email \"test123@gmail.com\" and password \"invalidpassword\"","stepMatchArguments":[{"group":{"start":20,"value":"\"test123@gmail.com\"","children":[{"start":21,"value":"test123@gmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"invalidpassword\"","children":[{"start":54,"value":"invalidpassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the invalid login message is visible","stepMatchArguments":[]}]},
]; // bdd-data-end
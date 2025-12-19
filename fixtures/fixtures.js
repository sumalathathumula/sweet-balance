import{test as base, createBdd} from 'playwright-bdd'
import { launchPage } from '../pages/launchPage';
import { loginPage } from '../pages/loginPage';
import { subscriptionPage } from '../pages/subscriptionPage';
import { upgradeToPremiumPage } from '../pages/upgradeToPremiumPage';

export const test = base.extend({
  launchPage: async ({ page }, use) => {
    await use(new launchPage(page));
  },
   loginPage: async ({ page }, use) => {
    await use(new loginPage(page));
  },
  subscriptionPage: async ({ page }, use) => {
    await use(new subscriptionPage(page));
  },
  upgradeToPremiumPage: async ({ page }, use) => {
    await use(new upgradeToPremiumPage(page));
  }


  });

export const { Given, When, Then } = createBdd(test);
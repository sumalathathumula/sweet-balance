

//--new locators for stripe payment
//*[text()='Your card number is incomplete.']
//*[text()='Your card number is invalid.']
//p[contains(text(),'Your card’s expiration year is in the past.')]
//div[@class='flex items-center text-red-500 text-sm mt-2'] -->Please correct the errors in the payment form error message for empty date
//p[contains(text(),'Your card’s security code is incomplete.')] -->for empty cvv error message

//New page locators for after successful payment
//h1[contains(text(),'Welcome to Premium! 🎉')]
//p[@class='text-gray-600']   -->Thank you for upgrading to our Premium service. You now have access to all premium features."
//h3[normalize-space()='Premium Status']
//span[normalize-space()='Status:']
//span[normalize-space()='Status:']/following-sibling::span[normalize-space()='Active']
//span[normalize-space()='Next billing date:']
//span[normalize-space()='December 16, 2026']
//span[normalize-space()='Plan:']
//span[normalize-space()='Monthly']
//span[normalize-space()='Price:']
//span[normalize-space()='$9.99/month']
//button[normalize-space()='Go to Homepage']


import { expect } from '@playwright/test';
export class upgradeToPremiumPage {
  constructor(page) {
    this.page = page;
    this.upgradeToPremiumHeading = page.getByRole('heading', { name: 'Upgrade to Premium' });
    this.premiumFeaturesHeading = page.getByRole('heading', { name: 'Premium Features' });
    this.personalizedMealPlansFeature = page.getByText('✓Personalized meal plans');
    this.advancedAnalyticsFeature = page.getByText('✓Advanced analytics'); 
    this.prioritySupportFeature = page.getByText('✓Priority support');
    this.monthlyPriceText = page.getByText('$9.99/month');
    this.cancelAnytimeText = page.getByText('Cancel anytime');
    this.cardNumberText = page.getByText('Card Number');
    this.payButton = page.getByRole('button', { name: 'Pay $9.99 USD' });

    //payment locators   
    this.getPersonalizedinsightsText= page.getByText('Get personalized insights and');
    //this.cardNumberField=  page.locator('iframe[name="__privateStripeFrame6443"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card number' });
    this.cardNumberField= page.locator("iframe[title='Secure card number input frame']");

    //const page1Promise = page.waitForEvent('popup');
   // this.autoFillLink= page.locator('iframe[name="cardNumberButton6448"]').contentFrame().getByRole('button', { name: 'Autofill with Link' }).click();
    //const page1 = await page1Promise;
    //this.autoFillEmail= page1.getByRole('textbox', { name: 'Email' }).click();
    //this.expirationDateInput== page.locator('iframe[name="__privateStripeFrame6444"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card' }).click();
   this.expirationDateInput= page.locator("//div[@id='card-expiry']");
    //this.cvvInput= page.locator('iframe[name="__privateStripeFrame6445"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card CVC/CVV' }).click();
    this.cvvInput= page.locator("//div[@id='card-cvc']");
    this.payBtn= page.getByRole('button', { name: 'Pay $9.99 USD' });

  }
  async navigateToPremiumPaymentPage() {
        await this.page.goto('/Premium');
  }
  async verifyOnUpgradePage() {
    await expect(this.page).toHaveURL('/Premium');
    await expect(this.upgradeToPremiumHeading).toBeVisible();
  }
  async verifyGetPersonalizedinsightsText() {
    await expect(this.getPersonalizedinsightsText).toBeVisible();
  }
  async verifyPremiumFeaturesHeading() {
    await expect(this.premiumFeaturesHeading).toBeVisible();
  }
  async verifyCancelAnytimeText() {
    await expect(this.cancelAnytimeText).toBeVisible();
  }
  async verifyCardNumberText() {
    await expect(this.cardNumberText).toBeVisible();
  }
  async verifyCardNumberField() {
    await expect(this.cardNumberField).toBeVisible();
  }
  async verfyExpirationField() {
    await expect(this.expirationDateInput).toBeVisible();
  }
  async verifyCvvField() {
    await expect(this.cvvInput).toBeVisible();
  }
  async verifyPayButton() {
    await expect(this.payButton).toBeVisible();
  }
  async verifyPaymentPageLoaded() {
    await expect(this.getPersonalizedinsightsText).toBeVisible();
  }
  async fillCardNumber(cardNumber) {
    const cardFrame = this.page.frameLocator(
      'iframe[title="Secure card number input frame"]'
    );
    await cardFrame.locator('input[name="cardnumber"]').fill(cardNumber);
  }

  async fillExpiry(expiry) {
    const expiryFrame = this.page.frameLocator(
      'iframe[title="Secure expiration date input frame"]'
    );
    await expiryFrame.locator('input[name="exp-date"]').fill(expiry);
  }

  async fillCVV(cvv) {
    const cvvFrame = this.page.frameLocator(
      'iframe[title="Secure CVC input frame"]'
    );
    await cvvFrame.locator('input[name="cvc"]').fill(cvv);
  }

  async enterPaymentDetails(card, exp, cvv) {
    await this.fillCardNumber(card);
    await this.fillExpiry(exp);
    await this.fillCVV(cvv);
  }

  async clickPay() {
    await this.payButton.click();
  }

  async verifyErrorMessage() {
    await expect(this.page.locator('[role="alert"]')).toBeVisible();
  }

  async verifySuccessRedirect() {
    await expect(this.page).toHaveURL('/premium');
  }

}
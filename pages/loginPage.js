import { expect } from '@playwright/test';
export class loginPage {
  constructor(page) {
    this.page = page;
    this.loginlink = page.getByText('Login');
    this.welcomebackheading = page.getByRole('heading', { name: 'Welcome back' });
    this.signintext = page.getByText('Sign in to your account or create a new one',{ exact: false });
    this.closebutton = page.getByRole('button').first();
    this.emailinputfield = page.getByPlaceholder('Enter email');
    this.continuewithemailbutton = page.getByRole('button', { name: 'Continue with email' });
    this.orseparator = page.getByText('OR',{ exact: true });
    this.errormessage = page.locator('//p[text()="Please enter a valid email address"]');
    this.passwordinputfield = page.getByPlaceholder('Enter your password');
    this.signinbutton = page.getByRole('button', { name: 'Sign in' });
    this.useremail = page.getByText('subulakshmi.Rajkumar@gmail.com',{ exact: true });
    this.completeprofileheading = page.getByText('Complete your profile',{ exact: true });
  }

  async goto() {
        console.log('Navigating to the launch page' + this.page.url());
        
        await this.page.goto('/auth');

    }
  async navigatetoapplicationpage(url) {
    await this.page.goto(url);
  }
  async clickonloginlink() {
    await this.loginlink.click();
  }
  async verifywelcomebackheading() {
    await expect(this.welcomebackheading).toBeVisible();
  }
  async verifysignintext() {
    await expect(this.signintext).toBeVisible();
  }
  async verifyclosebutton() {
    await expect(this.closebutton).toBeVisible();
  }
  async verifyemailinputfield() {
    await expect(this.emailinputfield).toBeVisible();
  }
  async verifyemailplaceholdertext(expectedText) {
    const attr = await this.emailinputfield.getAttribute('placeholder');
  expect(attr.toLowerCase()).toBe(expectedText.toLowerCase());
  }
  async verifycontinuewithemailbutton() {
    await expect(this.continuewithemailbutton).toBeVisible();
  }
  async verifycontinuewithemailbuttonenabled() {
    await expect(this.continuewithemailbutton).toBeEnabled();
  }
  async verifyorseparator() {
    await expect(this.orseparator).toBeVisible();
  }
  async enteremail(email) {
    console.log('Filling email input with:', email);
    await this.emailinputfield.waitFor({ state: 'visible' });
    await this.emailinputfield.fill(email);
  }
  async clickcontinuewithemailbutton() {
    await this.continuewithemailbutton.click();
  }
  async verifyerrormessage() {
   await this.errormessage.waitFor({ state: 'visible', timeout: 5000 });
   await expect(this.errormessage).toBeVisible();
   console.log('Error message displayed:', errorText);
  await expect(this.errormessage).toHaveText('Please enter a valid email address');
  }
  async verifypasswordfield() {
    await expect(this.passwordinputfield).toBeVisible();
  }
  async verifySigninButton() {
    await expect(this.signinbutton).toBeVisible();
  }
  async clickSigninButton() {
    await this.signinbutton.click();
  }
  async verifyUserEmail() {
    await expect(this.useremail).toBeVisible();
  }
  async verifyPasswordInputField() {
    await expect(this.passwordinputfield).toBeVisible();
  }
  async enterPassword(password) {
    console.log('Filling password with:', password);
    await this.passwordinputfield.fill(password);
  }
  async verifyCompleteProfileHeading() {
    await expect(this.completeprofileheading).toBeVisible();
  }
}
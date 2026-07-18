import { Page, Locator } from '@playwright/test';

export class SDCheckoutPage {
   page: Page;
   firstName: Locator;
   lastName: Locator;
   postalCode: Locator;
   continueBtn: Locator;
   finishBtn: Locator;
   successMsg: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn = page.locator('#finish');

    this.successMsg = page.locator('text=THANK YOU FOR YOUR ORDER');
  }

  async fillDetails() {
    await this.firstName.fill('Priya');
    await this.lastName.fill('Rao');
    await this.postalCode.fill('600001');
  }

  async continueCheckout() {
    await this.continueBtn.click();
  }

  async finishOrder() {
    await this.finishBtn.click();
  }
}
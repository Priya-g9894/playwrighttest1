import { Page, Locator } from '@playwright/test';

export class SDCartPage {
   page: Page;
   cartItems: Locator;
   removeBtn: Locator;
   checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.removeBtn = page.locator('#remove-sauce-labs-backpack');
    this.checkoutBtn = page.locator('#checkout');
  }

  public async removeOneItem() {
    await this.removeBtn.click();
  }

 public async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
}
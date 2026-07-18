import { Page, Locator, expect } from '@playwright/test';

export class SDProductsPage {
   page: Page;
   title: Locator;
   cartIcon: Locator;
   cartBadge: Locator;
   backpack: Locator;
   bikeLight: Locator;
   shirt: Locator


  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');
    this.bikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
    this.shirt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
  }

  async addItems() {
    // Add 3 items 
    await expect(this.backpack).toBeVisible();
    await this.backpack.click();
    await this.bikeLight.click();
    await this.shirt.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
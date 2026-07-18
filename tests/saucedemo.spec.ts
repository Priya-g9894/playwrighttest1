import { test, expect } from '@playwright/test';
import { SDLoginPage } from '../pages/sdloginpage';
import { SDProductsPage } from '../pages/sdproductspage';
import { SDCartPage } from '../pages/sdcartpage';
import { SDCheckoutPage } from '../pages/sdcheckoutpage';
import { Utils } from '../pages/utils';



test('@priya Complete SauceDemo flow', async ({ page }) => {
 const utils=new Utils(page)
 await utils.launchUrl("https://www.saucedemo.com/")
  const login = new SDLoginPage(page);
  const products = new SDProductsPage(page);
  const cart = new SDCartPage(page);
  const checkout = new SDCheckoutPage(page);

  // Open & Login
    await login.login('standard_user', 'secret_sauce');
   await page.pause()
  // Verify Products page - write assertion on page file going forward
  await expect(products.title).toHaveText('Products'); // it will continue to run even it fails
   // await expect(products.title).not.
  await page.pause()
  // Add 3 items
  await products.addItems();
  await expect(products.cartBadge).toHaveText('3');
  await page.pause()
  // Go to cart
  await products.goToCart();
  await page.pause()
  // Verify items present
  await expect(cart.cartItems).toHaveCount(3);
  await page.pause()
  // Remove 1 item
  await cart.removeOneItem();
  await expect(cart.cartItems).toHaveCount(2);
  await page.pause()
  // Checkout
  await cart.proceedToCheckout();
  await page.pause()
  // Fill details
  await checkout.fillDetails();
  await checkout.continueCheckout();
  await page.pause()
  // Verify summary page
  await expect(page.locator('.summary_info')).toBeVisible();
  await page.pause()
  // Finish order
  await checkout.finishOrder();
  await page.pause()
  // Verify success message
  await expect(checkout.successMsg).toBeVisible();
  await page.pause()
});
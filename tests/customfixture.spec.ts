import { expect } from '@playwright/test';
import { SDLoginPage } from '../pages/sdloginpage';
import { Utils } from '../pages/utils';
import {test} from '../fixtures/fixtures'

test('Complete SauceDemo flow', async ({ page, loginPage, productsPage }) => {
 const utils=new Utils(page)
 await utils.launchUrl("https://www.saucedemo.com/")
  //const login = new SDLoginPage(page);
    // Open & Login
    await loginPage.login('standard_user', 'secret_sauce');
   await page.pause()

   await productsPage.addItems()

})
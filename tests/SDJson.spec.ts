import { test, expect } from '@playwright/test';
import { SDLoginPage } from '../pages/sdloginpage';
import { Utils } from '../pages/utils';
const users = require('../TestData/data.json')
const role = process.env.ROLE || 'standard_user'
let filteredUsers = users;
 
// Filter based on username
if (role !== "all") {
 
  const usernames = role
    .split(",")
    .map(r => r.trim());
 
  filteredUsers = users.filter(
    (user: any) =>
      usernames.includes(user. Username)
  );
}
 for(const user of filteredUsers){
test(`Complete SauceDemo flow with ${user.Username}`, async ({ page }) => {
 const utils=new Utils(page)
 await utils.launchUrl("https://www.saucedemo.com/")
  const login = new SDLoginPage(page);

  // Open & Login
    await login.login(user.Username, user.Password);
   await page.pause()
})
 }

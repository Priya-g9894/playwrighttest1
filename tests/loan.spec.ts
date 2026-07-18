import test from "@playwright/test"
import { Utils } from "../pages/utils"
import { HomeLoan } from "../pages/homeloan"

test("homeloandetails", async({page})=>{
const utils = new Utils(page)
const homeloan = new HomeLoan(page)
await utils.launchUrl("https://www.anz.com.au/personal/home-loans/calculators-tools/borrowing-power-calculator/")
await page.pause()
await homeloan.fillForm();
await homeloan.calculate();
await homeloan.resetForm();

})








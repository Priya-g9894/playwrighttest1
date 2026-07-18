import { test, expect } from '@playwright/test';
import { Alerts } from '../pages/alerts';
import { Utils } from "../pages/utils"

test('alert event handling', async ({ context }) => {
 //const context = await browser.newContext() //it willl open a new session
 const page = await context.newPage() // it will use a session and opens a page (it includes context and browser)

   const utils=new Utils(page)
 await utils.launchUrl("https://demoqa.com/alerts")
  const alertH = new Alerts(page);
   await page.pause()
  await alertH.alertHandling()
   await page.pause()
   
})

test.only('standardFixtures', async ({ page }) => {
 //const context = await browser.newContext() //it willl open a new session
 //const page = await context.newPage() // it will use a session and opens a page (it includes context and browser)

   const utils=new Utils(page)
    await page.pause()
 await utils.stdFixtures()
 await page.pause()
   
})
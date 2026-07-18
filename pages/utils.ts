import { chromium, Page } from "@playwright/test";

export class Utils{
page:Page
constructor(page:Page){
    this.page=page
}
public async launchUrl(url:string){
//browser actions
await this.page.goto(url) 
/* await this.page.goBack()
await this.page.goForward()
await this.page.reload()
await this.page.close()
await this.page.bringToFront() */

}
public async stdFixtures(){
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const context1 = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage() 
    const page3 = await context1.newPage()
    await page1.pause()
    await page1.goto("https://www.saucedemo.com/")
    await page2.pause()
    await page2.goto("https://www.facebook.com/")
    await page3.pause()
    await page3.goto("https://demoqa.com/")
    await page2.bringToFront()
    await page1.close()

}
}
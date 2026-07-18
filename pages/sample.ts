import { chromium, Locator, Page } from "@playwright/test"

export class Sample{
    page:Page
    download:Locator
    uploadFile:Locator
    constructor(page:Page){
        this.page=page      
        this.download=page.locator('[id="downloadButton"]')
        this.uploadFile=page.locator('[id="uploadFile"]')
    }
    public async test() {
        const browser= await chromium.launch()
        const context = await browser.newContext()
        const page= await context.newPage()
        const page2= await context.newPage()
    }
}
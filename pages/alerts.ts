import {Locator, Page } from "@playwright/test";

export class Alerts{
    page:Page
    stdAlert:Locator
    confirmAlert:Locator
    promptAlert:Locator
    iFrame: Locator
    constructor(page:Page){
        this.page=page
        this.stdAlert=page.locator('[id="alertButton"]')
        this.confirmAlert=page.locator('[id="confirmButton"]')
        this.promptAlert=page.locator('[id="promtButton"]')
        this.iFrame=page.frameLocator('[title="Rich Text Area"]').locator('html')
    }
    public async alertHandling(){
       //adding listener - sync 
       this.page.once('dialog',async dialog => {
        await dialog.accept()
     
       })
       await this.stdAlert.click()
 
           this.page.once('dialog',async dialog => {
        await dialog.dismiss()
             
       })
       await this.confirmAlert.click()

        this.page.once('dialog',async dialog => {
        await dialog.accept("Hi")
             
       })
       await this.promptAlert.click()
    }
}
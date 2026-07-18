import {Locator, Page } from "@playwright/test";

export class Buttons{
    page:Page
    doubleClick:Locator
    rightClick:Locator
    click1:Locator
    constructor(page:Page){
        this.page=page
        this.doubleClick=page.locator('[id="doubleClickBtn"]')
        this.rightClick=page.locator('[id="rightClickBtn"]')
        this.click1=page.getByRole('button', { name: 'Click Me', exact: true})

    }
    public async clicks(){
        await this.doubleClick.dblclick()
        await this.click1.click()
        await this.click1.click({clickCount:4})
        await this.rightClick.click({button:"right"})
        


    }
}
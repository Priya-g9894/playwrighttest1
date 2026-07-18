import { Locator, Page } from "playwright/test";

export class Mouseover{
    page:Page
clickMe:Locator
linkButton:Locator
    constructor(page:Page){
        this.page=page
        this.clickMe=page.locator('[title="Click me"]')
    this.linkButton=page.locator('[title="Link Button"]')

    }

}
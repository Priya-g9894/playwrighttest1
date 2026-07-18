import { Locator, Page } from "playwright/test";

export class AllProductsPage{
    page:Page
product:Locator

    constructor(page:Page){
        this.page=page
        this.product=page.locator('[class="product-productMetaInfo"]')
    
    }
public async selectProduct(index:number){
    const newPagePromise = this.page.waitForEvent('popup') //listener
    await this.product.nth(index).click()
    const newPage = await newPagePromise
    return newPage
}
}
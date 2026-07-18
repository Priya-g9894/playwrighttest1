import{Locator, Page} from '@playwright/test'
export class MyntraProductsPage{
page:Page
products:Locator
firstProduct:Locator
constructor(page:Page){
    this.page=page
    this.products = page.locator('.product-base'); //doubt
    this.firstProduct = page.locator('[class="product-productMetaInfo"]')
    }

    async verifyProductListingDisplayed() {
        await this.products.first().waitFor({ state: 'visible' });
    }

    async productSelection(index:number){
        const newPagePromise = this.page.waitForEvent('popup'); //starts listening for a new browser tab/window.(listener) 
        await this.firstProduct.nth(index).click()
        const newPage = await newPagePromise // (typically used in Playwright when clicking an element opens a new tab/window (popup))
        return newPage
    }

}
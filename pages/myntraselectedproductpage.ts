import { Locator, Page } from "@playwright/test";
import { MyntraProductsPage } from "../pages/myntraproductspage"
export class MyntraSelectedProductPage{
    page:Page
    selectedProduct:Locator
    size:Locator
constructor(page:Page){
    this.page = page
    this.selectedProduct = page.locator('[class="pdp-pdp-container"]')
    this.size = page.locator('.size-buttons-size-button')
}
        async verifyProductSelectionDisplayed(){
        await this.selectedProduct.first().waitFor({state: 'visible'});
    }
    async sizeSelection(index:number){
         
        await this.size.nth(index).click()
        

    }
}
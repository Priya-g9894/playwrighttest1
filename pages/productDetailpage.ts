import { Locator, Page } from "playwright/test";

export class ProductDetailPage{
    page:Page
pincode:Locator

    constructor(page:Page){
        this.page=page
        this.pincode=page.locator('[name="pincode"]')
    }
public async enterPincode(pin:string){
    await this.pincode.fill(pin)
}

    }
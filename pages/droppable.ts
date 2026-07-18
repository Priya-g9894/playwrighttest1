import { Locator, Page } from "@playwright/test";

export class Droppable{
    page:Page
drag:Locator
drop:Locator
    constructor(page:Page){
        this.page=page
    this.drag=page.locator('[id="draggable"]')
    this.drop=page.locator('[id="simpleDropContainer"] [id="droppable"]')
    }
     public async dragAndDrop(){
        await this.page.pause()
        await this.drag.dragTo(this.drop)

    }
}
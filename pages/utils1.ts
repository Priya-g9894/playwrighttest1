import{chromium, Page} from "@playwright/test";
export class Utils1{
    page:Page
    constructor(page:Page){
        this.page=page

    }
    public async urlLaunch(url:string){
        await this.page.goto(url)
    }
    
}
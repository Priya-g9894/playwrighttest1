import { Locator, Page } from "playwright/test";

export class Loginpage{
    page:Page
    username:Locator
    password:Locator
    login:Locator
    constructor(page:Page){
     this.page=page 
     this.username=page.locator('[id="user-name"]')
     this.password=page.locator('[id="password"]')
    this.login=page.locator('[id="login-button"]')
    }
}
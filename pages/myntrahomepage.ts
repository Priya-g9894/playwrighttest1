import{Locator,Page} from "playwright/test";
export class MyntraHomePage{
    page:Page
    kidsMenu:Locator
    tshirt:Locator
  constructor(page:Page){
  this.page=page
  this.kidsMenu=page.locator('[id="desktop-header-cnt"]').getByRole('link', { name: 'Kids', exact: true })
  this.tshirt=page.getByRole('link', { name: 'T-Shirts', exact: true })
  }
  public async clicksOnHover(){
    await this.kidsMenu.hover()
  }
  public async clickTshirt(){
    await this.tshirt.click()
  }
}
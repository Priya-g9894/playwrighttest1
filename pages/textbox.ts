import { Locator, Page } from "@playwright/test";

export class Textbox{
   page:Page
    fullName:Locator
    email:Locator
    currentAddress:Locator
    permanentAddress:Locator
    submit:Locator
    constructor(page:Page){
      this.page=page
      this.fullName=page.locator('[id="userName"]')
      this.email=page.locator('[id="userEmail"]')
      this.currentAddress=page.locator('[id="currentAddress"]')
      this.permanentAddress=page.locator('[id="permanentAddress"]')
      this.submit=page.locator('[id="submit"]')

    }
    public async enteringInputs(fullName:string, email:string, currentAddress:string, permanentAddress:string){
      await this.fullName.fill(fullName)
      await this.email.fill(email)
      await this.currentAddress.fill(currentAddress)
      await this.permanentAddress.fill(permanentAddress)
      await this.permanentAddress.clear()
      await this.currentAddress.click()
      await this.currentAddress.press("Control+A")
      await this.currentAddress.press("Control+C")
      await this.permanentAddress.click()
      await this.page.pause()
      await this.permanentAddress.press("Control+V")
      let values = await this.permanentAddress.inputValue()
      console.log(values)
    }
}
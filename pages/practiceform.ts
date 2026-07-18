import { Locator, Page } from "playwright/test";

export class Practiceform{
    page:Page
    firstName:Locator
    lastName:Locator
    email:Locator
    gender:Locator
    mobile:Locator
    dateOfBirth:Locator
    subjects:Locator
    hobbies:Locator
    picture:Locator
    currentAddress:Locator
    state:Locator
    NCR:Locator
    UP:Locator
    haryana:Locator
    rajasthan:Locator
    city:Locator
    jaiselmar:Locator
    jaipur:Locator
    agra:Locator
    lucknow:Locator
    merrut:Locator
    karnal:Locator
    paniput:Locator
    delhi:Locator
    gurugram:Locator
    noida:Locator
    submit:Locator
    constructor(page:Page){
     this.page=page 
     this.firstName=page.locator('[id="firstName"]')
     this.lastName=page.locator('[id="lastName"]')
     this.email=page.locator('[id="userEmail"]')
     this.gender=page.locator('[id="genterWrapper"] [name="gender"][value="Male"]')
     this.mobile=page.locator('[id="userNumber"]')
     this.dateOfBirth=page.locator('[id="dateOfBirthInput"]')
     this.subjects=page.locator('[class="subjects-auto-complete__input-container css-19bb58m"]')
     this.hobbies=page.getByRole('checkbox', { name: 'Sports' })
     this.hobbies=page.getByRole('checkbox', { name: 'Reading' })
     this.hobbies=page.getByRole('checkbox', { name: 'Music' })
     this.picture=page.locator('[id="uploadPicture"]')
     this.currentAddress=page.locator('[id="currentAddress"]')
     this.state=page.locator('[id="react-select-3-placeholder"]') 
     this.NCR=page.getByRole('option', { name: 'NCR' })
     this.UP=page.getByRole('option', { name: 'Uttar Pradesh' })
     this.haryana=page.getByRole('option', { name: 'Haryana' })
     this.rajasthan=page.getByRole('option', { name: 'Rajasthan' })
     this.city=page.locator('[id="react-select-4-placeholder"]')
     this.jaiselmar=page.getByRole('option', { name: 'Jaiselmer' })
     this.jaipur=page.getByRole('option', { name: 'Jaipur' })
     this.agra=page.getByRole('option', { name: 'Agra' })
     this.lucknow=page.getByRole('option', { name: 'Lucknow' })
     this.merrut=page.getByRole('option', { name: 'Merrut' })
     this.karnal=page.getByRole('option', { name: 'Karnal' })
     this.paniput=page.getByRole('option', { name: 'Paniput' })
     this.delhi=page.getByRole('option', { name: 'Delhi' })
     this.gurugram=page.getByRole('option', { name: 'Gurugram' })
     this.noida=page.getByRole('option', { name: 'Noida' })  
     this.submit=page.locator('[id="submit"]')
    }
    public async handleDropdown(value:string){
        await this.email.selectOption(value)
    }
}
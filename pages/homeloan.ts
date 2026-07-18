import { Locator, Page } from "@playwright/test";

export class HomeLoan{
    page:Page
    applicationType:Locator
    dependants:Locator
    propertyType:Locator
    annualIncome:Locator
    otherIncome:Locator
    monthlyExpenses:Locator
    monthlyHomeLoanRepayments:Locator
    otherLoanRepayments:Locator
    monthlyCommitments:Locator
    creditCardLimits:Locator
    borrowingEstimate:Locator
    startOver:Locator
    
    constructor(page:Page){
        this.page=page
        this.applicationType=page.locator('[id="application_type_single"]')
        this.dependants=page.locator('select')
        this.propertyType=page.getByText('Home to live in')
        this.annualIncome=page.getByRole('textbox', { name: 'Your annual income (before' })
        this.otherIncome=page.getByRole('textbox', { name: 'Your annual other income (' })
        this.monthlyExpenses=page.locator('[id="expenses"]')
        this.monthlyHomeLoanRepayments=page.locator('[id="homeloans"]')
        this.otherLoanRepayments=page.locator('[id="otherloans"]')
        this.monthlyCommitments=page.getByRole('textbox', { name: 'Other monthly commitments' })
        this.creditCardLimits=page.locator('[id="credit"]')
        this.borrowingEstimate=page.locator('[id="btnBorrowCalculater"]')
        this.startOver=page.getByRole('button', { name: 'Start over' })
    }
    public async fillForm(){
    await this.applicationType.check();
    await this.dependants.selectOption('0');
    await this.propertyType.check();

    await this.annualIncome.fill('100000');
    await this.otherIncome.fill('10000');
    //await this.page.waitForTimeout(2000)
    //await this.monthlyExpenses.waitFor({state: 'visible'})
    //await this.page.waitForLoadState('load')
    await this.monthlyExpenses.fill('2000');
    await this.monthlyHomeLoanRepayments.fill('0');
    await this.otherLoanRepayments.fill('100');
    await this.monthlyCommitments.fill('0');
    await this.creditCardLimits.fill('10000');  
    }
    async calculate() {
    await this.borrowingEstimate.click();
    await this.page.screenshot({path:'screenshot/pd.jpeg',fullPage:true})
    }
  
    async resetForm() {
    await this.startOver.click();
    }
    }

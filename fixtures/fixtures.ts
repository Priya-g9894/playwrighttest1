import {test as base} from '@playwright/test'
import { SDLoginPage } from '../pages/sdloginpage'
import { SDProductsPage } from '../pages/sdproductspage'
//customfixture declaration
type myFixture = {
    loginPage: SDLoginPage
    productsPage: SDProductsPage
    }
export const test = base.extend <myFixture>  ({
//fixture creation template
    loginPage: async({page},use) => {
    const loginPage = new SDLoginPage(page)
    await use(loginPage) //using the created fixture across all place
},
    productsPage: async({page},use) => {
    const productsPage = new SDProductsPage(page)
    await use(productsPage) //using the created fixture across all place
},

}) 
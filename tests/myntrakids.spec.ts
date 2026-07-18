import{defineConfig, expect, test} from "@playwright/test"
import { Utils1 } from "../pages/utils1"
import { MyntraHomePage } from "../pages/myntrahomepage"
import { MyntraProductsPage } from "../pages/myntraproductspage"
import { MyntraSelectedProductPage } from "../pages/myntraselectedproductpage"
//test.setTimeout(6000)
test('myntrasite', async({page})=>{
//test.setTimeout(10000)
    const utils1 = new Utils1(page)
await utils1.urlLaunch("https://www.myntra.com") //Open Myntra website
const myntrahomepage = new MyntraHomePage(page)

//Hover over “Kids” menu
await myntrahomepage.clicksOnHover() 

//Click on any subcategory (e.g., T-Shirts)
await myntrahomepage.clickTshirt() 

//verifying 'User is navigated to Kids category page'
await expect(page).toHaveURL('https://www.myntra.com/boy-tshirts')

//Product listing is displayed
const myntraproductspage = new MyntraProductsPage(page)
await myntraproductspage.verifyProductListingDisplayed()

//Click on the first product from the list
const myntraProductPage = await myntraproductspage.productSelection(0)

await myntraProductPage.waitForLoadState('domcontentloaded');

//Product detail page opens
const myntraselectedproductpage = new MyntraSelectedProductPage(myntraProductPage)
await myntraselectedproductpage.verifyProductSelectionDisplayed()
await expect(myntraProductPage).toHaveURL(/https:\/\/www\.myntra\.com\/tshirts\//) //partial link verification - used regex method

//Select any available size
await myntraselectedproductpage.sizeSelection(5) //Size is selected successfully - how to verify the state

//
})




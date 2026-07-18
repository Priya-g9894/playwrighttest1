import{test} from "@playwright/test"
import { Utils } from "../pages/utils"
import { AllProductsPage } from "../pages/allproductspage"
import { ProductDetailPage } from "../pages/productDetailpage"
test("myn", async({page})=>{
const utils = new Utils(page)    
await utils.launchUrl("https://www.myntra.com/women-kurtas-kurtis-suits")
const allproductspage = new AllProductsPage(page)
const page1 = await allproductspage.selectProduct(1)
const page2 = await allproductspage.selectProduct(2)
await page.pause()
const productDetailpage = new ProductDetailPage(page1)
await page1.pause()
const productDetailpage1 = new ProductDetailPage(page2)
await page2.pause()
await productDetailpage.enterPincode("641234")
await productDetailpage1.enterPincode("123647")
})
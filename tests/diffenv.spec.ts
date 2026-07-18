import{test} from "@playwright/test"
import { Utils } from "../pages/utils"

test("myn", async({page})=>{
const utils = new Utils(page)    
await utils.launchUrl("/")

})
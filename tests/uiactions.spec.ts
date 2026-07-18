import{test} from "@playwright/test"
import { Buttons } from "../pages/buttons"
import { Textbox } from "../pages/textbox"
import { Utils } from "../pages/utils"
import { UploadDownload } from "../pages/uploaddownload"
import { Droppable } from "../pages/droppable"
test("actions", async({page})=>{
const buttons= new Buttons(page)
const utils=new Utils(page)
await utils.launchUrl("https://demoqa.com/buttons")
await buttons.clicks()
await page.pause()
})

test("@Priyaaaa @Sanity enteringValues", async({page})=>{
const textbox= new Textbox(page)
const utils=new Utils(page)
await utils.launchUrl("https://demoqa.com/text-box")
await textbox.enteringInputs("Priya","priya@gmail.com","coimbatore","palakkad")
})

test("fileUploading", async({page})=>{
const upload= new UploadDownload(page)
const utils=new Utils(page)
await utils.launchUrl("https://demoqa.com/upload-download")
await upload.uploadFileAction("pages/buttons.ts")
await upload.downloadAction()

})

test("dragedAndDropped", async({page})=>{
const droppable= new Droppable(page)
const utils=new Utils(page)
await utils.launchUrl("https://demoqa.com/droppable")
await droppable.dragAndDrop()
await page.pause()
})
import { Locator, Page } from "@playwright/test"
//import * as path from "path";
//import { fileURLToPath } from"url";
 
export class UploadDownload{
    page:Page
    download:Locator
    uploadFile:Locator
    constructor(page:Page){
        this.page=page      
        this.download=page.locator('[id="downloadButton"]')
        this.uploadFile=page.locator('[id="uploadFile"]')
    }
    public async uploadFileAction(filePath:string){
        await this.uploadFile.setInputFiles(filePath)

    }
    public async downloadAction(){
        const downloadPromise = this.page.waitForEvent('download')
        await this.download.click()
        const download = await downloadPromise
       // const downloadPath = path.join(__dirname,"downloaded.jpeg")
      // const__filename=fileURLToPath(import.meta.url);
//const__dirname=path.dirname(__filename);
await download.saveAs("downloads/PD.jpeg")
    }
}
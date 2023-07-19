import { test } from "@playwright/test";

//video min 3.14


test("Download files", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "like, share, comment and subs");
    await page.click("#create");
  //await page.click("#link-to-download"); 
//where to download ?
  
  //array consept

  
  const download = await Promise.all([
    page.waitForEvent("download"),
    await page.click("#link-to-download") 
  ])
  
  //const path = await download[0].path();
  //console.log(path);

  //oder

  /*
const [download] = await Promise.all([
    page.waitForEvent("download"),
    await page.click("#link-to-download") 
  ])
  */

 // const path = await download.path();
 // console.log(path);

  //downloaded files will be deleted after browser closed, for taht reason comment out the lines above

const fileName = download[0].suggestedFilename()
await download[0].saveAs(fileName)

})

//after that you can see lambdainfo.txt file in plywright folder

/////////////////upload files video min. 3.25
//make a new folder "uploaditems"

/*
test("Upload files", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    //do not click;
    await page.setInputFiles("input[type='file']",
    ["uploadItems/apple.png", "uploadItems/mango.png"]);

})
*/

//how to choose file other way , video min 3.30

test.only("Upload files other way", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = await uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(
        ["uploadItems/apple.png", 
            "uploadItems/mango.png"]
            );
  
   await page.waitForTimeout(3000);
})

//there is another way to download files to a target ; 
//page.on('download', download => download.path().then(console.log));
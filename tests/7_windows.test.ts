//window & tabs handling
//video min 2.26

import {expect, test} from "@playwright/test";


test("interact with frames", async({page}) => {

    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();  //array
    console.log("No. of Frames = " + allFrames.length)
//interact mit page
    const myFrame = page.frame("firstFr");    //mit dem Name
    await myFrame?.fill("input[name='fname']","kouschik");  //hier bedeutet ?, if myFrame != 0
    await myFrame?.fill("input[name='lname']","chatter"); 

    expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("chatter");
    await page.waitForTimeout(3000);
})

//video min 2.20
test("frame locater", async({page}) => {

    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();  
    console.log("No. of Frames = " + allFrames.length)
//interact mit frame
    const frame = page.frameLocator("#firstFr")    //mit Id
    await frame.locator("input[name='fname']").fill("kouschik");
    await frame.locator("input[name='lname']").fill("chatter");

    //innerFrame
    const innerFrame = page.frameLocator("iframe[src='innerFrame']");
    innerFrame.locator("input[name='email']").fill("koschik@gmail.com")
   
    await page.waitForTimeout(3000);
})







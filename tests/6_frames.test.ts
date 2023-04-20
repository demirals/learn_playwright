import {expect, test} from "@playwright/test";


test("interact with frames", async({page}) => {

    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();  //array
    console.log("No. of Frames = " + allFrames.length)


})
//02:1246nnnggg
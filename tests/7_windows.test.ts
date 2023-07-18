//window & tabs handling
//video min 2.26

import {expect, test} from "@playwright/test";


test("interact with tabs", async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    console.log(page.url());

    const [newWindow] = await Promise.all([            //array
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);

    console.log(newWindow.url());
    //newWindow.fill("","");   usw...
})


test("interact with multiple tabs", async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    
    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")                 //id
    ]);

    await page.waitForLoadState();                 //wait till loading all pages

    const pages = multiPage.context().pages();
    console.log('No. of Tabs ' + pages.length);
    
    //to print all urls;    
    pages.forEach(tab => {
        console.log(tab.url());
    })
    
})

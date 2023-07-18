//window & tabs handling
//video min 2.26

import {expect, test, Page} from "@playwright/test";


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

    //interacting with pages alone; 
            //await pages[1].fill("", "");
    //but there is another way to do it >> for loop. to find the right page   //video min 2.38
    
    let facebookPage: Page;              //Page 
    for (let index = 0; index < pages.length; index++) {
                const url = pages[index].url()
                if (url == "https://www.facebook.com/lambdatest/") {
                    facebookPage = pages[index];
                }
    }

    const text = await facebookPage.textContent("//h1")             //compile error, that is not problem. 
    console.log(text)
    
})

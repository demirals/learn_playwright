//video min 1.27
//javascript alerts
//müssen zuerst js listener nutzen, danach klicken

import {expect, test} from "@playwright/test";

test("handling alerts - javascript alert box", async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

page.on("dialog", async (alert) => {                //js listener
    const text = alert.message();
    console.log(text);
    await alert.accept();
})
    await page.locator("button:has-text('Click me')").nth(0).click(); 
    //multiple elements gefunden >> strict mode violation

})

//video min. 1.37
test("handling alerts - js confirm box", async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);
    await alert.dismiss();    //dismiss
})
    await page.locator("button:has-text('Click me')").nth(1).click();
    expect(page.locator("id=confirm-demo")).toContainText("Cancel!");            //to contain text
    
})


//video min 1.40
test("handling alerts - js prompt", async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

page.on("dialog", async (alert) => {
    const text = alert.defaultValue();     //pass auf defaultValue, das war "message" in andere Beispielen
    console.log(text);
    await alert.accept("selo");
})
    await page.locator("button:has-text('Click me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText("'selo'");
})

//video min 1.43
//Bootstrap Modal alert, we can locate it 
test("Bootstrap Modal alert", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.click("(//button[text()='Launch Modal'])[1]");
    await page.click("(//button[text()='Save Changes'])[1]")
})

import {expect, test} from "@playwright/test";

test("handling alerts - alert box", async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

page.on("dialog", async (alert) => {                //bu kisim önce geliyor
    const text = alert.message();
    console.log(text);
    await alert.accept();
})
    await page.locator("button:has-text('Click me')").nth(0).click();

})


test("handling alerts - confirm box", async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);
    await alert.dismiss();
})
    await page.locator("button:has-text('Click me')").nth(1).click();
    expect(page.locator("id=confirm-demo")).toContainText("Cancel!");            //to contain text
    
})



test("handling alerts - prompt", async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

page.on("dialog", async (alert) => {
    const text = alert.defaultValue();     //dikkat
    console.log(text);
    await alert.accept("selo");
})
    await page.locator("button:has-text('Click me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText("'selo'");
})

test("Modal alert", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.click("(//button[text()='Launch Modal'])[1]");
    await page.click("(//button[text()='Save Changes'])[1]")
})

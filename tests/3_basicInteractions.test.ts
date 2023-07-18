import {expect, test} from "@playwright/test";
//video tutorial min. 60.00
//execute specific test with "test.only(...)"
//commentieren multi lines  >>  shift + alt + a
//oder    test.only("checkbox", async ({page}) => {

test("interactions with input", async ({ page}) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageinput = page.locator("(//input[@id='user-message'])[1]");    //letXpath ist verwendet
    await messageinput.scrollIntoViewIfNeeded(); //unsichtbare Objekte >> auser fenster Objekte
    console.log(await messageinput.getAttribute("placeholder"));
    expect(messageinput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log('Before entering data' + await messageinput.inputValue());
    await messageinput.type("Hi Kiro");
    console.log('After entering data' + await messageinput.inputValue());
})

//video 1.10
test("sum", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator("#sum1")
    const sum2input = page.locator("#sum2")
    
    const getValuesBtn = page.locator("(//button[@type='button'])[2]")
    let num1 = 121;
    let num2 = 546
    await sum1input.fill("" + num1);   //löscht existierte value, überschreibt
    await sum2input.type("" + num2);   //hinzufügt neue Text nach alte text
    await getValuesBtn.click();
    const result = page.locator("#addmessage")
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult);

})

// video 1.20
test("checkbox", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox = await page.locator("id=isAgeSelected");  //manchmal "$"" ist genutzt für "locater"
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
})
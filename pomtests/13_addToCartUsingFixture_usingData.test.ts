//video min 4.47
import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/addToChart-test-data.json";

test.describe("POM Test Demo", async () => {                     
    
test("Register test_01 ", async({ page, baseURL, registerPage }) => {           //added registerPage         
    await page.goto(`${baseURL}route=account/register`);
    await registerPage.enterFirstName(data.firstname);
    await registerPage.enterLastName(data.lastname);
    await registerPage.enterEmail(data.email);               
    await registerPage.enterTelephone(data.telephone);
    await registerPage.enterPassword(data.password);
    await registerPage.enterConfirmPassword(data.password);
//    expect(registerPage.isSubscribeChecked()).toBeChecked();       //?? to BeChecked is unknown method   
    await registerPage.clickTermAndConditions();
    await registerPage.clickConinueToRegister();    
})

test("Login test_02", async ({ page, baseURL, loginPage}) => {
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.enterEmail(data.email);                   
    await loginPage.enterLoginPassword(data.password);         
    await loginPage.clickLoginBtn();                       
    expect(await page.title()).toBe("My Account");
} )

test("Add to cart_03", async ({ page, baseURL, loginPage, homePage, homeMenuPage }) => {
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.login(data.email, data.password);   
    await homePage.clickOnHomeMenu();
    await homeMenuPage.addFirstProductToTheCart();
    const isCartVisible = await homeMenuPage.isProductVisible();
    expect(isCartVisible).toBeVisible();
})
})



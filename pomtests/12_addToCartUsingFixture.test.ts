//video min 4.41
import { expect, test } from "../base/pomFixture";

const email = "Koushik255@mailinator.com";   //pass auf hier, global
const password = "Koushik@123";

test.describe("POM Test Demo", async () => {                     
    
test("Register test_01 ", async({ page, baseURL, registerPage }) => {           //added registerPage         
    await page.goto(`${baseURL}route=account/register`);
    await registerPage.enterFirstName("Koushik");
    await registerPage.enterLastName("Cheet");
    await registerPage.enterEmail(email);               
    await registerPage.enterTelephone("1234567890");
    await registerPage.enterPassword(password);
    await registerPage.enterConfirmPassword(password);
//    expect(registerPage.isSubscribeChecked()).toBeChecked();       //?? to BeChecked is unknown method   
    await registerPage.clickTermAndConditions();
    await registerPage.clickConinueToRegister();

})

test("Login test_02", async ({ page, baseURL, loginPage}) => {
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.enterEmail(email);                   
    await loginPage.enterLoginPassword(password);         
    await loginPage.clickLoginBtn();                       
    expect(await page.title()).toBe("My Account");
} )

test("Add to cart_03", async ({ page, baseURL, loginPage, homePage, homeMenuPage }) => {
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.login(email, password);   
    await homePage.clickOnHomeMenu();
    await homeMenuPage.addFirstProductToTheCart();
    const isCartVisible = await homeMenuPage.isProductVisible();
    expect(isCartVisible).toBeVisible();
})
})

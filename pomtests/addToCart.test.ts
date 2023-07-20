//video min 4.02

import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import HomeMenuPage from "../pages/homeMenuPage"
import HomePage from "../pages/homePage"


const email = "Koushik02@mailinator.com";   //pass auf hier, global
const password = "Koushik@123";

test("Register test_01 ", async({ page, baseURL }) => {

    const register = new RegisterPage(page);                    //page hier = kommt aus constructor
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Koushik");
    await register.enterLastName("Cheet");
    await register.enterEmail(email);               //ctrl + .  >> extract thr constant in module scope >> make it test level oben, not class level
    await register.enterTelephone("1234567890");
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);

    //expect(register.isSubscribeChecked()).toBeChecked();       //?? to BeChecked is unknown method
    
    await register.clickTermAndConditions();
    await register.clickConinueToRegister();

})

test.only("Login test_02", async ({ page, baseURL}) => {
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`)
    await login.enterEmail(email);
    await login.enterLoginPassword(password);
    await login.clickLoginBtn();
    expect(await page.title()).toBe("My Account");

} )
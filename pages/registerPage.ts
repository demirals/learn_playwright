import { Page } from "@playwright/test";

export default class RegisterPage{
//we are writing const. and functions for lacaters

constructor(public page: Page){ }

async enterFirstName(firstname: string){
    await this.page.locator("#input-firstname")
        .type(firstname);
}

async enterLastName(lastname: string){
    await this.page.locator("#input-lastname")
        .type(lastname);
}

async enterEmail(email: string){
    await this.page.locator("#input-email")
        .type(email);
}

async enterTelephone(phone: string){
    await this.page.locator("#input-telephone")
        .type(phone);
}

async enterPassword(password: string){
    await this.page.locator("#input-password")
        .type(password);
}

async enterConfirmPassword(password: string){
    await this.page.locator("#input-confirm")
        .type(password);
}

async isSubscribeChecked(){
    return await this.page.locator("#input-newsletter-no");            
        
}

async clickTermAndConditions(){
     
    await this.page.click("//label[@for='input-agree']")
        
}

async clickConinueToRegister(){
 //   await Promise.all([
 //       this.page.waitForNavigation({waitUntil: "networkidle"})  //deprecated
 //   ])
    await this.page.click("//input[@value='Continue']");
}
}
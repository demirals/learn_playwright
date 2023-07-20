import { Page } from "@playwright/test"

export default class HomePage{

//gibts keine Produkt in SpecialHot Menu, deswegen habe ich HomeMenu genommen

    constructor(public page: Page){    }

    async clickOnHomeMenu(){

        await Promise.all([

        this.page.waitForEvent("load"),  //instead of waitFornavigation I have used, but I m not sure
        this.page.click("//span[text()[normalize-space()='Home']]")
        ])
    }

}
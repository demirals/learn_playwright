import { Page } from "@playwright/test"

export default class HomePage{

//gibts keine Produkt in SpecialHot Menu, deswegen habe ich HomeMenu genommen

    constructor(public page: Page){    }

    async clickOnHomeMenu(){
        this.page.click("//span[text()[normalize-space()='Home']]")
    }

}
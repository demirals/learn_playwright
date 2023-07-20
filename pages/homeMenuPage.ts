import { Page } from "@playwright/test"

export default class homeMenuPage{


    constructor(public page: Page){    }

    async addFirstProductToTheCart(){
        await this.page.hover("(//div[@class='carousel-item active']//img)[2]", {
            strict: false
        });
        await this.page.click("(//i[@class='fas fa-shopping-cart'])[1]")
    }

    async isProductVisible(){
        const product = this.page.locator("//a[contains(.,'View Cart')]");
        await product.waitFor({state:"visible"})
        return product;
    }

}
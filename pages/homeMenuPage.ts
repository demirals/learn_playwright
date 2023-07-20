import { Page } from "@playwright/test"

export default class HomeMenuPage{


    constructor(public page: Page){    }

    async addFirstProductToTheCart(){
     //   await this.page.hover("(//img[contains(@class,'figure-img img-fluid')])[3]", {
     //       strict: false
     //   });
        await this.page.click("(//img[contains(@class,'figure-img img-fluid')])[3]");

        await this.page.hover("(//img[@class='lazy-load'])[1]", {
            strict: false
        });
        await this.page.click("(//button[@title='Add to Cart']//i)[1]");

        
    }

    async isProductVisible(){                                                      //is toast visible ?
        const product = this.page.locator("//a[contains(.,'View Cart')]");
        await product.waitFor({state:"visible"})
        return product;
    }

}
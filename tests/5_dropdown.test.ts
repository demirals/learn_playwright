import {_baseTest, test} from "@playwright/test"


test ("handling dropdown", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {

        //label: "Tuesday"   
        //value: "Friday"   
        index: 5

    })
    await page.waitForTimeout(3000);

    await page.selectOption("#multi-select", [
        {
        label: "Texas"
    }, {
        index: 2
    }, {
        value: "Washington"
    }])

})

test("Bootstrap dropdown", async({page}) =>{

    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.click("#country+span");
    await page.locator("ul#select2-country-results")
        .locator("li", {
            hasText: "India"
        }).click();    
    await page.waitForTimeout(3000);
})

//ayni testi funktion olarak yazdik asagida;

test.only("Bootstrap dropdown Func", async({page}) =>{

    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("South Africa");

    async function selectCountry(countryName) {   
    await page.click("#country+span");
    await page.locator("ul#select2-country-results")
        .locator("li", {
            hasText: countryName
        }).click();    

    }
})

//20:05
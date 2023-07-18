//video min 1.48

import {_baseTest, test} from "@playwright/test"

test ("handling dropdown", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        //können label "text" oder value wählen
        //label: "Tuesday"            
        //value: "Friday"   
        //oder index from starting 0
        index: 5
    })
    await page.waitForTimeout(3000);

    //video min 1.55, multi select mit array
    await page.selectOption("#multi-select", [
        {
        label: "Texas"
    }, {
        index: 2
    }, {
        value: "Washington"
    }])

})

//video min 1.57   
test("Bootstrap dropdown with searchbox", async({page}) =>{

    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.click("#country+span");

    //locating in a liste/table/inner elements
    await page.locator("ul#select2-country-results")
        .locator("li", {
            hasText: "India"
        }).click();    
    await page.waitForTimeout(3000);
})

//gleiche test als funktion geschrieben, multiple assertion;

test("Bootstrap dropdown Func", async({page}) =>{

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
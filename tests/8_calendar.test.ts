import { test } from "@playwright/test";
import moment from "moment";



test("Calendar demo using fill function", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "1994-04-12"
    await page.fill("id=birthday", date);
    await page.waitForTimeout(3000);

//malformed value error kann kommen. um zu vermeiden;
//im browser console : document.getElementById("birthday").value
//'2023-08-19'  >> das ist die richtige Format
})


test("Calendar demo", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
   
    await page.click("//input[@placeholder='Start date']");

    const mmYY = page.locator("(//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("(//th[@class='prev'])[1]");
    const next = page.locator("(//th[@class='next'])[1]");

    await prev.click();
    await page.click("//td[@class='day'][text()='5']");

    
    //assertion, wir wollen March 2023 gehen und einen Datum wählen
    let dateToSelect: string = "March 2023"

    while (await mmYY.textContent() != dateToSelect) {
        await prev.click();
        
    }

    await page.click("//td[@class='day'][text()='6']");
    await page.waitForTimeout(3000);
})

 //Das Thema MOMENT, nicht so einfach :((
    //package.json >> moment  
    //video  min 2.59
    //zuerst führt "npm install moment", danach "import moment from "moment""" >> ganz oben

test("Calendar demo using moment", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
   
    await salectDate(13, "November 2023");

 
//extracting this block to inner function, video min 3.07-3.13
    async function salectDate(date: number, dateToSelect: string) {
        await page.click("//input[@placeholder='Start date']");
 
        const mmYY = page.locator("(//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//th[@class='prev'])[1]");
        const next = page.locator("(//th[@class='next'])[1]");
    
        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();

        //** Moment definiert if the target date is before or after our aktual date, boolean value  

        console.log("this month ?" + thisMonth);

        while (await mmYY.textContent() != dateToSelect) {
            if (thisMonth) {
                await prev.click();
            }
            else {
                await next.click();
        }
      }
      await page.click(`//td[@class='day'][text()='${date}']`);        //pass auf zeichen
    }
})
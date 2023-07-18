//Video min 10.10
//newContext >> verhindert alte cookies, password usw auf nue Webpage
// ctrl + L >> clear terminal nach oben 

import { chromium, test, expect } from '@playwright/test';

test("login test demo", async () => {

  const browser = await chromium.launch({
      headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  //await page.click("text=Login");              oder für text >>
  await page.click("'Login'");
  //config Datei >> testMatch: ["tests/1_login.test.ts"],   dann
  //für execution >> npx playwright test
  await page.fill("input[id=input-email]", "koushik350@gmail.com");
  await page.fill("input[id=input-password]", "Pass123$");
  await page.click("//input[@value='Login']");
  await page.waitForTimeout(5000);
  
  //pass auf unten >> new context, öffnet neue unabhängiges Page
  const newContext = await browser.newContext();
  const newPage = await newContext.newPage();
  await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
  await newPage.waitForTimeout(5000);  
});

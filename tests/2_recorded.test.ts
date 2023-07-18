//Video min 34.10

//npx playwright codegen >> playwright inspector, copy die code from inspector
//Auf recorder Rechts oben kann man kein playwright wählen, das ist ein Fehler

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
//ab jetzt nutzt man fixture "page" >>     async ({ page })   und braucht man nicht mehr u.g. Zeilen;

/*const browser = await chromium.launch({
  headless: false
const context = await browser.newContext();
const page = await context.newPage(); */

  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('koushik350@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pass123$');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
 // await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/");
});


//44.27 de kaldim
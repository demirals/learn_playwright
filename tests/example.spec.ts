import { chromium, test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test("login test demo", async () => {

  const browser = await chromium.launch({
      headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  //await page.click("text=Login");
  await page.click("'Login'");
  await page.fill("input[id=input-email]", "koushik350@gmail.com");
  await page.fill("input[id=input-password]", "Pass123$");
  await page.click("//input[@value='Login']");

  await page.waitForTimeout(5000);
  //////////newContext >> bagimsiz sayfa acar ve cookies password vs.. tasimaz///////////////////
  const newContext = await browser.newContext();
  const newPage = await newContext.newPage();
  await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");

  await newPage.waitForTimeout(5000);
});

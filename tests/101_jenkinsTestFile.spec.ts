import { test, expect } from "@playwright/test";

test("Basic test for Jenkis", async({ page }) =>{

    await page.goto("https://playwright.dev");
    await page.locator("text=Get started").click();
    await expect(page).toHaveTitle(/Installation | Playwright/);
});
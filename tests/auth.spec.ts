import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
import dotenv from 'dotenv';

dotenv.config();
test.describe("Create Account Test", () => {

  test("valid login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.performLogin(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(page).toHaveURL(/main/);
  })
  test("invalid login shows error", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.performLogin("invalidUser", "invalidPass");
    const errorMessage = page.locator('.text-danger');
    await expect(errorMessage).toBeVisible();
  })
  test('login with empty fields shows validation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.performLogin("", "");
    const errorMessage = page.locator('.text-danger');
    await expect(errorMessage).toBeVisible();
  });
  test('logout after login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.performLogin(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(page).toHaveURL(/main/);
    await loginPage.performLogout();
    await expect(page).toHaveURL(/login/);
  })
})
import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
import { HomePage } from "../page/homePage";

test.describe("Testing Authentication", () => {
  test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

  test("valid login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.performLogin(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(homePage.menuLabelDropdown).toBeVisible();
  })
  test("invalid login shows error", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.performLogin("invalidUser", "invalidPass");
    await expect(loginPage.loginFailureMessage).toHaveText('Invalid username or password');
  })
  test('blank credentials show login failure', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.performLogin("", "");
    await expect(loginPage.loginFailureMessage).toHaveText('Invalid username or password');
  });
  test('logout after login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.performLogin(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(page).toHaveURL(/main/);
    const homePage = new HomePage(page);
    await homePage.performLogout();
    await expect(loginPage.loginForm).toBeVisible();
  })
})
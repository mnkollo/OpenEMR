import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
import { HomePage } from "../page/homePage";

test.describe("Smoke Test - Testing Authentication", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.goto();
  });

  test("valid login", async () => {
    await loginPage.performLogin(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(homePage.menuLabelDropdown).toBeVisible();
  });

  test("invalid login shows error", async () => {
    await loginPage.performLogin("invalidUser", "invalidPass");
    await expect(loginPage.loginFailureMessage).toHaveText("Invalid username or password");
  });

  test("blank credentials show login failure", async () => {
    await loginPage.performLogin("", "");
    await expect(loginPage.loginFailureMessage).toHaveText("Invalid username or password");
  });

  test("logout after login", async () => {
    await loginPage.performLogin(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(homePage.menuLabelDropdown).toBeVisible();
    await homePage.performLogout();
    await expect(loginPage.loginForm).toBeVisible();
  });
});
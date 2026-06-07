import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
import { HomePage } from "../page/homePage";
import { PatientPage } from "../page/patientPage";
test.describe("Admin Test - Patient", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let patientPage: PatientPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.goto();
    await loginPage.performLogin("admin", "pass");
    await expect(homePage.menuLabelDropdown).toBeVisible();
  });

  test(" patients-verify who section", async ({ page }) => {
    patientPage = new PatientPage(page)
    await patientPage.addNewPatient()
  }); 
});

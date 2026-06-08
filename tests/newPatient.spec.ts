import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
import { HomePage } from "../page/homePage";
import { PatientPage } from "../page/patientPage";
import { buildPatientWhoData } from "../utils/fakerData";

test.describe("Admin Test - Patient", () => {

  test.only(" patients- add new patient", async ({ page }) => {
    // Initialize page objects
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const patientPage = new PatientPage(page);

    // Initialzie test data
    const patientWhoData = buildPatientWhoData();

    await loginPage.goto();
    await loginPage.performLogin("admin", "pass");
    await expect(homePage.menuLabelDropdown).toBeVisible();

    await test.step("Navigate to New Patient Search", async () => {
      await homePage.selectPatientDropdown();
      await patientPage.selectNewSearchTab();
    });

    await test.step("Fill out Who Section of New Patient form", async () => {
      await patientPage.fillWhoSection(patientWhoData);
    });
  });
});

import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    readonly menuLabelDropdown: Locator;
    readonly logoutButton: Locator;
    readonly patientTab: Locator;

    constructor(page: Page){
        super(page);
        this.menuLabelDropdown = this.page.locator('#username')
        this.logoutButton = this.page.locator('.dropdown-item:has-text("Logout")')
        this.patientTab = this.page.locator('#mainMenu').locator(':text-is("Patient")')
    }
    
    async performLogout() {
    await this.menuLabelDropdown.click();
    await this.logoutButton.click();
  }

  async selectPatientDropdown() {
    await this.patientTab.click();
  }
}
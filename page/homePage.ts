import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    readonly menuLabelDropdown: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page){
        super(page);
        this.menuLabelDropdown = this.page.locator('#username')
        this.logoutButton = this.page.locator('.dropdown-item:has-text("Logout")')
    }
    
    async performLogout() {
    await this.menuLabelDropdown.click();
    await this.logoutButton.click();
  }
}
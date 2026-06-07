import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { HomePage } from "./homePage";

export class PatientPage extends BasePage {
    readonly menuLabelDropdown: Locator;

    constructor(page: Page){
        super(page);
        this.menuLabelDropdown = this.page.locator('#username')  
    }
    
    async addNewPatient() {
    const homePage = new HomePage(this.page)
    await homePage.patientTab.click();
  }
}
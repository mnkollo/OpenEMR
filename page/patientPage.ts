import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class PatientPage extends BasePage {
  readonly newSearchTab: Locator;
  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly suffixInput: Locator;
  readonly preferredName: Locator;
  readonly licenseIDInput: Locator;
  readonly externalIdInput: Locator;
  readonly socialSecurityNumberInput: Locator;

  constructor(page: Page) {
    super(page);
    const iframeLocator = this.page.frameLocator('iframe[name="pat"]');
    this.newSearchTab = this.page.getByText('New/Search');
    this.firstNameInput = iframeLocator.getByRole('textbox', { name: 'First Name', description: 'First Name', exact: true });
    this.middleNameInput = iframeLocator.locator('#form_mname');
    this.lastNameInput = iframeLocator.getByRole('textbox', { name: 'Last Name', description: 'Last Name', exact: true })
    this.suffixInput = iframeLocator.getByRole('textbox', { name: 'Name Suffix' });
    this.preferredName = iframeLocator.getByRole('textbox', { name: 'Patient preferred name or' });
    this.licenseIDInput = iframeLocator.getByRole('textbox', { name: 'Drivers License or State ID' });
    this.externalIdInput = iframeLocator.getByRole('textbox', { name: 'External identifier' });
    this.socialSecurityNumberInput = iframeLocator.getByRole('textbox', { name: 'Social Security Number' });
  }

  async selectNewSearchTab() {
    await this.newSearchTab.click();
  }

  async fillWhoSection(patientWhoData: any) {
    await this.firstNameInput.fill(patientWhoData.firstName);
    await this.middleNameInput.fill(patientWhoData.middleName);
    await this.lastNameInput.fill(patientWhoData.lastName);
    await this.suffixInput.fill(patientWhoData.suffix);
    await this.preferredName.fill(patientWhoData.preferredName);
    await this.licenseIDInput.fill(patientWhoData.licenseID);
    await this.externalIdInput.fill(patientWhoData.externalId);
    await this.socialSecurityNumberInput.fill(patientWhoData.socialSecurityNumber);
  }
}
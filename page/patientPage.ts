import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class PatientPage extends BasePage {
  readonly newSearchTab: Locator;
  readonly titleDropdown: Locator;
  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly suffixInput: Locator;
  readonly preferredName: Locator;
  readonly licenseIDInput: Locator;
  readonly externalIdInput: Locator;
  readonly birthSexDropdown: Locator;
  readonly dateOfBirthInput: Locator;
  readonly socialSecurityNumberInput: Locator;
  readonly billingNoteInput: Locator;
  readonly genderIdentityDropdown: Locator;
  readonly sexDropdown: Locator;
  readonly sexualOrientationDropdown: Locator;
  readonly pronounsDropdown: Locator;
  readonly birthFirstNameInput: Locator;
  readonly birthMiddleNameInput: Locator;
  readonly birthLastNameInput: Locator;

  constructor(page: Page) {
    super(page);
    const iframe = this.page.frameLocator('iframe[name="pat"]');
    this.newSearchTab = this.page.getByText('New/Search');
    this.titleDropdown = iframe.locator('#form_title');
    this.firstNameInput = iframe.getByRole('textbox', { name: 'First Name', description: 'First Name', exact: true });
    this.middleNameInput = iframe.locator('#form_mname');
    this.lastNameInput = iframe.getByRole('textbox', { name: 'Last Name', description: 'Last Name', exact: true })
    this.suffixInput = iframe.getByRole('textbox', { name: 'Name Suffix' });
    this.preferredName = iframe.getByRole('textbox', { name: 'Patient preferred name or' });
    this.licenseIDInput = iframe.getByRole('textbox', { name: 'Drivers License or State ID' });
    this.externalIdInput = iframe.getByRole('textbox', { name: 'External identifier' });
    this.birthSexDropdown = iframe.locator('#form_sex')
    this.dateOfBirthInput = iframe.getByRole('textbox', { name: 'Date of Birth' });
    this.socialSecurityNumberInput = iframe.getByRole('textbox', { name: 'Social Security Number' });
    this.billingNoteInput = iframe.getByRole('textbox', { name: 'Patient Level Billing Note (' });
    this.genderIdentityDropdown = iframe.locator('#form_gender_identity');
    this.sexDropdown = iframe.locator('#form_sex_identified');
    this.sexualOrientationDropdown = iframe.locator('#form_sexual_orientation');
    this.socialSecurityNumberInput = iframe.getByRole('textbox', { name: 'Social Security Number' });
    this.pronounsDropdown = iframe.locator('#form_pronoun');
    this.birthFirstNameInput = iframe.getByRole('textbox', { name: 'Birth First Name' });
    this.birthMiddleNameInput = iframe.locator('#form_birth_mname');
    this.birthLastNameInput = iframe.getByRole('textbox', { name: 'Birth Last Name' });
  }

  async selectNewSearchTab() {
    await this.newSearchTab.click();
  }

  async fillWhoSection(patientWhoData: any) {
    await this.titleDropdown.selectOption(patientWhoData.title);
    await this.firstNameInput.fill(patientWhoData.firstName);
    await this.middleNameInput.fill(patientWhoData.middleName);
    await this.lastNameInput.fill(patientWhoData.lastName);
    await this.suffixInput.fill(patientWhoData.suffix);
    await this.preferredName.fill(patientWhoData.preferredName);
    await this.externalIdInput.fill(patientWhoData.externalId);
    await this.birthSexDropdown.selectOption(patientWhoData.birthSex);
    await this.licenseIDInput.fill(patientWhoData.licenseID);
    await this.dateOfBirthInput.fill(patientWhoData.dob);
    await this.socialSecurityNumberInput.fill(patientWhoData.socialSecurityNumber);
    await this.billingNoteInput.fill(patientWhoData.billingNote);
    await this.genderIdentityDropdown.selectOption(patientWhoData.genderIdentity);
    await this.sexDropdown.selectOption(patientWhoData.sex);
    await this.sexualOrientationDropdown.selectOption(patientWhoData.sexualOrientation);
    await this.pronounsDropdown.selectOption(patientWhoData.pronouns);
    await this.birthFirstNameInput.fill(patientWhoData.birthFirstName);
    await this.birthMiddleNameInput.fill(patientWhoData.birthMiddleName);
    await this.birthLastNameInput.fill(patientWhoData.birthLastName);
  }
}
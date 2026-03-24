
import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly menuLabelDropdown: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = this.page.locator('#authUser')
    this.passwordInput = this.page.locator('#clearPass')
    this.loginButton = this.page.locator('#login-button')
    this.menuLabelDropdown = this.page.locator('#username')
    this.logoutButton = this.page.locator('.dropdown-item:has-text("Logout")')
  }
  async goto() {
    await this.page.goto(process.env.BASE_URL!);
  }
  async performLogin(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  async performLogout() {
    await this.menuLabelDropdown.click();
    await this.logoutButton.click();
  }
}
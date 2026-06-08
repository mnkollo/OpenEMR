
import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';


export class LoginPage extends BasePage {

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginForm: Locator;
  readonly loginFailureMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = this.page.locator('#authUser')
    this.passwordInput = this.page.locator('#clearPass')
    this.loginButton = this.page.locator('#login-button')
    this.loginForm = this.page.locator('#login_form')
    this.loginFailureMessage = this.page.locator('.login-failure p')

  }
  async goto() {
    await this.page.goto(process.env.BASE_URL!);
  }
  async performLogin(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
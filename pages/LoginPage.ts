import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  username = this.page.getByPlaceholder('Username');
  password = this.page.getByPlaceholder('Password');
  loginBtn = this.page.getByRole('button', { name: 'Login' });
  errorMessage = this.page.locator('.oxd-alert-content-text');

  async goto() {
    await this.page.goto('web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}

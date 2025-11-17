import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class AddEmployeePage {
  constructor(private page: Page) {}

  firstName = this.page.getByPlaceholder('First Name');
  lastName = this.page.getByPlaceholder('Last Name');
  saveBtn = this.page.getByRole('button', { name: 'Save' });
  personalDetailsHeader = this.page.getByRole('heading', { name: 'Personal Details' });

  async addNewEmployee(firstName: string, lastName: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.saveBtn.click();
  }

  async verifyEmployeeCreated() {
    await expect(this.personalDetailsHeader).toBeVisible();
  }
}

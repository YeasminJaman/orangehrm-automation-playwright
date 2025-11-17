import { Page } from '@playwright/test';

export class PIMPage {
  constructor(private page: Page) {}

  pimMenu = this.page.getByRole('link', { name: 'PIM' });
  addEmployeeBtn = this.page.getByRole('link', { name: 'Add Employee' });

  async goToAddEmployee() {
    await this.pimMenu.click();
    await this.addEmployeeBtn.click();
  }
}

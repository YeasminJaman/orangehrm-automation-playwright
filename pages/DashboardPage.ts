import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  dashboardHeader = this.page.getByRole('heading', { name: 'Dashboard' });
  profileMenu = this.page.locator('span.oxd-userdropdown-tab'); 
  logoutBtn = this.page.getByRole('menuitem', { name: 'Logout' });

  async isDashboardVisible() {
    await this.dashboardHeader.waitFor({ state: 'visible' });
  }

  async logout() {
    await this.profileMenu.click();
    await this.logoutBtn.click();
  }
}


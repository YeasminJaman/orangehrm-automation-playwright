import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { credentials } from '../utils/testData';

test('Successful Login', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  // Go to login page
  await login.goto();
  // Enter username and password + click login
  await login.login(credentials.validUser.username, credentials.validUser.password);
  // Check Dashboard is displayed
  await dashboard.isDashboardVisible();
  await expect(page).toHaveURL(/dashboard/);
});

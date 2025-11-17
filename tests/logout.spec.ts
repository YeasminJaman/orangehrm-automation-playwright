import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { credentials } from '../utils/testData';

test('Logout Functionality', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  // Login first
  await login.goto();
  await login.login(credentials.validUser.username, credentials.validUser.password);
  await dashboard.isDashboardVisible();
  // Click user dropdown → Logout
  await dashboard.logout();
  // Verify you return to login page
  await expect(page).toHaveURL(/auth\/login/);
});

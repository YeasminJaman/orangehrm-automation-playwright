import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { credentials } from '../utils/testData';

test('Invalid Login Shows Error Message', async ({ page }) => {
  const login = new LoginPage(page);
  // Go to login page
  await login.goto();
  // Enter wrong username/password + click login
  await login.login(credentials.invalidUser.username, credentials.invalidUser.password);
  // Verify error message appears
  await expect(login.errorMessage).toContainText('Invalid');
});

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PIMPage } from '../pages/PIMPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { credentials } from '../utils/testData';

test('Add New Employee', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const pim = new PIMPage(page);
  const addEmp = new AddEmployeePage(page);
  // Login first
  await login.goto();
  await login.login(credentials.validUser.username, credentials.validUser.password);
  await dashboard.isDashboardVisible();
  // Go to PIM → Add Employee
  await pim.goToAddEmployee();
  // Fill employee details
  await addEmp.addNewEmployee('Yeasmin', 'Tester');
  // Verify employee created
  await addEmp.verifyEmployeeCreated();
});

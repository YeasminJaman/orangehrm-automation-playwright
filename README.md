# OrangeHRM Automation – Playwright + TypeScript

##  Tech Stack
- playwright
- TypeScript
- Page Object Model (POM)
- HTML Reporter

This project contains 4 critical automated UI tests for OrangeHRM:

1. Successful Login
2. Invalid Login
3. Add New Employee
4. Logout

##  Project Structure

```
OrangeHRM/
│── pages/                     # Page Object Models
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── PIMPage.ts
│   ├── AddEmployeePage.ts
│
│── tests/                     # Test Specifications
│   ├── login.spec.ts
│   ├── invalidLogin.spec.ts
│   ├── addEmployee.spec.ts
│   ├── logout.spec.ts
│
│── utils/                     # Utility / Test Data
│   └── testData.ts
│
│── playwright.config.ts       # Playwright configuration
│── package.json
│── README.md
```

## Run Tests
npm install  
npx playwright test  

## View Report
npx playwright show-report


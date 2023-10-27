const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/pages/loginPage');
const { validCredentials, invalidCredentials } = require('../config/config');
const { setupBrowser, teardownBrowser } = require('../utils/setupTeardown');

let browser;
let context;
let page;
let loginPage;

test.beforeEach(async () => {
  ({ browser, context } = await setupBrowser());
  page = await context.newPage();
  loginPage = new LoginPage(page);
});

test.afterEach(async () => {
  await teardownBrowser(browser);
});

test.describe('Login Tests', () => {
  test('Successful login', async () => {
    await loginPage.navigate();
    await loginPage.login(validCredentials.username, validCredentials.password);
    const successMessage = await loginPage.validateLoginSuccess();
    expect(successMessage).toBe('Login Successful');
  });

  test('Failed login', async () => {
    await loginPage.navigate();
    await loginPage.login(invalidCredentials.username, invalidCredentials.password);
    const errorMessage = await loginPage.validateLoginFailure();
    expect(errorMessage).toBe('Error de inicio de sesión');
  });
});
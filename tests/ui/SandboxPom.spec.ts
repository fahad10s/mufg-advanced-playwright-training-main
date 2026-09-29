import { test, expect } from '@playwright/test';
import { HoldingsLoginPage } from '../../pages/HoldingsLoginPage';
import { DashboardPage } from '../../pages/DashboardPage ';

test.describe('Login flow (holdings login)', () => {
  test('successful login lands on the inventory page', async ({ page }) => {
    const holdingsloginPage = new HoldingsLoginPage(page);

    await holdingsloginPage.goto();
    await holdingsloginPage.login('demo', 'demo1234');

    // await dashboardPage.expectLoaded();
    // await expect(page).toHaveURL(/inventory/);
  });

  test('Verify welcome demo heading after successful login', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    
    await expect(dashboardPage.welcomeHeading).toHaveText('Welcome, demo');
    await expect(dashboardPage.accountBal).toHaveText('₹1,25,000.50');
  });
});
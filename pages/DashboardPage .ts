import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly welcomeHeading: Locator;
  readonly accountBal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeHeading = page.getByRole('heading', { name: /^welcome, demo$/i });
    this.accountBal = page.locator('balance-value');
  }
  
}
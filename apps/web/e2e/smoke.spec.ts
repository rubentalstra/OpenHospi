import { test, expect } from '@playwright/test';

test('homepage loads and shows OpenHospi', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/OpenHospi/i);
  await expect(page.locator('body')).toContainText('OpenHospi');
});

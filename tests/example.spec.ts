import { test, expect } from '@playwright/test';

test('Check Google title', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle(/Google/);
});

test('Search Playwright on Google', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // 検索ボックスを取得（textarea[name="q"]）
  const searchBox = page.locator('textarea[name="q"]');
  await searchBox.fill('Playwright');

  // Enterキーで検索実行
  await page.keyboard.press('Enter');

  // 検索結果ページを確認
  await expect(page).toHaveURL(/search/);
  await expect(page.locator('body')).toContainText('Playwright');
});

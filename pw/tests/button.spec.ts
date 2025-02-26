import { test, expect } from '@playwright/test';

test.only('Button component in Storybook', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/example-button--primary');

  //   await page.waitForLoadState('networkidle');

  //   const button = page.locator('button');
  const spinner = await page.locator('[id="preview-loader"]');
  const button = await page.locator('button', {
    hasText: 'Button',
  });

  await expect(spinner).not.toBeVisible();
  await expect(button).toBeVisible();

  //   await page.getByTitle('Dismiss notification').click();

  await expect(button).toHaveText('Button');

  await page
    .locator('button', {
      hasText: 'Button',
    })
    .click();
  await page.getByText('Actions').click();

  console.log('button.isEnabled():  ', await button.isEnabled());

  //   const actionTextLabel = page
  //     .locator('[id="panel-tab-content"] span span')
  //     .nth(0);
  //   const actionText = await actionTextLabel.textContent();

  //   await expect(actionText).toBe('onClick');

  //   const clickPromise = page.waitForEvent('dialog');
  //   await button.click();
  //   const dialog = await clickPromise;
  //   expect(dialog.message()).toBe('Clicked!');
});

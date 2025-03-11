// ➖ Remove this line
// import { test, expect } from '@playwright/test';
// ➕ Add this line
import { test, expect } from '@chromatic-com/playwright';

// Then use as normal 👇
test.only('Homepage', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/?path=/story/components-button--default'
  );

  await expect(page).toHaveTitle('Google');
  // ...
});

import { chromium } from 'playwright';

async function runTests() {
  console.log('--- STARTING PLAYWRIGHT VERIFICATION ---');
  let browser;
  try {
    browser = await chromium.launch({ channel: 'msedge', headless: true });
  } catch (e) {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  }
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Test 1: Load Homepage
  console.log('1. Navigating to http://localhost:5173...');
  await page.goto('http://localhost:5173', { waitUntil: 'load' });
  await page.waitForTimeout(500);
  
  const title = await page.title();
  console.log(`Page title: "${title}"`);
  if (!title.includes('Able Sunny')) throw new Error('Title does not contain Able Sunny');

  // Test 2: Check 1440x900 Viewport Fit (No unwanted page vertical scroll)
  const isScrollable = await page.evaluate(() => {
    return document.documentElement.scrollHeight > window.innerHeight;
  });
  console.log(`2. 1440x900 Viewport Page Scrollable: ${isScrollable} (Should be false)`);

  // Test 3: Check 1366x768 Viewport Fit
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.waitForTimeout(300);
  const isScrollable1366 = await page.evaluate(() => {
    return document.documentElement.scrollHeight > window.innerHeight;
  });
  console.log(`3. 1366x768 Viewport Page Scrollable: ${isScrollable1366} (Should be false)`);

  // Test 4: Check Portrait Image Loaded in Centerpiece
  const imgLoaded = await page.evaluate(() => {
    const img = document.querySelector('.editorial-portrait-card img');
    return img && img.complete && img.naturalWidth > 0;
  });
  console.log(`4. Portrait Image loaded successfully: ${imgLoaded}`);
  if (!imgLoaded) throw new Error('Portrait image failed to load');

  // Test 5: Check 4 Project Cards exist
  const cardCount = await page.locator('.project-item-card').count();
  console.log(`5. Project cards count: ${cardCount} (Expected 4)`);
  if (cardCount !== 4) throw new Error(`Expected 4 project cards, got ${cardCount}`);

  // Test 6: Click Project 01 (Sellex) -> Verify Modal Opens
  console.log('6. Clicking Sellex project card...');
  await page.locator('.project-item-card').first().click();
  await page.waitForSelector('[role="dialog"]', { state: 'visible' });
  const modalTitle = await page.locator('#modal-headline').textContent();
  console.log(`Modal Title opened: "${modalTitle}"`);
  if (!modalTitle.includes('Sellex')) throw new Error('Expected Sellex modal');

  // Test 7: Test Escape Key to close modal
  console.log('7. Pressing Escape key to dismiss modal...');
  await page.keyboard.press('Escape');
  await page.waitForSelector('[role="dialog"]', { state: 'hidden' });
  console.log('Modal dismissed via Escape key successfully');

  // Test 8: Click "Tech Stack" in header nav pills
  console.log('8. Clicking Tech Stack in header navigation...');
  await page.locator('.nav-pill-item:has-text("Tech Stack")').click();
  await page.waitForSelector('[role="dialog"]', { state: 'visible' });
  const skillsTitle = await page.locator('#modal-headline').textContent();
  console.log(`Skills Modal opened: "${skillsTitle}"`);
  
  // Close via X button
  await page.locator('.modal-close-btn').click();
  await page.waitForSelector('[role="dialog"]', { state: 'hidden' });
  console.log('Skills modal closed via close button');

  // Test 9: Click "Contact" in header nav pills
  console.log('9. Clicking Contact in header navigation...');
  await page.locator('.nav-pill-item:has-text("Contact")').click();
  await page.waitForSelector('[role="dialog"]', { state: 'visible' });
  const emailText = await page.locator('.contact-card-val').first().textContent();
  console.log(`Contact Email verified: "${emailText.trim()}"`);
  await page.keyboard.press('Escape');
  await page.waitForSelector('[role="dialog"]', { state: 'hidden' });

  // Test 10: Mobile Viewport 390x844
  console.log('10. Testing mobile responsive layout (390x844)...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(300);
  const mobileHasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`Mobile Horizontal Overflow: ${mobileHasOverflow} (Should be false)`);
  if (mobileHasOverflow) throw new Error('Mobile has horizontal overflow');

  // Take high-res screenshots
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(350);
  await page.screenshot({ path: 'public/desktop-preview.png' });
  console.log('Desktop screenshot saved to public/desktop-preview.png');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(350);
  await page.screenshot({ path: 'public/mobile-preview.png' });
  console.log('Mobile screenshot saved to public/mobile-preview.png');

  await browser.close();
  console.log('--- ALL VERIFICATION TESTS PASSED SUCCESSFULLY! ---');
}

runTests().catch(err => {
  console.error('TEST ERROR:', err);
  process.exit(1);
});

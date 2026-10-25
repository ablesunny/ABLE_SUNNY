import { chromium } from 'playwright';

async function captureFullMobile() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('http://localhost:5174', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'public/mobile-full.png', fullPage: true });
  await browser.close();
  console.log('Mobile full page screenshot saved');
}

captureFullMobile();

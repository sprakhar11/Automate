const puppeteer = require('puppeteer');

async function openAndClosePage(url) {
  while (true) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(url);

    // Wait for 10 seconds
    await page.waitForTimeout(3000);

    await browser.close();
  }
}

// Usage
const url = 'https://www.example.com';
openAndClosePage(url)
  .catch((error) => console.error('Error occurred:', error));
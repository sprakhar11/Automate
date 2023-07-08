const puppeteer = require('puppeteer');
require("dotenv").config();

// const browser = await puppeteer.launch({
//   agrs: [
//       "--disable-setuid-sandbox",
//       "--no-sandbox",
//       "--single-process",
//       "--no-zygote",
//   ],
//   executablePath:
//       process.env.NODE_ENV === "production"
//       ? process.env.PUPPETEER_EXECUTABLE_PATH
//       : puppeteer.executablePath(),}
// );

async function openAndClosePage(url) {
var count = 0;
  while (true) {
    const browser = await puppeteer.launch({
        headless:false}
    );
    const page = await browser.newPage();
    console.log("This is wild", ++count);
    // await page.goto(url);
    const pages = [];
    for (let i = 0; i < 2; i++) {
      const page = await browser.newPage();
      await page.goto(url);
      // await page.close();
      pages.push(page);
    }

    
    // Wait for 10 seconds
    await page.waitForTimeout(2000);
    
    for (const page of pages) {
      await page.close();
    }

    await browser.close();
  }
}

// Usage
const url = 'https://github.com/sprakhar11';
openAndClosePage(url)
  .catch((error) => console.error('Error occurred:', error));

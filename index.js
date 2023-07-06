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
        agrs: [
            "--disable-setuid-sandbox",
            "--no-sandbox",
        ],
        executablePath:
            process.env.NODE_ENV === "production"
            ? process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),}
    );
    const pages = [];
    for (let i = 0; i < numTabs; i++) {
      const page = await browser.newPage();
      await page.goto(url);
      pages.push(page);
    }

    await page.waitForTimeout(5000); // Wait for 2 seconds

    for (const page of pages) {
      await page.close();
    }

    await browser.close();
  }
}

// Usage
const url = 'https://github.com/sprakhar11';
const numTabs = 10;
openAndCloseTabs(url, numTabs)
  .catch((error) => console.error('Error occurred:', error)); 

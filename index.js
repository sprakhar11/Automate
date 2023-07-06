const puppeteer = require('puppeteer');
require("dotenv").config();



async function openAndClosePage(url) {
var count = 0;
  while (true) {
    const browser = await puppeteer.launch({
        agrs: [
            "--disable-setuid-sandbox",
            "--no-sandbox",
            "--single-process",
            "--no-zygote",
        ],
        executablePath:
            process.env.NODE_ENV === "production"
            ? process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),}
    );
    const page = await browser.newPage();
    console.log("This is wild", ++count);
    await page.goto(url);

    // Wait for 10 seconds
    await page.waitForTimeout(2000);

    await browser.close();
  }
}

// Usage
const url = 'https://github.com/sprakhar11';
openAndClosePage(url)
  .catch((error) => console.error('Error occurred:', error));

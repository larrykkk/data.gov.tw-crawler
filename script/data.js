const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ headless: true, devtools: true });
  const page = await browser.newPage();
  await page.goto(
    "https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP048/106"
  );

  innerText = await page.evaluate(() => {
    return JSON.parse(document.querySelector("body").innerText);
  });
  console.log("innerText now contains the JSON");
  console.log(innerText);

  fs.writeFileSync("result.json", JSON.stringify(innerText));
  await browser.close();
})();

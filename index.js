const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://es.wikipedia.org/wiki/Orthocoronavirinae');
  await page.screenshot({ path: 'wiki.png' })
  //   await  browser.waitForTarget(() => false)

  const result = await page.evaluate(() => {

    let hedingFromWiki = document.querySelectorAll(".mw-headline");
    const headingList = [...hedingFromWiki];
    return headingList.map(h => h.innerText);
});

console.log(result)

  
  await browser.close();
})();
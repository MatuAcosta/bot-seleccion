const puppeteer = require('puppeteer');
const cron = require ('node-cron');
const bot = async () => {

    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.deportick.com/');
    const element = await page.waitForSelector('.home-events > .row > .col-md-12:nth-child(1)' );
    await element.click();
    await element.dispose();
    console.log('estoy aca');
    console.log(element); 

}

cron.schedule('*/10 * * * * *' , () => {
    console.log('running bot');
    bot();
})


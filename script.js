const puppeteer = require('puppeteer');
const cron = require ('node-cron');
const bot = async () => {

    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.deportick.com/');
    const element = await page.waitForSelector('.home-events > .row > .col-md-12:nth-child(2)' );
    const href = element.evaluate(element => element.href);
    if(!href) console.log('NO HUBO CAMBIOS');
    if(href) console.log('ENLACE PUESTO');
    await element.click();

}

cron.schedule('*/1  * * * *' , () => {
    console.log('running bot');
    bot();
})


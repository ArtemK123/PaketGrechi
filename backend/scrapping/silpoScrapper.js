const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require ('puppeteer');

const SILPO_URL = 'https://shop.silpo.ua/category/83';

exports.scrapSilpoAsync = () => {
    return puppeteer
        .launch()
        .then(async browser => {
            console.log('Initialized browser');
            const page = await browser.newPage ();
            console.log('Opened new page');
            await page.goto(SILPO_URL);
            console.log('Go to Silpo site');
            await page.setDefaultTimeout(0);
            await page.waitForSelector('div.layout');
            console.log('Successfuly waited for selector');
            return page.content();
        })
        .then(html => html);
};
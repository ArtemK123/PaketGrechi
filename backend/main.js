'use strict';

const express = require('express');
const cors = require('cors');
const silpoScrapper = require('./scrapping/silpoScrapper');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/silpo', async (req, res) => {
    try{
        const silpoData = await silpoScrapper.scrapSilpoAsync();
        res.send(JSON.stringify(silpoData));
    }
    catch(error) {
        console.log(error);
        res.send('Error while parsing silpo');
    }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
'use strict';

const express = require('express');
const cors = require('cors');
const shopDataLoader = require('./shopDataLoader');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/data', async (req, res) => {
    try{
        const auchan = await shopDataLoader.loadAuchanAsync();
        const ecomarket = await shopDataLoader.loadEcomarketAsync();
        const varus = await shopDataLoader.loadVarusAsync();
        const populatedData = [...auchan, ...varus, ...ecomarket];
        res.send(JSON.stringify(populatedData));
    }
    catch(error) {
        console.log(error);
        res.send('Error while loading data');
    }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
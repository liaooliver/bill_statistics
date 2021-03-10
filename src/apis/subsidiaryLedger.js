const express = require('express');
const router = express.Router();
const { getSheet } = require('../services/data_handle');
const { category, monthly } = require('../services/ledger_handle');
const { scattered } = require('../services/scattered_handle');

router.get('/filter_by_category', async function (request, response) {
    const data = await getSheet();
    const result = category(data);
    response.json(result);
});

router.get('/filter_by_monthly', async function (request, response) {
    const data = await getSheet();
    const result = monthly(data);
    response.json(result);
});

router.get('/scattered_monthly', async function (request, response) {
    const data = await getSheet();
    const result = scattered(data);
    response.json(result);
});

router.get('/filter_by_maximum', async function (request, response) {
    response.json([
        {
            item: 'max',
            spend: 1000
        },
        {
            item: 'second',
            spend: 1000
        },
        {
            item: 'three',
            spend: 1000
        }
    ]);
});

// router.get('/filter_by_summary', async function (request, response) {
    
//     // response by_maximum by_monthly by_category

// });

module.exports = router;
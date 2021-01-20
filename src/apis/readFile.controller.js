const express = require('express');
const router = express.Router();
const { readFile } = require('../services/readFile');
const { clearFile } = require('../services/clearFile');

router.get('', async (request, response) => {
    const result = await readFile();

    const statistics = {};

    result.forEach(item => {
        statistics[item['類別']] = "";
    });

    console.log(statistics);

    response.json(clearFile(result));
});

module.exports = router;
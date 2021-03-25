const express = require('express');
const router = express.Router();
const { getSheetRow ,pagination } = require('../services/data_handle');

// read google sheet
router.get('', async function (request, response) {
    // get query
    const { page, limit } = request.query;

    // get sheet rows from google
    const rows_list = await getSheetRow("newbill");
    
    // make pagination
    const { totalPage, total, result } = pagination(page, limit, rows_list);

    // response
    response.status(200).json({ result: result, total, totalPage, page, limit });
});

module.exports = router;
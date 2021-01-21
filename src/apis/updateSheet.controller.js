const express = require('express');
const router = express.Router();
const { accessSpreadsheet } = require('../models/spreadsheet');

// 編輯單一 row 的資料
router.post('', async function (request, response) {
    const indexOfRow = 4;
    const rowData = request.body;

    // connect doc
    await accessSpreadsheet().then(async doc => {
        const sheet = doc.sheetsByTitle['newbill'];
        const rows = await sheet.getRows();
        
        Object.keys(rowData).forEach(async key => {
            rows[indexOfRow][key] = rowData[key];
        });
        await rows[indexOfRow].save();
    });
    response.json({ message: 'success' });
});

module.exports = router;
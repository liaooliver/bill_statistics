const express = require('express');
const router = express.Router();
const { accessSpreadsheet } = require('../models/spreadsheet');

// read google sheet
router.get('', async function (requset, response) {
    
    // connect google sheet
    await accessSpreadsheet().then(async doc => {
        
        // connect doc
        const sheets = doc.sheetsByTitle['newbill'];

        // get row header
        await sheets.loadHeaderRow();
        const headerValues = sheets.headerValues;

        // get row content
        const rows = await sheets.getRows();        

        // Reorganization row data
        const rows_list = rows.map(row => {
            const rowObj = {};
            headerValues.forEach(head => {
                rowObj[head] = row[head];
            });
            return rowObj;
        });

        response.status(200).json({ result: rows_list });
    });

});

module.exports = router;
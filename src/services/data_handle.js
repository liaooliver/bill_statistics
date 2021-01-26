const { accessSpreadsheet } = require('../models/spreadsheet');

const getSheet = async function () {

    // connect google sheet
    const doc = await accessSpreadsheet().then(async doc => doc);

    // get sheet
    const sheets = doc.sheetsByTitle['newbill'];

    // get header name [string]
    await sheets.loadHeaderRow();
    const headerValues = sheets.headerValues;

    // get all rows
    const rows = await sheets.getRows();        

    // combination Object
    return rows.map(row => {
        const rowObj = {};
        headerValues.forEach(head => {
            rowObj[head] = row[head];
        });
        return rowObj;
    });
};

const pagination = function (page, limit, data) {

    const totalPage = Math.ceil(data.length / limit);
    const total = data.length;
    // parse Int
    const start = parseInt(page) * parseInt(limit);
    const end = parseInt(start) + parseInt(limit);
    const result = data.slice(start, end);

    return {
        totalPage,
        total,
        result
    };
};

module.exports = {
    getSheet,
    pagination
};
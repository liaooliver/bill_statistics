const { accessSpreadsheet } = require('../models/spreadsheet');

const getSheet = async function (sheet) {

    // connect google sheet => doc - whole spread sheet
    const doc = await accessSpreadsheet().then(async doc => doc);
    
    // get sheet => sheets - single sheet
    return  doc.sheetsByTitle[sheet];
};

const getSheetRow = async function (sheet) {

    const sheets = await getSheet(sheet);
    // get header name [string]
    await sheets.loadHeaderRow();
    const headerValues = sheets.headerValues;

    // get all rows
    const rows = await sheets.getRows();    

    // console.log("ROWS =>", rows);

    // combination Object
    return rows.map(row => {
        const rowObj = {};
        headerValues.forEach(head => {
            rowObj[head] = row[head];
        });
        return rowObj;
    });
};

/**
* @param {string} page - current page
* @param {string} limit - page of limit
* @param {array} data - bill detail
* @return {object} - return filtered data
*/
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
    getSheetRow,
    pagination
};
const XLSX = require('xlsx');
const fs = require('fs');
const { accessSpreadsheet } = require('../models/spreadsheet');

const readFile = async function () {
    const filePath = global.appRoot + '/src/uploads/richart.xlsx';
    const buf = fs.readFileSync(filePath);
    const wb = XLSX.read(buf, {
        type: 'buffer'
    });

    const sheet_name_list = wb.SheetNames;
    return XLSX.utils.sheet_to_json(wb.Sheets[sheet_name_list[0]]);
};

/**
 * @param {Array} file - from read file result
 */
const cleansingFile = function (file) {
    return file.map(item => {
        if (item['金額'].includes('-NT$')) {
            item['金額'] = item['金額'].replace('-NT$', '-');
        } else {
            item['金額'] = item['金額'].replace('NT$', '');
        }
        return item;
    });
};

const addsheetToGoogleSheet = async function (keys, cleansingFile_result) {
    await accessSpreadsheet().then(async doc => {
        const newSheet = await doc.addSheet({ title: 'newbill' }); // adds a new sheet
        await newSheet.setHeaderRow(keys);
        await newSheet.addRows(cleansingFile_result);
    });
};

module.exports = {
    cleansingFile,
    readFile,
    addsheetToGoogleSheet
};
const XLSX = require('xlsx');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
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

        if (item['消費明細'].includes('高鐵')) item['類別'] = '交通';
        if (item['消費明細'].includes('基金會')) item['類別'] = '捐款';

        if (item['金額'].includes('-NT$')) {
            item['金額'] = item['金額'].replace('-NT$', '-');
        } else {
            item['金額'] = item['金額'].replace('NT$', '');
        }
        item["ID"] = uuidv4();
        return item;
    });
};

const addsheetToGoogleSheet = async function (keys, cleansingFile_result) {

    const doc = await accessSpreadsheet().then(async doc => doc);
    const sheets = doc.sheetsByTitle['newbill'];
    
    if (sheets) {
        await sheets.delete();
        addGoogleSheet(doc, keys, cleansingFile_result);
    } else {
        addGoogleSheet(doc, keys, cleansingFile_result);
    }
};

const addGoogleSheet = async function (doc, keys, cleansingFile_result) {
    const newSheet = await doc.addSheet({ title: 'newbill' }); // adds a new sheet
    await newSheet.setHeaderRow(keys);
    await newSheet.addRows(cleansingFile_result);
};

module.exports = {
    cleansingFile,
    readFile,
    addsheetToGoogleSheet
};
const XLSX = require('xlsx');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { accessSpreadsheet } = require('../models/spreadsheet');
const { getSheetRow } = require('../services/data_handle');

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
const cleansingFile = async function (file) {

    let keys = Object.keys(file[0]);
    // verification header format
    const headFormat = ['消費日期', '入帳日期', '卡別', '金額', '消費明細', '外幣幣別與金額', '類別', '備忘錄'];
    const verification = headFormat.every((item, index) => item === keys[index]);

    // get assort category
    const items = await getSheetRow("keywords");
    const lists = items.map(item => ({ key: item.keyname, category: item.category }));

    if (verification) {
        return file.map(item => {

            // automatically assort
            if (lists.length > 0) {
                lists.forEach(list => {
                    if (item['消費明細'].includes(list.key)) item['類別'] = list.category;
                });
            }
            
            if (item['金額'].includes('-NT$')) {
                item['金額'] = item['金額'].replace('-NT$', '-');
            } else {
                item['金額'] = item['金額'].replace('NT$', '');
            }
            item["ID"] = uuidv4();
            return item;
        });
    } else {
        return [];
    }
};

const addsheetToGoogleSheet = async function (keys, cleansingFile_result) {

    const doc = await accessSpreadsheet().then(async doc => doc);
    const sheets = doc.sheetsByTitle['newbill'];
    
    // 判斷 google sheet 是否已經有資料
    if (sheets) await sheets.delete();

    // add sheet to google
    addGoogleSheet(doc, keys, cleansingFile_result);
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
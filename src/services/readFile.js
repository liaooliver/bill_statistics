const XLSX = require('xlsx');
const fs = require('fs');

const readFile = async function () {
    const filePath = global.appRoot + '/src/uploads/richart.xlsx';
    const buf = fs.readFileSync(filePath);
    console.log(buf)
    const wb = XLSX.read(buf, { type: 'buffer' });
    
    const sheet_name_list = wb.SheetNames;
    return XLSX.utils.sheet_to_json(wb.Sheets[sheet_name_list[0]]);
};

module.exports = {
    readFile
};
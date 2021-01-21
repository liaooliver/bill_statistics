const express = require('express');
const router = express.Router();
const uploadFile = require('../middleware/upload');
const { readFile, cleansingFile, addsheetToGoogleSheet } = require('../services/file_data_handle');

// 上傳 excel 並存到 google sheet
router.post('', uploadFile.single("file"), async (request, response) => {

    // 1.read file
    const result = await readFile();
    
    // 2.clean file data
    const cleansing_result = await cleansingFile(result);

    // 3.get header row
    const keys = Object.keys(cleansing_result[0]);

    // 4.save file data
    await addsheetToGoogleSheet(keys, cleansing_result);

    // 5.response
    response.json({message: "success"}); 
});

module.exports = router;
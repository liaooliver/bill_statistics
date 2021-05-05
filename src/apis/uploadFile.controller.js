const express = require('express');
const router = express.Router();
const uploadFile = require('../middleware/upload');
const { readFile, cleansingFile, addsheetToGoogleSheet } = require('../services/file_data_handle');

// 上傳 excel 並存到 google sheet
router.post('', uploadFile.single("file"), async (request, response) => {
    // 1.read excel file
    const result = await readFile();
    
    // 2.clean file data
    const cleansing_result = await cleansingFile(result);

    if (cleansing_result.length > 0) {
        // 3.get header row
        let keys = Object.keys(cleansing_result[0]);
        keys = [...keys, '調整後金額'];
    
        // 4.save file data
        await addsheetToGoogleSheet(keys, cleansing_result);
    
        // 5.response
        response.setHeader('Content-Type', 'application/json');
        response.status(200).json({message: "success"});     
    } else {
        response.status(400).json({ message: "format wrong" });
    }

});

module.exports = router;
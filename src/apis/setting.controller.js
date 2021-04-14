const express = require('express');
const router = express.Router();
const { getSheet, getSheetRow } = require('../services/data_handle');

// get category list
router.get('/getcategorylist', async function (request, response) {
    const items = await getSheetRow("category");
    const lists = items.map(item => ({ value: item.category, text: item.category }));
    response.json(lists);
    /**
     * response
     * [
        { value: "吃飯", text: "吃飯" },
        { value: "交通", text: "交通" },
        { value: "捐款", text: "捐款" },
        { value: "3C", text: "3C" },
        { value: "衣服", text: "衣服" },
        { value: "娛樂", text: "娛樂" },
        { value: "旅遊", text: "旅遊" },
        { value: "電話", text: "電話" },
        { value: "進修", text: "進修" },
        { value: "其他", text: "其他"}
       ]
     */
});

// get categories
router.get('/getcategory', async function (request, response) {
    const items = await getSheetRow("category");
    const lists = items.map(item => ({ category: item.category, color: item.color }));
    response.json(lists);
    /**
     * response
     * [{ category: "交通", color: "灰色" }]
     */
});

// get keynames
router.get('/getkeys', async function (request, response) {
    const items = await getSheetRow("keywords");
    const lists = items.map(item => ({ key: item.keyname, category: item.category }));
    response.json(lists);
    /**
     * response
     * [{ key: "火車", category: "交通" }]
     */
});

// add category
router.post('/addcategorys', async function (request, response) {
    const { body } = request;
    await (await getSheet("category")).addRow({ category: body['category'], color: body['color'] });
    const items = await getSheetRow("category");
    const lists = items.map(item => ({ category: item.category, color: item.color }));
    response.json(lists);
    /**
     * response
     * [{ category: "交通", color: "灰色" }...]
     */
});

// add keyname
router.post('/addkey', async function (request, response) {
    const { body } = request;
    await (await getSheet("keywords")).addRow({ category: body['category'], keyname: body['keyname'] });
    const items = await getSheetRow("keywords");
    const lists = items.map(item => ({ key: item.keyname, category: item.category }));
    response.json(lists);
    /**
     * response
     * [{ key: "火車", category: "交通" }...]
     */
});

// delete category
router.post('/deletecategory', async function (request, response) {
    const { body } = request;
    let sheet, rows, length;
    
    // 先進入 newbill sheet 中更改 category 變成 其他
    sheet = await getSheet("newbill");
    rows = await sheet.getRows();
    length = rows.length;
    
    for (let i = 0; i < length; i++){
        if (rows[i]['類別'] === body['category']) {
            rows[i]['類別'] = '其他';
            await rows[i].save();
        }
    }

    // 再刪除 category
    sheet = await getSheet("category");
    rows = await sheet.getRows();
    length = rows.length;

    for (let i = 0; i < length; i++){
        if (rows[i]['category'] === body['category']) {
            await rows[i].delete();
        }
    }

    const items = await getSheetRow("category");
    const lists = items.map(item => ({ category: item.category, color: item.color }));
    response.json(lists);
    
    /**
     * response
     * [{ category: "交通", color: "灰色" }...]
     */
});

// delete keyname
router.post('/deletekey', async function (request, response) {
    const { body } = request;
    // 再刪除 category
    const sheet = await getSheet("keywords");
    const rows = await sheet.getRows();
    const length = rows.length;

    for (let i = 0; i < length; i++){
        if (rows[i]['keyname'] === body['key']) {
            await rows[i].delete();
        }
    }

    const items = await getSheetRow("keywords");
    const lists = items.map(item => ({ key: item.keyname, category: item.category }));
    response.json(lists);
    /**
     * response
     * [{ key: "火車", category: "交通" }...]
     */
});
module.exports = router;
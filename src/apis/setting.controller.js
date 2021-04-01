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
    await (await getSheet("keywords")).addRow({ category: body['category'], color: body['color'] });
    const items = await getSheetRow("category");
    const lists = items.map(item => ({ key: item.keyname, category: item.category }));
    response.json(lists);
    /**
     * response
     * [{ key: "火車", category: "交通" }...]
     */
});

// delete category
router.post('/deletecategory', function (request, response) {
    // 先進入 sheet 中更改 category 變成 其他類
    // 再刪除 category
    response.json();
    /**
     * response
     * [{ category: "交通", color: "灰色" }...]
     */
});

// delete keyname
router.post('/deletekey', function (request, response) {
    response.json();
    /**
     * response
     * [{ key: "火車", category: "交通" }...]
     */
});
module.exports = router;
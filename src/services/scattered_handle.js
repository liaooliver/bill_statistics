const {
    plusZero
} = require('../utils/plusZero');

const scattered = (dataSet) => {
    console.log(dataSet);
    const tempObj = {};

    for (let i = 0; i < 31; i++){
        tempObj[`${plusZero(i + 1)}`] = {
            billSpend: 0,
            adjustSpend: 0
        };
    }

    dataSet.forEach(item => {
        const billSpend = Number(item['金額'].replace(",", ""));
        const adjustSpend = Number(item['調整後金額'] ? item['調整後金額'].replace(",", "") : 0);
        tempObj[item['消費日期'].substring(8, 10)]['billSpend'] = tempObj[item['消費日期'].substring(8, 10)]['billSpend'] + billSpend;
        tempObj[item['消費日期'].substring(8, 10)]['adjustSpend'] = tempObj[item['消費日期'].substring(8, 10)]['adjustSpend'] + adjustSpend;
    });

    return Object.keys(tempObj).map(key => {
        const { billSpend, adjustSpend } = tempObj[key];
        return {
            category: key,
            billSpend: billSpend * -1,
            adjustSpend: adjustSpend * -1 
        };
    }).sort((a, b) => Number(a.category) - Number(b.category));
};

module.exports = {
    scattered
};
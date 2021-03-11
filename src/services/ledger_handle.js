const { data } = require('../services/fakeData');
const maximum = () => { };

/**
* @param {Object[]} dataSet - current page
* @param {string} dataSet[].消費日期 - The 消費日期 of an dataSet.
* @param {string} dataSet[].入帳日期 - The 入帳日期 of an dataSet.
* @param {string} dataSet[].卡別 - The 卡別 of an dataSet.
* @param {string} dataSet[].金額 - The 金額 of an dataSet.
* @param {string} dataSet[].消費明細 - The 消費明細 of an dataSet.
* @param {string} dataSet[].外幣幣別與金額 - The 外幣幣別與金額 of an dataSet.
* @param {string} dataSet[].類別 - The 類別 of an dataSet.
* @param {string} dataSet[].備忘錄 - The 備忘錄 of an dataSet.
* @param {string} dataSet[].ID - The ID of an dataSet.
* @param {string} dataSet[].調整後金額 - The 調整後金額 of an dataSet.
* @return {object} - return monthly data
*/

  
const monthly = (dataSet) => { 
    const monthly = {};
    dataSet.forEach(item => {
        const base_date = item['消費日期'].slice(0, 7);
        let spend = Number(item['金額'].replace(",", ""));
        let realSpend = item['調整後金額'] ? Number(item['調整後金額'].replace(",", "")) : item['調整後金額'];
        
        if (monthly[base_date]) {
            monthly[base_date]['spend'] = monthly[base_date]['spend'] + spend;
            monthly[base_date]['realSpend'] = realSpend ? monthly[base_date]['realSpend'] + realSpend : monthly[base_date]['realSpend'] + spend;
        } else {
            monthly[base_date] = {
                spend: spend,
                realSpend: realSpend ? realSpend : spend
            };
        }
    });
    
    return Object.keys(monthly).map(key => ({
        category: key.slice(2, 7),
        spend: Math.abs(monthly[key]['spend']),
        realSpend:  Math.abs(monthly[key]['realSpend'] )
    }));
};

/**
* @param {Object[]} dataSet - current page
* @param {string} dataSet[].消費日期 - The 消費日期 of an dataSet.
* @param {string} dataSet[].入帳日期 - The 入帳日期 of an dataSet.
* @param {string} dataSet[].卡別 - The 卡別 of an dataSet.
* @param {string} dataSet[].金額 - The 金額 of an dataSet.
* @param {string} dataSet[].消費明細 - The 消費明細 of an dataSet.
* @param {string} dataSet[].外幣幣別與金額 - The 外幣幣別與金額 of an dataSet.
* @param {string} dataSet[].類別 - The 類別 of an dataSet.
* @param {string} dataSet[].備忘錄 - The 備忘錄 of an dataSet.
* @param {string} dataSet[].ID - The ID of an dataSet.
* @param {string} dataSet[].調整後金額 - The 調整後金額 of an dataSet.
* @return {object} - return category data
*/
const category = (dataSet) => { 

    const result = {};
    let accumulatedRealCost = 0;
    let accumulatedCost = 0;
    let total_send = 0;

    const last = dataSet[0]['消費日期'];
    const begin = dataSet[dataSet.length-1]['消費日期'];
    
    data.forEach(item => {
        let spend = item['調整後金額'] ? item['調整後金額'] : item['金額'];
        accumulatedCost = accumulatedCost + item['金額'];
        spend = parseInt(spend.replace(",", ""));
        total_send = total_send + spend;
        if (result[item['類別']]) {
            result[item['類別']] = result[item['類別']] + spend;
        } else {
            result[item['類別']] = spend;
        }
    });

    const value = Object.keys(result).map(key => {
        const by_spend = Math.abs(result[key]);
        const by_percentage = Math.round(Math.abs(by_spend) / Math.abs(total_send) * 1000) / 10;
        return {
            category: key,
            by_spend,
            by_percentage
        };
    });

    return { begin, last, value, accumulatedCost };
};

const summary = () => { };

module.exports = {
    maximum,
    monthly,
    category,
    summary
};

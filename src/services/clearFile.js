const clearFile = function (file) {
    return file.map(item => {
        item['金額'] = item['金額'].replace('-NT$', '');
        return item;
    });
};

module.exports = {
    clearFile
};
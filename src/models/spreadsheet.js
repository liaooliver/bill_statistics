const { GoogleSpreadsheet } = require('google-spreadsheet');

async function accessSpreadsheet() {
    console.log("accessSpreadsheet =>", global.client_email);
    console.log("accessSpreadsheet =>", global.client_key);
    const doc = new GoogleSpreadsheet('1tloIdgp49FCRyS2vg6ShKSTw-02f_6Cb9xCXlxfI_YI');
    await doc.useServiceAccountAuth({
        // eslint-disable-next-line no-undef
        client_email: global.client_email,
        // eslint-disable-next-line no-undef
        private_key: global.client_key,
    });
    await doc.loadInfo(); // loads sheets
    return doc;
}

module.exports = {
    accessSpreadsheet
};
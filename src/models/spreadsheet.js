const { GoogleSpreadsheet } = require('google-spreadsheet');

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet(global.auth_token);
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
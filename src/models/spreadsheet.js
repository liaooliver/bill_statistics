const { GoogleSpreadsheet } = require('google-spreadsheet');

async function accessSpreadsheet() {
    
    const auth_token = global.auth_token;
    const client_email = global.client_email;
    const private_key = global.client_key;

    const doc = new GoogleSpreadsheet(auth_token);
    await doc.useServiceAccountAuth({
        // eslint-disable-next-line no-undef
        client_email,
        // eslint-disable-next-line no-undef
        private_key,
    });
    await doc.loadInfo(); // loads sheets
    return doc;
}

module.exports = {
    accessSpreadsheet
};
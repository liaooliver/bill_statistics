const { GoogleSpreadsheet } = require('google-spreadsheet');

const auth_token = process.env.GOOGLE_AUTH_TOKEN;
const client_email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const private_key = process.env.GOOGLE_PRIVATE_KEY;

async function accessSpreadsheet() {

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
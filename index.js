require('dotenv').config();
global.client_email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
global.client_key = process.env.GOOGLE_PRIVATE_KEY;
global.auth_token = process.env.GOOGLE_AUTH_TOKEN;

const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
global.appRoot = path.resolve(__dirname);

const uploadFile = require('./src/apis/uploadFile.controller');
const updateSheet = require('./src/apis/updateSheet.controller');
const readSheet = require('./src/apis/readSheet.controller');
const subsidiaryLedger = require('./src/apis/subsidiaryLedger.controller');
const setting = require('./src/apis/setting.controller');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log(global.auth_token, typeof global.auth_token);

app.use('/uploadFile', uploadFile);
app.use('/readSheet', readSheet);
app.use('/updateSheet', updateSheet);
app.use('/subsidiaryLedger', subsidiaryLedger);
app.use('/setting', setting);

app.use(express.static(path.join(__dirname, 'richart-webapp/build')));

app.get('/*', function (req, res) {
    
  res.sendFile(path.join(__dirname, 'richart-webapp/build', 'index.html'));
});

app.listen(process.env.PORT || port, () => {
    console.log("Express is Working");
});
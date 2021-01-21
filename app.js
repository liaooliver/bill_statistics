const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const uploadFile = require('./src/apis/uploadFile.controller');
const updateSheet = require('./src/apis/updateSheet.controller');
const readSheet = require('./src/apis/readSheet');


global.appRoot=path.resolve(__dirname);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
    response.send("Is Working");
});


app.use('/uploadFile', uploadFile);
app.use('/updateSheet', updateSheet);
app.use('/readFile', readSheet);



app.listen(port, () => {
    console.log("Express is Working");
});
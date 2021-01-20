const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const uploadFile = require('./src/apis/uploadFile.controller');
const readFile = require('./src/apis/readFile.controller');

global.appRoot=path.resolve(__dirname);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (request, response) => {
    response.send("Is Working");
});

app.use('/readFile', readFile);
app.use('/uploadFile', uploadFile);


app.listen(port, () => {
    console.log(__dirname)
    console.log("Express is Working");
});
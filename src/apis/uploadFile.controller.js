const express = require('express');
const router = express.Router();
const uploadFile = require('../middleware/upload');


router.post('', uploadFile.single("file"), (request, response) => {
    response.json({message: "success"}); 
});


module.exports = router;
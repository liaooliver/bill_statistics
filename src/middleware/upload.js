const multer = require("multer");

const fileFilter = (req, file, cb) => {

  if (file.mimetype.includes("sheet")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, global.appRoot + "/src/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `richart.xlsx`);
  },
});

var uploadFile = multer({ storage, fileFilter });
module.exports = uploadFile;
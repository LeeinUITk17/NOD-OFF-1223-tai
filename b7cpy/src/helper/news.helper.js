const multer = require('multer');
const path = require('path');
const randomstring = require('randomstring');

const imageHelper = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    limits: {
      fileSize: 8 * 1024 * 1024, // Adjusted the limit option name
    },
    filename: function (req, file, cb) {
      cb(null, randomstring.generate(10) + path.extname(file.originalname));
    },
  }),
}).single('file');

module.exports = {
  imageHelper,
};

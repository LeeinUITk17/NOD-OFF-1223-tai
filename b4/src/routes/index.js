var express = require('express');
var router = express.Router();

router.use('/api/v1/items', require('./items'))


router.get('/', function(req, res, next) {
    res.render('index');
  });
module.exports = router;

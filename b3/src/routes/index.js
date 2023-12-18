var express = require('express');
var router = express.Router();

router.use('/api/v1/items', require('./items'))

module.exports = router;

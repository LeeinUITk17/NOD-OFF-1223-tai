var express = require('express');
var router = express.Router();

router.use('/api/v1/items', require('./items'))


router.use('/admin', require('./admin'))
router.use('/',require('./frontend'))

module.exports = router;

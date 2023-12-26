const express = require('express');
const router = express.Router();

router.use('/' , require('./dashboard'));
router.use('/news' , require('./news'));


module.exports = router;
const express = require('express');
const router = express.Router();


router.use('/dashboard', require('./dashboard'));
router.use('/news', require('./news'));

module.exports = router;

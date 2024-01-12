const express = require('express');
const router = express.Router();

router.use('/frontend' , require('../frontend/dashboard'));


module.exports = router;
const express = require('express');
const homepageController = require('../../../controllers/product/homepage.controller');
const router = express.Router();
router.get('/',homepageController.getAll);
module.exports = router;
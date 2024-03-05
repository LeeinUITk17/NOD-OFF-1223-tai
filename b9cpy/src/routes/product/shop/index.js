const express = require('express');
const shopController = require('../../../controllers/product/shop.controller');
const router = express.Router();
router.get('/',shopController.getAll);
module.exports = router;
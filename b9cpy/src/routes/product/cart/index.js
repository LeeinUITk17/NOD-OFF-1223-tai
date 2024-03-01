const express = require('express');
const cartController = require('../../../controllers/product/cart.controller');
const router = express.Router();
router.get('/',cartController.getAll);
module.exports = router;
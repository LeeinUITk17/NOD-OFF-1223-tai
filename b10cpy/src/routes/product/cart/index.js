const express = require('express');
const cartController = require('../../../controllers/product/cart.controller');
const router = express.Router();
router.get('/',cartController.getAll);
router.post('/add',cartController.addCart);
module.exports = router;
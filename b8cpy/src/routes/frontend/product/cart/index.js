const express = require('express');
const cartController = require('../../../../controllers/frontend/product/cart.controller');
const router = express.Router();
router.get('/',cartController.getAll);
module.exports = router;
const express = require('express');
const checkoutController = require('../../../../controllers/frontend/product/checkout.controller');
const router = express.Router();
router.get('/',checkoutController.getAll);
module.exports = router;
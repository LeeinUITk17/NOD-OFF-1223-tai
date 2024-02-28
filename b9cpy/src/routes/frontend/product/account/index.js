const express = require('express');
const accountController = require('../../../../controllers/frontend/product/account.controller');
const router = express.Router();
router.get('/',accountController.getAll);
module.exports = router;
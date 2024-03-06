const express = require('express');
const thanksController = require('../../../controllers/product/thanks.controller');
const router = express.Router();
router.get('/',thanksController.getAll);
module.exports = router;
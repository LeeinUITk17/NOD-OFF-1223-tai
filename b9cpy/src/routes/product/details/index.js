const express = require('express');
const detailsController = require('../../../controllers/product/details.controller');
const router = express.Router();
router.get('/',detailsController.getAll);
module.exports = router;
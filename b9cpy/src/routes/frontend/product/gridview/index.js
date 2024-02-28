const express = require('express');
const gridviewController = require('../../../../controllers/frontend/product/gridview.controller');
const router = express.Router();
router.get('/',gridviewController.getAll);
module.exports = router;
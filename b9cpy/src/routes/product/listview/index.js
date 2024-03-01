const express = require('express');
const listviewController = require('../../../controllers/product/listview.controller');
const router = express.Router();
router.get('/',listviewController.getAll);
module.exports = router;
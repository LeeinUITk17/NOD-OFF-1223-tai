const express = require('express');
const homepageController = require('../../../../controllers/frontend/product/homepage.controller');
const router = express.Router();
router.get('/',homepageController.getAll);
module.exports = router;
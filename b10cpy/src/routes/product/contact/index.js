const express = require('express');
const contactController = require('../../../controllers/product/contact.controller');
const router = express.Router();
router.get('/',contactController.getAll);
module.exports = router;
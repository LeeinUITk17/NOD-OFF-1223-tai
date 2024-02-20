const express = require('express');
const contactController = require('../../../controllers/frontend/contact.controller');
const router = express.Router();
router.get('/', contactController.getAll);
module.exports = router;
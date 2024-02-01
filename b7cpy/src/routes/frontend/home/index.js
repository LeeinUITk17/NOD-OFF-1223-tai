const express = require('express');
const router = express.Router();
const homeController = require('../../../controllers/frontend/home.controller');

router.get('', homeController.getAll);

module.exports = router;

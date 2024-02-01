const express = require('express');
const router = express.Router();
const newsController = require('../../../controllers/frontend/news.controller');

router.get('/', newsController.getAll);

module.exports = router;
            
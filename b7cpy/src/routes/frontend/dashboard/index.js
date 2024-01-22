const express = require('express');
const router = express.Router();
const magazineController = require('../../../controllers/frontend/magazine.controller');

router.get('' , magazineController.getAll);


module.exports = router;
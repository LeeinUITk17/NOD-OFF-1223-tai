const express = require('express');
const homeController = require('../../../controllers/frontend/home.controller');
const router = express.Router();
router.get('/', homeController.getAll);
// console.log('checkhome');
module.exports = router;
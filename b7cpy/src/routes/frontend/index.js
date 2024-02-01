const express = require('express');
const frontendService = require('../../services/frontend.service');
const router = express.Router();

router.use((req, res, next) => {
    res.locals.layout = 'frontend';
    next();
});

router.use(async (req, res, next) => {
    res.locals.listcategory = await frontendService.getAllCategory();
    next();
});

router.use('/', require('./home'));
router.use('/home',require('./home'));
router.use('/news', require('./news'));
router.use('/contact', require('./contact'));
router.use('/about', require('./about'));
router.use('/category', require('./category'));
module.exports = router;

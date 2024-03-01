const express = require('express');
const productService = require('../../services/product.service');
const router = express.Router();

router.use((req, res, next) => {
    res.locals.layout = 'product';
    next();
});

router.use('/',require('./homepage'));
router.use('/account',require('./account'));
router.use('/cart',require('./cart'));
router.use('/checkout',require('./checkout'));
router.use('/details',require('./account'));
router.use('/gridview',require('./gridview'));
router.use('/listview',require('./listview'));
module.exports=router;
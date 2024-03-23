const express = require('express');
const productService = require('../../services/product.service');
const router = express.Router();
const middlewareproduct=require('../../middleware/product');

router.use((req, res, next) => {
    req.app.set('layout','product');
    
    Promise.all([
        productService.getAllproduct(),
        productService.getAllcategoryProduct(),
        productService.getAllsetting(),
        productService.getAllnews(),
        productService.getAlladdress(),
    ]).then(([listproduct,listcategoryproduct,listsetting,listnews,listaddress])=>{
        res.locals.listproduct=listproduct;
        res.locals.listcategoryproduct=listcategoryproduct;
        res.locals.listsetting=listsetting;
        console.log(listsetting);
        res.locals.listnews=listnews;
        res.locals.listaddress=listaddress;
    }).catch((err)=>{
        next(err);
    })
    next();
});

router.use('/login',require('./login'));
router.use('/',require('./home'));
router.use('/home',require('./home'));
router.use('/cart',require('./cart'));
router.use('/checkout',require('./checkout'));
router.use('/shop',require('./shop'));
router.use('/service',require('./service'));
router.use('/contact',require('./contact'));
router.use('/about',require('./about'));
router.use('/blog',require('./blog'));
router.use('/thanks',require('./thanks'));
router.use('/viewproduct',require('./viewproduct'));

module.exports=router;
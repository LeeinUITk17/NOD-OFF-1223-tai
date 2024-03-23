const express = require('express');
const { route } = require('../items');
const router = express.Router();
const adminService=require('../../services/admin.service');
router.use((req,res,next)=>{
   // res.locals.layout='admin';
   req.app.set('layout','admin');
    next();
})

router.use(async (req, res, next) => {
    res.locals.listcontact = await adminService.getAllcontact();
    next();
});

router.use(async(req,res,next)=>{
    res.locals.listcategory=await adminService.getAllcategory();
    next();
})

router.use(async(req,res,next)=>{
    res.locals.listcategoryProduct=await adminService.getAllcategoryProduct();
    next();
})
router.use(async(req,res,next)=>{
    res.locals.listsetting=await adminService.getSetting();
    next();
})
router.use(async(req,res,next)=>{
    res.locals.listnews=await adminService.getNews();
    next();
})
router.use(async(req,res,next)=>{
    res.locals.listbill=await adminService.getBill();
    next();
})
router.use(async(req,res,next)=>{
    res.locals.listuser=await adminService.getUser();
    next();
})

router.use('/' , require('./dashboard'));
router.use('/news' , require('./news'));
router.use('/category',require('./category'));
router.use('/setting',require('./setting'));
router.use('/rss',require('./rss'));
router.use('/product',require('./product'));
router.use('/product/category',require('./product.category'));
router.use('/contact',require('./contact'));
router.use('/address',require('./address'));
router.use('/coupon',require('./coupon'));
router.use('/bill',require('./bill'));
router.use('/user',require('./user'));
module.exports = router;
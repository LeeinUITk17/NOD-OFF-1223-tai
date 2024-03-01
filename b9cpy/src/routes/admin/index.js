const express = require('express');
const { route } = require('../items');
const router = express.Router();
const adminService=require('../../services/admin.service');

router.use((req,res,next)=>{
    res.locals.layout='admin';
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

router.use('/' , require('./dashboard'));
router.use('/news' , require('./news'));
router.use('/category',require('./category'));
router.use('/setting',require('./setting'));
router.use('/rss',require('./rss'));
router.use('/product',require('./product'));
router.use('/contact',require('./contact'));
module.exports = router;
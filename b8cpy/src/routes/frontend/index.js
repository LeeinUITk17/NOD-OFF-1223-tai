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
router.use(async(req, res, next)=>{
    res.locals.datasetting=await frontendService.getAllSetting();
    next();
})
router.use(async(req,res,next)=>{
    res.locals.listnews=await frontendService.getAllNews();
    next();
})
router.use(async(req,res,next)=>{
    res.locals.SrcRss=await frontendService.getAllRss();
    next();
})
router.use('/', require('./home'));
router.use('/home',require('./home'));
router.use('/news', require('./news'));
router.use('/contact', require('./contact'));
router.use('/about', require('./about'));
router.use('/category', require('./category'));
router.use('/rss',require('./rss'));
router.use('/store',require('./product'));
module.exports = router;

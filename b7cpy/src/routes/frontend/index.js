const express = require('express');
const frontendService = require('../../services/frontend.service');
const router = express.Router();


router.use((req,res,next)=>{
    res.locals.layout='frontend';
    next();
})
router.use(async(req,res,next)=>{
    res.locals.listcategory=await frontendService.getAllCategory();
    next();
})
router.use('/' , require('../frontend/dashboard'));


module.exports = router;
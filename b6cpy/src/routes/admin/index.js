const express = require('express');
const { route } = require('../items');
const router = express.Router();


router.use((req,res,next)=>{
    res.locals.layout='admin';
    next();
})

router.use('/' , require('./dashboard'));
router.use('/news' , require('./news'));
router.use('/category',require('./category'));

module.exports = router;
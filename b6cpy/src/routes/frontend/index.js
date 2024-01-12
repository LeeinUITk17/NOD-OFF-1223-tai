const express = require('express');
const router = express.Router();


router.use((req,res,next)=>{
    res.locals.layout='frontend';
    next();
})

router.use('/' , require('../frontend/dashboard'));


module.exports = router;
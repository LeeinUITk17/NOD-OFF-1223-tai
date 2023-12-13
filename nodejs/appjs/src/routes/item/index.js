var express=require('express');
const itemsConstroller = require('../../controllers/items.constroller');
var router=express.Router();


router.get('',itemsConstroller.getall)
router.post('/add',itemsConstroller.additem);
module.exports=router;
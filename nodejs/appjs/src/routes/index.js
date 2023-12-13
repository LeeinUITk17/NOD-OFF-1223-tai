var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.send({message:'hello'});
// });
// router.get('/product/add/:id1/:id2', function(req, res, next) {
//   const{ id1, id2}= req.params;
//   res.send({message: id1,id2});
// });

router.use('/item' ,require('./item'))
module.exports = router;

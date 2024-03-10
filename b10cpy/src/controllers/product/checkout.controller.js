
class checkoutController {
    getAll = async (req, res, next) => {
      // const productsData=JSON.parse(req.body.productsData);
      // console.log(productsData);
      res.render('product/checkout');
    }
}

module.exports = new checkoutController();
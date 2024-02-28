class checkoutController {
    getAll = async (req, res, next) => {
        res.render('frontend/product/checkout');
    }
}

module.exports = new checkoutController();
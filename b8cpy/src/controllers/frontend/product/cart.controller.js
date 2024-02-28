class cartController {
    getAll = async (req, res, next) => {
        res.render('frontend/product/cart');
    }
}

module.exports = new cartController();
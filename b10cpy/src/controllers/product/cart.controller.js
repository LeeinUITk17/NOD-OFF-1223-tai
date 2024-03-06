class cartController {
    getAll = async (req, res, next) => {
        res.render('product/cart');
    }
}

module.exports = new cartController();
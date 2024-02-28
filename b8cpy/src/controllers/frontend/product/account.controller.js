class accountController {
    getAll = async (req, res, next) => {
        res.render('frontend/product/account');
    }
}

module.exports = new accountController();
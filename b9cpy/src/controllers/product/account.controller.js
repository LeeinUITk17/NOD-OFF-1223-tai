class accountController {
    getAll = async (req, res, next) => {
        res.render('product/account');
    }
}

module.exports = new accountController();
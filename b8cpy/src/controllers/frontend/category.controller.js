class categoryController {
    getAll = async (req, res, next) => {
        res.render('frontend/category');
    }
}

module.exports = new categoryController();
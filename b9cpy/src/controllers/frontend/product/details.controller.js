class detailsController {
    getAll = async (req, res, next) => {
        res.render('frontend/product/details');
    }
}

module.exports = new detailsController();
class detailsController {
    getAll = async (req, res, next) => {
        res.render('product/details');
    }
}

module.exports = new detailsController();
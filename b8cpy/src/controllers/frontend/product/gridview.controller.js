class gridviewController {
    getAll = async (req, res, next) => {
        res.render('frontend/product/gridview');
    }
}

module.exports = new gridviewController();
class listviewController {
    getAll = async (req, res, next) => {
        res.render('frontend/product/listview');
    }
}

module.exports = new listviewController();
class listviewController {
    getAll = async (req, res, next) => {
        res.render('product/listview');
    }
}

module.exports = new listviewController();
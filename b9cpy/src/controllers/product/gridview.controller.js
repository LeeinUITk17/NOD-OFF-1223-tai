class gridviewController {
    getAll = async (req, res, next) => {
        res.render('product/gridview');
    }
}

module.exports = new gridviewController();
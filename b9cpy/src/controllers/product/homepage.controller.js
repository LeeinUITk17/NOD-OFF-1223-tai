class homepageController {
    getAll = async (req, res, next) => {
        res.render('product/homepage');
    }
}

module.exports = new homepageController();
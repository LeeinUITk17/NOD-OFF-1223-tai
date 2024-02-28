class homepageController {
    getAll = async (req, res, next) => {
        res.render('frontend/product/homepage');
    }
}

module.exports = new homepageController();
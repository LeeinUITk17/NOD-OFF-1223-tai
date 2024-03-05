class homepageController {
    getAll = async (req, res, next) => {
        res.render('product/home');
    }
}

module.exports = new homepageController();
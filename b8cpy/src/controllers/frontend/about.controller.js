class aboutController {
    getAll = async (req, res, next) => {
        res.render('frontend/about');
    }
}

module.exports = new aboutController();
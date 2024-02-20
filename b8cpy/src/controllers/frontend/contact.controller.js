class contactController {
    getAll = async (req, res, next) => {
        res.render('frontend/contact');
    }
}

module.exports = new contactController();
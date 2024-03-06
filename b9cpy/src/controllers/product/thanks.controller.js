class thanksController {
    getAll = async (req, res, next) => {
        res.render('product/thanks');
    }
}

module.exports = new thanksController();
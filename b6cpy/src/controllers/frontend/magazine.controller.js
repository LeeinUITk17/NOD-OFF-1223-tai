class magazineController {
    getAll = async ( req , res , next) => {
        res.render('frontend');
    }
}

module.exports = new magazineController();


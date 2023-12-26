class DashboardController {
    getAll = async ( req , res , next) => {
        res.render('admin/dashboard');
    }
}

module.exports = new DashboardController();


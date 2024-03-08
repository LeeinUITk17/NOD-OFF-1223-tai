const {
    addItem,
    getItems,
    deleteItem,
    getItemById,
    updateItem,
    getStatusCounts,
  } = require("../../services/productView.service");
class cartController {
    getAll = async (req, res, next) => {
        res.render('product/cart');
    }
    addCart = async (req, res, next) => {
        const { id } = req.body;
    
        if (id) {
            try {
                const data = await getItemById(id);
                console.log(data);
                return res.render('product/cart', { data });
            } catch (error) {
                console.error(error);
                return res.status(500).send('Internal Server Error');
            }
        }
        res.redirect('/shop/cart');
    };
    
}

module.exports = new cartController();
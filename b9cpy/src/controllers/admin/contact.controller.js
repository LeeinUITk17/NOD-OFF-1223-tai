const {
    addItem,
    getItems,
    deleteItem,
    getItemById,
    updateItem,
    getStatusCounts,
  } = require("../../services/contact.service");
class contactController {
    getForm = async ( req , res , next) => {
        let { id } = req.params;
    if (id == "") {
      res.render("admin/contact");
    } else {
      let data = await getItemById(id);
      res.render("admin/contact", { data });
    }
    }
}

module.exports = new contactController();


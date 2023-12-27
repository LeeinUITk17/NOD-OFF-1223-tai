const {
  addItem,
  getItem,
  getItemById,
  getItemAndUpdate,
  getItemAndDelete,
} = require("../../services/new.service");
const {validationResult}=require('express-validator');
class NewsController {
  getAll = async (req, res, next) => {
    const data = await getItem();
    res.render("admin/news", { data });
  };
  getForm = async (req, res, next) => {
    res.render("admin/news/form",{data: {}});
  };
  addItem = async (req, res, next) => {
    const errors=validationResult(req);
    console.log(errors);

   if(errors.length>0){
    console.log(errors);
    return res.redirect('/admin/news/form');
   }

    const data = await addItem(req.body);
    res.redirect("/admin/news");
  };
  getItemById = async (req, res, next) => {
    const { id } = req.params;
    const data = await getItemById(id);
    res.render("admin/news/form", { data });
  };
  getItemAndUpdate = async (req, res, next) => {
    const { id } = req.params;
    const { name, status, description } = req.body;
    const data = await getItemAndUpdate(id, { name, status, description });
    // req.flash('success','updated successfully',false);
    res.redirect("/admin/news");
  };
  getItemAndDelete = async (req, res, next) => {
    const { id } = req.params;
    const data = await getItemAndDelete(id);
    // req.flash('success','deleted successfully',false);
    res.redirect("/admin/news");
  };
}

module.exports = new NewsController();

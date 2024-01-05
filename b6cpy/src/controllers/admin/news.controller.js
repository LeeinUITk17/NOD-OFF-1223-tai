const {
  addItem,
  getItems,
  deleteItem,
  getItemById,
  updateItem,
  getStatusCounts,
} = require("../../services/news.services");
const { body, validationResult } = require("express-validator");

var express = require("express");
var router = express.Router();

class NewsController {
  getAll = async (req, res, next) => {
    let { status } = req.params;
   let keyword=req.query.keywords;
    let data;
    const statusCounts = await getStatusCounts();
    if (status) {
      data = await getItems(status,keyword);
    } else {
      data = await getItems();
    }
    // status?data = await getItems(status): data = await getItems();
    res.render("admin/news", { data, statusfilter: this.getStatusFilter(statusCounts, status),keyword });
  };

  getForm = async (req, res, next) => {
    let { id } = req.params;
    if (id == "") {
      res.render("admin/news/form");
    } else {
      let data = await getItemById(id);
      res.render("admin/news/form", { data });
    }
  };

  addOrUpdateItem = async (req, res) => {
    const { id } = req.body;
    let errors = validationResult(req);
    // console.log(errors);
    let listError = errors.errors;
    if (listError.length > 0) {
      let messages = [];
      listError.map((error) => messages.push(error.msg));
      req.flash("danger", messages, false);
      return id
        ? res.redirect("/admin/news/form/" + id)
        : res.redirect("/admin/news/form/");
    }
    if (id) {
      await updateItem(id, req.body);
      req.flash("success", "Update item thành công", false);
    } else {
      await addItem(req.body);
      req.flash("success", "Add item thành công", false);
    }
    res.redirect("/admin/news");
  };

  deleteItem = async (req, res, next) => {
    let { id } = req.params;
    await deleteItem(id);
    req.flash("success", "Delete item thành công", false);
    res.redirect("/admin/news");
  };


  statusCount = async (req, res, next) => {
    try {
      const items = await getItems();
      const statusCounts = await getStatusCounts();

 let status = req.params.status ;
const updatestatusfilter=this.getStatusFilter(statusCounts,status);
status=status||'all';

console.log(status);

      res.render('list', {
        items,
        statusfilter: updatestatusfilter,
        calculateItemCount: this.calculateItemCount,
      });
    } catch (err) {
      console.error('Error fetching items:', err);
      res.status(500).send('Internal Server Error');
    }
  };

  getStatusFilter = (statusCounts, currentStatus) => [
    {
      name: 'All',
      count: statusCounts.All,
      link: currentStatus === 'all' ? 'all' : 'news/all',
      class: currentStatus === 'all' ? 'btn m-b-sm btn-success btn-sm' : 'btn m-b-sm default',
    },
    {
      name: 'Active',
      count: statusCounts.Active,
      link: currentStatus === 'active' ? 'active' : 'news/active',
      class: currentStatus === 'active' ? 'btn m-b-sm btn-success btn-sm' : 'btn m-b-sm default',
    },
    {
      name: 'Inactive',
      count: statusCounts.Inactive,
      link: currentStatus === 'inactive' ? 'inactive' : 'news/inactive',
      class: currentStatus === 'inactive' ? 'btn m-b-sm btn-success btn-sm' : 'btn m-b-sm default',
    },
  ];
  

  calculateItemCount = (itemName, items) => {
    switch (itemName) {
      case 'All':
        return items.length;
      case 'Active':
        return items.filter((item) => item.status === 'active').length;
      case 'Inactive':
        return items.filter((item) => item.status === 'inactive').length;
      default:
        return 0;
    }
  };

  updateStatus = async (req, res, next) => {
    try {
      const { id, status } = req.params;
      const newStatus = status === 'active' ? 'inactive' : 'active';
      await updateItem(id, { status: newStatus });
      res.status(200).json({ message: 'Successfully updated status', id, status: newStatus });
    } catch (error) {
      console.error("Error during status update:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

submitSelected=async (req,res,next)=>{
           
  const selected = req.body.selectedItems;
  console.log(selected);
  res.redirect('admin/news');
}

}

module.exports = new NewsController();

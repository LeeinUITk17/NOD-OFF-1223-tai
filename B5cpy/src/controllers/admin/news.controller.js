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
    const statusCounts = await getStatusCounts();
    const data = await getItems();
    res.render("admin/news", { data,statusfilter: this.getStatusFilter(statusCounts)});
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
  
  updateStatus = async (req, res, next) => {
    try {
      const { id , status} = req.params;
      //const currentItem = await getItemById(id);
      const newStatus = status === 'active' ? 'inactive' : 'active';
      await updateItem(id, { status: newStatus });
      res.status(200).json({ message: 'Successfully updated status', id, status: newStatus });
    } catch (error) {
      console.error("Error during status update:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  statusCount = async (req, res, next) => {
    try {
      const items = await getItems();
      const statusCounts = await getStatusCounts();

      res.render('list', {
        items,
        statusfilter: this.getStatusFilter(statusCounts),
        calculateItemCount: this.calculateItemCount,
      });
    } catch (err) {
      console.error('Error fetching items:', err);
      res.status(500).send('Internal Server Error');
    }
  };

  getStatusFilter = (statusCounts) => [
    {
      name: 'All',
      count: statusCounts.All,
      link: '#',
      class: 'btn m-b-sm btn-success btn-sm',
    },
    {
      name: 'Active',
      count: statusCounts.Active,
      link: '#',
      class: 'btn m-b-sm btn-success btn-sm',
    },
    {
      name: 'Inactive',
      count: statusCounts.Inactive,
      link: '#',
      class: 'btn m-b-sm btn-success btn-sm',
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
}

module.exports = new NewsController();

const {
    addItem,
    getItems,
    deleteItem,
    getItemById,
    updateItem,
    getStatusCounts,
  } = require("../../services/news.services");
var express = require("express");
var router = express.Router();
class magazineController {
    getAll = async ( req , res , next) => {
        res.render('frontend');
    }
}

module.exports = new magazineController();


// const {
//     addItem,
//     getItems,
//     deleteItem,
//     getItemById,
//     updateItem,
//     getStatusCounts,
//   } = require("../../services/news.services");
// var express = require("express");
// var router = express.Router();
class HomeController {
    getAll = async (req, res, next) => {
        res.render('frontend/home');
    }
}

module.exports = new HomeController();


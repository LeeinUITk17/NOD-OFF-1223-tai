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
        // console.log('testhome');
        res.render('frontend/home');
    }
}

module.exports = new HomeController();


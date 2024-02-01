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
class NewsController {
    getAll = async (req, res, next) => {
        res.render('frontend/news');
    }
}

module.exports = new NewsController();



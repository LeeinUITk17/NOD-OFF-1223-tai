const {
    addItem,
    getItems,
    deleteItem,
    getItemById,
    updateItem,
    getStatusCounts,
  } = require("../../services/frontendNews.service");
 var express = require("express");
// const fs = require("fs/promises");
// const { now } = require("mongoose");
// const nodemailer = require("nodemailer");
// var router = express.Router();
class HomeController {
    getAll = async (req, res, next) => {
        // console.log('testhome');
        res.render('frontend/home');

    }
    searchtool=async(req,res,next)=>{
        let data;
        let keyword=req.query.keywords;
        //console.log(keyword);
        if(keyword){
            data=await getItems(keyword);
            //console.log(data);
        }
        res.render("frontend/searchSide",{data,keyword});
    }
}

module.exports = new HomeController();


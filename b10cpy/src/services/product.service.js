
const productModel=require('../model/product.model');
const categoryProductModel=require('../model/productCategory.model');
const settingModel=require('../model/setting.model');
const newsModel=require('../model/news.model');
const addressModel=require('../model/address.model');
class productService {
 
  
  async getAllproduct(){
    return await productModel.find({status:'active'}).sort({ordering:1});
  }
  async getAllcategoryProduct(){
    return await categoryProductModel.find({});
  }
  async getAllsetting(){
    return await settingModel.find({});
  }
  async getAllnews(){
    return await newsModel.find({}).sort({ordering:1});
  }
  async getAlladdress(){
    return await addressModel.find({status:'active'}).sort({ordering:1}).select('name');
  }

}

module.exports = new productService();

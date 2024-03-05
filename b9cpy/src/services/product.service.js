
const productModel=require('../model/product.model');
const categoryProductModel=require('../model/productCategory.model');
const settingModel=require('../model/setting.model');
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
}

module.exports = new productService();

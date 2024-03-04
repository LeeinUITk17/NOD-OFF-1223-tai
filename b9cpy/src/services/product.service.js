
const productModel=require('../model/product.model');
const categoryProductModel=require('../model/productCategory.model');
class productService {
 
  
  async getAllproduct(){
    return await productModel.find({status:'active'}).sort({ordering:1});
  }

  async getAllcategoryProduct(){
    return await categoryProductModel.find({status:'active'});
  }
}

module.exports = new productService();

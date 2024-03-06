
const contactModel=require('../model/contact.model');
const categoryModel=require('../model/category.model');
const categoryProductModel=require('../model/productCategory.model');
class adminService {
 
  async getAllcontact(){
    return await contactModel.find({});
  }
   
  async getAllcategory(){
     return await categoryModel.find({special:false}).select('name');
  }

  async getAllcategoryProduct(){
    return await categoryProductModel.find({special:false}).select('name');
  }
}

module.exports = new adminService();

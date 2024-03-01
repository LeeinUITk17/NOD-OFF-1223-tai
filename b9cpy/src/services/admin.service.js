
const contactModel=require('../model/contact.model');
const categoryModel=require('../model/category.model');
class adminService {
 
  async getAllcontact(){
    return await contactModel.find({status:'active'});
  }
   
  async getAllcategory(){
     return await categoryModel.find({special:false}).select('name');
  }
}

module.exports = new adminService();

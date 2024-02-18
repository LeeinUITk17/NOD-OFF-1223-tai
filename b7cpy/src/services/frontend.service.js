const categoryModel = require('../model/category.model');
const settingModel=require('../model/setting.model');
class FrontendService {
  getAllCategory = async () => {
    return await categoryModel.find({ status: 'active' });
  }
  getAllSetting= async()=>{
    return await settingModel.find();
  }
}

module.exports = new FrontendService();

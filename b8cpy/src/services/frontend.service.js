const categoryModel = require('../model/category.model');
const settingModel=require('../model/setting.model');
const newsModel=require('../model/news.model');
class FrontendService {
  getAllCategory = async () => {
    return await categoryModel.find({ status: 'active' });
  }
  getAllSetting= async()=>{
    return await settingModel.find();
  }
  getAllNews=async()=>{
    return await newsModel.find({status:'active'});
  }
}

module.exports = new FrontendService();

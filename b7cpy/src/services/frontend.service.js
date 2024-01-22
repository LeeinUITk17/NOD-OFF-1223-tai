const categoryModel = require('../model/category.model');

class FrontendService {
  getAllCategory = async () => {
    return await categoryModel.find({ status: 'active' });
  }
}

module.exports = new FrontendService();

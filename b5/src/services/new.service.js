const mainModel = require("../models/new.model");

const addItem = async (body) => {
  return await mainModel.create(body);
};

const getItem = async () => {
  return await mainModel.find({});
};

const getItemById = async (id) => {
  return await mainModel.findOne({ _id: id });
};

const getItemAndUpdate = async (id, { name, status, description }) => {
  return await mainModel.findByIdAndUpdate(
    { _id: id },
    { name, status, description }
  );
};

const getItemAndDelete = async (id) => {
  return await mainModel.findByIdAndDelete({ _id: id });
};

module.exports = {
  addItem,
  getItem,
  getItemById,
  getItemAndUpdate,
  getItemAndDelete,
};

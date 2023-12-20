const mongoose=require('mongoose');
const { Schema } = mongoose;
const collectionName='Items'
const itemSchema = new Schema({
  username: String,
  password: String,
  email: String,
});
module.exports=mongoose.model(collectionName,itemSchema);
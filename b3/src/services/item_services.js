
const itemModel=require('../models/item_model');
const additem=async({username,email,password})=>{
//    console.log(username);
 return  await itemModel.create({username,email,password});
}
const edititem=async()=>{

}
module.exports={
    additem,
    edititem
}
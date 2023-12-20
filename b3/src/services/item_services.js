
const itemModel=require('../models/item_model');
const additem=async({username,email,password})=>{
//    console.log(username);
 return  await itemModel.create({username,email,password});
}
const getitembyid=async(ID)=>{
        const item = await itemModel.findById(ID);
        return item;
}
const getall=async()=>{
  
        const items=await itemModel.find({});
        return items;
}
module.exports={
    additem,
    getitembyid,
    getall,
}
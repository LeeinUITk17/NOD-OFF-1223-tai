"use strick"

const fs = require('fs/promises');
const { stringify } = require('querystring');
//const router=express.router();
const { additem, deleteitembyid, updateitembyid, getall}=require('../services/item_services');
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');
class ItemController {
    getItems = async (req , res , next) => {
       try{
        const allitems=await getall();
        res.send({
          message: 'success',
          type: 'getall',
          metadata: allitems,
        })
       } catch(err){
        console.error('Error getting all items:', err);
        next(err);
       }
    };
    getItemById = async (req, res, next) => {
      try {
        const { id } = req.params;
        const foundItem = await getitembyid(id);
        res.status(foundItem ? 200 : 404).json({
          success: foundItem ? true : false,
          message: foundItem ? 'Item found successfully' : 'Item not found',
          metadata: foundItem || null,
        });    
      } catch (err) {
        console.error('Error getting item by ID:', err);
        next(err);
      }
      };
updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { updatedData } = req.body;
    const updated=await updateitembyid(id,updatedData);
    res.status(updated ? 200 : 404).json({
      success: updated ? true : false,
      message: updated ? 'Item found successfully' : 'Item not found',
      metadata: updated || null,
    });
  } catch (err) {
    console.error('Error updating item:', err);
    next(err); 
  }
};
   addItem = async (req , res , next) => {
      try {
        const { newItemData } = req.body;
        const newItem = await additem(newItemData);
        res.send({
          message: newItem ? 'success' : 'Failed to add new item',
          type: 'additem',
          metadata: newItem || null,
        });
      } catch (err) {
        console.error('Error adding new item:', err);
        next(err);
      }
    };
    deleteItem = async ( req , res , next ) => {
      try {
        const { id } = req.params;
        const deletedItem = await deleteItemById(id);
        res.status( deletedItem ? 200 : 404 ).json({
          success: deletedItem ? true : false,
          message: deletedItem ? 'Item deleted successfully' : 'Item not found',
          metadata: deletedItem || null,
        });
      } catch (err) {
        console.error('Error deleting item:', err);
        next(err);
      }
    }
}


module.exports = new ItemController();






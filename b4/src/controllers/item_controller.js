"use strick"

const fs = require('fs/promises');
const { stringify } = require('querystring');
//const router=express.router();
const { additem}=require('../services/item_services');
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');


class ItemController {



    getItems = async (req , res , next) => {
        const dataEx = await fs.readFile('src/apps/const/user.file' , {encoding : 'utf8'});
        res.send({
            message : 'success',
            type : 'getItem',
            metadata : JSON.parse(dataEx)
        })
    }
    getItemById = async (req, res, next) => {
        try {
          const { id } = req.params;
          const filePath = 'src/apps/const/user.file';
          const data = await fs.readFile(filePath, { encoding: 'utf8' });
          const parsedData = JSON.parse(data);
          const foundItem = parsedData.find((item) => item.id === id);
          if (foundItem) {
            res.send({
              message: 'success',
              type: 'getitembyid',
              metadata: foundItem,
            });
          } else {
            res.status(404).json({ success: false, message: 'Item not found' });
          }
        } catch (err) {
          console.error('Error getting item by ID:', err);
          next(err); 
        }
      };
updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newdata = { id, ...req.body };
    const filePath = 'src/apps/const/user.file';
    const data = await fs.readFile(filePath, { encoding: 'utf8' });
    const parsedData = JSON.parse(data);
    const index = parsedData.findIndex((item) => item.id === id);
    if (index !== -1) {
      parsedData[index] = newdata;
      await fs.writeFile(filePath, JSON.stringify(parsedData, null, 2), { encoding: 'utf8' });
      res.json({ success: true, data: parsedData[index] });
    } else {
      res.status(404).json({ success: false, message: 'Item not found' });
    }
  } catch (err) {
    console.error('Error updating item:', err);
    next(err); 
  }
};


    addItem = async (req , res , next) => {
const result= await additem(req.body);
        res.send({
            message : 'success',
            type : 'addItem',
            metadata:result
        })
    }


    deleteItem = async ( req , res , next ) => {
        const { id } = req.params
        const data = [];
        const dataEx = await fs.readFile('src/apps/const/user.file' , {encoding : 'utf8'});
        if(dataEx) data.push(...JSON.parse(dataEx))
        const result =  data.filter(e => e.id != id) 
        await fs.writeFile('src/apps/const/user.file' , JSON.stringify(result))
        res.send({
            message : 'success',
            type : 'deleteItem',
            metadata : result
        })
    }
}


module.exports = new ItemController();






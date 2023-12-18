const express = require('express');
const itemsController = require('../../controllers/items.constroller');
const fs = require('fs');
const router = express.Router();

router.get('/all', itemsController.getall);
router.post('/add', itemsController.additem);

const itempath = 'lwdata.txt';

function readdata() {
  try {
    const data = fs.readFileSync(itempath, 'utf-8');
    return JSON.parse(data) ?? [];
  } catch (error) {
    return [];
  }
}

function writedata(data) {
  fs.writeFileSync(itempath, JSON.stringify(data, null, 2), 'utf-8'); 
}

const items = readdata();

router.get('/getall', (req, res) => {
  res.json(items);
});

router.post('/', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  writedata(items);
  res.json({ item: newItem });
});

router.delete('/:id', (req, res) => {
  const itemId = req.params.id.toString();
  const index = items.findIndex(items => items.id === parseInt(itemId,10));

  if (index !== -1) {
    items.splice(index, 1);
    writedata(items);
    res.send({ message: 'Deleted successfully', itemId });
  } else {
    res.send({ message: 'Item not found' });
  }
});

module.exports = router;

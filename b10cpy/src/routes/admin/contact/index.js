const express = require('express');
const router = express.Router();
const contactController = require('../../../controllers/admin/contact.controller')


router.get('/:id' , contactController.getForm);


module.exports = router;
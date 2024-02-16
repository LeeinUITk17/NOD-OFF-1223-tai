const express = require('express');
const router = express.Router();
const settingController = require('../../../controllers/admin/setting.controller')

router.get('' , settingController.getAll);
router.get("/form", settingController.getForm);
router.post(
    "/form",settingController.addOrUpdateItem
)
router.get("/form/:id", settingController.getForm);
module.exports = router;
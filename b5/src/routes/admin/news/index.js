
const express = require("express");
const router = express.Router();
const newController = require("../../../controllers/admin/news.controller");
const { body, validationResult } = require("express-validator");
const validateRequest = validations => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const alert = errors.array().map(error => ({
      ...error,
      type: 'danger',
    }));

    res.render('admin/news/form', { data: {}, alert });
  };
};


router.get("/", newController.getAll);
router.get("/form", newController.getForm);
router.post(
  "/form",
  validateRequest([
    body("name")
      .isLength({ min: 6 })
      .withMessage("too short ,the minimum length required is 6 characters."),
    body("status")
      .exists()
      .withMessage("Status is required")
      .isString()
      .isIn(["active", "inactive"])
      .withMessage('Status should be either "active" or "inactive"')
  ]),
  newController.addItem
);
router.get("/form/:id", newController.getItemById);
router.post(
  "/form/:id",
  validateRequest([
    body("name")
      .isLength({ min: 6 })
      .withMessage("too short,the minimum length required is 6 characters."),
    body("status")
      .exists()
      .withMessage("Status is required")
      .isString()
      .isIn(["active", "inactive"])
      .withMessage('Status should be either "active" or "inactive"')
  ]),
  newController.getItemAndUpdate
);
// router.get("/delete/:id",newController.getItemAndDelete ,(req, res, next) => {
//   req.flash('success', 'Deleted successfully', false);
// });
router.get("/delete/:id",  newController.getItemAndDelete);

module.exports = router;

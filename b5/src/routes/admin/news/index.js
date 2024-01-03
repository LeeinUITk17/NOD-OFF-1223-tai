const express = require("express");
const router = express.Router();
const newController = require("../../../controllers/admin/news.controller");
const { body, validationResult } = require("express-validator");

const validateRequest = validations => {
  return async (req, res, next) => {
    try {
      // Array to store flash messages
      const flashMessages = [];

      for (let validation of validations) {
        const result = await validation.run(req);

        if (result.errors.length) {
          // Add flash messages for each validation error
          result.errors.forEach(error => {
            flashMessages.push({ type: "error", message: error.msg });
          });

          throw new Error("Validation error");
        }
      }

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        // Add flash messages for each validation error
        errors.array().forEach(error => {
          flashMessages.push({ type: "error", message: error.msg });
        });

        // Store flash messages in req.flash
        flashMessages.forEach(message => {
          req.flash(message.type, message.message);
        });

        return res.status(400).json({ errors: errors.array() });
      }

      return next();
    } catch (error) {
      // Handle unexpected errors
      console.error("Unexpected error during validation:", error);
      return res.status(500).send("Internal Server Error");
    }
  };
};

router.get("/", newController.getAll);
router.get("/form", newController.getForm);

router.post(
  "/form",
  validateRequest([
    body("name").isLength({ min: 6 }),
    body("status").exists().isString().isIn(["active", "inactive"]),
  ]),
  newController.addItem
);

router.get("/form/:id", newController.getItemById);

router.post(
  "/form/:id",
  validateRequest([
    body("name")
      .isLength({ min: 6 })
      .withMessage("Too short, the minimum length required is 6 characters."),
    body("status")
      .exists()
      .withMessage("Status is required")
      .isString()
      .isIn(["active", "inactive"])
      .withMessage('Status should be either "active" or "inactive"'),
  ]),
  newController.getItemAndUpdate
);

router.get("/delete/:id", newController.getItemAndDelete);

module.exports = router;

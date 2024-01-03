const { body, validationResult } = require("express-validator");
const notify = require("../config/notify");
const util = require("util");

const options = {
  name: { min: 2, max: 100 },
  discription: { min: 2, max: 100 },
  status: { active: "active", inactive: "inactive" },
};

const validationRules = {
  name: body("name")
    .isLength({ min: options.name.min, max: options.name.max })
    .withMessage(util.format(notify.name, options.name.min, options.name.max)),
  discription: body("discription")
    .isLength({ min: options.discription.min, max: options.discription.max })
    .withMessage(
      util.format(
        notify.discription,
        options.discription.min,
        options.discription.max
      )
    ),
  status: body("status").custom((value) => {
    if (value !== options.status.active && value !== options.status.inactive) {
      throw new Error(
        util.format(
          notify.status,
          options.status.active,
          options.status.inactive
        )
      );
    }
    return true;
  }),
};

const handleValidate = (listField) => {
  return listField.map((field) => validationRules[field]);
};

module.exports = {
  handleValidate,
};

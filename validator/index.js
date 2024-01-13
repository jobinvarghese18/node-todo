const { body } = require("express-validator");

const registerValidator = [
  body('email."Email is required').not().isEmpty(),
  body("email", "Invalid email").isEmail(),
  body("password", "Password is required").not().isEmpty(),
];

const loginValidator = [
  body("email", "Email is required").not().isEmpty(),
  body("email", "Invalid email").isEmail(),
  body("password", "Password required").not().isEmpty(),
  //   body("password", "Min length is 3").is,
];
module.exports = { registerValidator, loginValidator };

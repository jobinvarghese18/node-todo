const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controller/userController");
const { registerValidator, loginValidator } = require("../validator");
router.post("/", registerValidator, signUp);
router.post("/login", loginValidator, signIn);

module.exports = router;

const bcrypt = require("bcryptjs");
const User = require("../model/user");
const { validationResult } = require("express-validator");

const signUp = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const { email, name, password } = req.body;
      const isExist = await User.findOne({ email });
      if (isExist) {
        res.status(200).json({
          error: { message: "User already exist with the given email" },
        });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      res.status(201).json({ data: result });
    } else {
      console.log("err");
      res.status(422).json({ errors: error.array() });
    }
  } catch (err) {
    console.log(err);
  }
};

const signIn = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const { email, password } = req.body;
    } else {
      res.status(422).json({ error: error.array() });
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { signUp, signIn };

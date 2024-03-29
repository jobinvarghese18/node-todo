const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

      const user = new User({ name, email, password });
      const result = await user.save();
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

      const user = await User.findOne({ email });
      if (!user) {
        res.status(404).json({ error: { message: "User nof found" } });
      } else {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          console.log(process.env.JWT_SECRETE, "process.env.JWT_SECRETE");
          const token = await jwt.sign({ user }, process.env.JWT_SECRETE);
          res.status(200).json({ data: { user, access_token: token } });
        } else
          res.status(200).json({ message: { error: "Incorrect credentials" } });
      }
    } else {
      res.status(422).json({ error: error.array() });
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { signUp, signIn };

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const setPassword = (value) => {
  return bcrypt.hashSync(value, 10);
};

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "E-mail is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    set: setPassword,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

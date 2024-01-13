const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect("mongodb+srv://dev:dev@cluster0.c1o4ftn.mongodb.net/");
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;

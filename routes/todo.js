const express = require("express");
const { addTodo } = require("../controller/todo");
const router = express.Router();

router.post("/", addTodo);
module.exports = router;

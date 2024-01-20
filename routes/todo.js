const express = require("express");
const { addTodo } = require("../controller/todo");
const authorization = require("../middleware/authorization");
const router = express.Router();

router.post("/", authorization, addTodo);
module.exports = router;

const Todo = require("../model/todo");

const addTodo = async (req, res) => {
  try {
    const todo = new Todo({ ...req.body });
    const result = await todo.save();
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = { addTodo };

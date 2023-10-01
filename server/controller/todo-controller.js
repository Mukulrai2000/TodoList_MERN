import Todo from "../models/Todo.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllTodos = async (_, res) => {
  try {
    const allTodos = await Todo.find({}).sort({ "createdAt": -1 });
    return res.status(200).json(allTodos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
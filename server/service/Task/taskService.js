const { Task } = require("../../models/Task");
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user,
    });

    return res.status(200).json({
      data: tasks,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
const createTask = async (req, res) => {
  try {
    const { name, date, categoryId } = req.body;
    const { user } = req;
    const task = await Task.create({
      date,
      name,
      user,
      categoryId,
    });
    return res.status(201).json({
      message: "Task Created!",
      data: task,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.deleteMany({ _id: id });

    return res.status(200).json({
      message: "Task Deleted!",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isCompleted } = req.body;
    const task = await Task.updateOne(
      { _id: id },
      {
        $set: {
          isCompleted,
        },
      }
    );
    return res.status(202).json({
      message: "Updated Status!",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, categoryId, isEditable } = req.body;
    const task = await Task.updateOne(
      { _id: id },
      {
        $set: {
          date,
          name,
          isEditable,
          categoryId,
        },
      }
    );
    return res.status(201).json({
      message: "Task Updated!",
      data: task,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const getTaskByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.find({
      user: req.user,
      categoryId: id,
    });

    return res.status(200).json({
      data: tasks,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const getCompletedTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      isCompleted: true,
      user: req.user,
    });
    return res.status(200).json({
      data: tasks,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
const getTasksForToday = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tasks = await Task.find({
      date: today.toISOString(),
      user: req.user,
    });

    return res.status(200).json({
      data: tasks,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllTask,
  createTask,
  deleteTask,
  updateTask,
  updateTaskStatus,
  getTaskByCategory,
  getCompletedTasks,
  getTasksForToday,
};

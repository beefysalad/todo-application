const port = 3000 || process.env.PORT;
const express = require("express");
const app = express();
const { connect } = require("./configs/db");
const { authMiddleware } = require("./middleware/authMiddleware");
const { createUser, login } = require("./service/User/userService");
const {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("./service/Category/categoryService");
const {
  getAllTask,
  createTask,
  deleteTask,
  updateTask,
  updateTaskStatus,
  getTaskByCategory,
  getCompletedTasks,
  getTasksForToday,
} = require("./service/Task/taskService");
const cors = require("cors");
console.clear();

app.use(express.json());

app.use(cors());

connect();

app.get("/ping", (req, res) => {
  return res.status(200).json({
    message: "pong",
  });
});

// USER CREATION AND LOGIN (AUTHEN)
app.post("/create-user", createUser);
app.post("/login", login);

// Category
app.get("/category", authMiddleware, getAllCategories);
app.post("/category", authMiddleware, createCategory);
app.delete("/category/:id", authMiddleware, deleteCategory);
app.patch("/category/:id", authMiddleware, updateCategory);

// Tasks
app.get("/task", authMiddleware, getAllTask);
app.post("/task", authMiddleware, createTask);
app.delete("/task/:id", authMiddleware, deleteTask);
app.patch("/task/:id", authMiddleware, updateTask);
app.patch("/task/status/:id", authMiddleware, updateTaskStatus);
app.get("/task/category/:id", authMiddleware, getTaskByCategory);
app.get("/task-completed", authMiddleware, getCompletedTasks);
app.get("/task-today", authMiddleware, getTasksForToday);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

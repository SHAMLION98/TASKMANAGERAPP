const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

const router = express.Router();

router
  .post("api/task/createTask", authMiddleware, createTask)
  .get("/task/:id", authMiddleware, getTasks)
  .put("/task/:id", authMiddleware, updateTask)
  .delete("/task/:id", authMiddleware, deleteTask);

module.exports = router;

const express = require("express");
const Task = require("../models/taskSchema");
const {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

const router = express.Router();
router.route("/addtask").post(createTask);
router.route("/getAllTask").get(getAllTask);
router.route("/:_id").get(getTaskById);
router.route("/:_id").patch(updateTask);
router.route("/:_id").delete(deleteTask);

module.exports = router;

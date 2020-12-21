const mongoose = require("mongoose");
const uniqid = require("uniqid");
const bcrypt = require("bcrypt");

const taskSchema = mongoose.Schema(
  {
    taskid: {
      type: String,
      default: "task" + uniqid(),
    },

    taskname: {
      type: String,
      required: [true, "task name is required"],
    },

    status: {
      type: String,
      default: "Not Started",
      enum: ["Not Started", "In Progress ", "Completed"],
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;

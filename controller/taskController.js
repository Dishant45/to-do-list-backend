const Task = require("../models/taskSchema");

const createTask = (req, res) => {
  const Task1 = new Task({
    taskname: req.body.taskname,
    status: req.body.status,
    if(err) {
      res.send(err);
      return err;
    },
  });
  Task1.save();
  res.send("task created");
};

const getAllTask = async (req, res) => {
  const tasks = await Task.find((err, data) => {
    try {
      if (!err) {
        res.send(data);
      } else {
        res.send(err);
      }
    } catch {
      return err;
    }
  });
};

const getTaskById = async (req, res) => {
  await Task.findById({ _id: req.params._id }, (err, data) => {
    try {
      if (!err) {
        res.send(data);
      } else {
        res.send(err);
      }
    } catch {
      return err;
    }
  });
};

const updateTask = (req, res) => {
  const task = Task.findByIdAndUpdate(
    { _id: req.params._id },
    { status: req.body.status },
    (err, data) => {
      if (err) {
        res.send("could not update");
      } else {
        res.send("updated succesfully");
      }
    }
  );
};

const deleteTask = (req, res) => {
  const task = Task.findByIdAndDelete({ _id: req.params._id }, (err, data) => {
    if (err) {
      res.send("task not deleted");
    } else {
      res.send("task deleted succesfully");
    }
  });
};

module.exports.createTask = createTask;
module.exports.getAllTask = getAllTask;
module.exports.getTaskById = getTaskById;
module.exports.updateTask = updateTask;
module.exports.deleteTask = deleteTask;

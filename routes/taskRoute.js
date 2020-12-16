const express = require("express");
const Task = require("../models/userSchema");
const {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

const router = express.Router();
router.route("/task").post(createTask);
router.route("/getAllTask").get(getAllTask);
router.route("/:taskid").get(getTaskById);
router.route("./updateTask").patch(updateTask);
router.route("./deleteTask").patch(deleteTask);

module.exports = router;
// router.get("/getALlTask", async (req, res) => {
//   const tasks = awsait Task.find((data, err) => {
//     try {
//       if (!err) {
//         res.send(data);
//         console.log(data);
//       } else {
//         console.log(err);
//       }
//     } catch {
//       return err;
//       console.log(err);
//     }
//   });
// });

// // const taskrouter = router.get("/task/:id", (req, res) => {
// //   const data = Task.findById((req.params.id) => {
// //     try {
// //       if (!err) {
// //         res.send(data);
// //         console.log(data);
// //       } else {
// //         console.log(err);
// //       }
// //     } catch {
// //       return err;
// //     }
// //   });
// // });
// router.post("/addTask", async (req, res) => {
//   const task = new Task({
//     taskId: req.body.taskID,
//     taskName: req.body.taskNmae,
//     status: req.body.status,
//   });
//   try {
//     await task.save();
//   } catch (err) {
//     res.send("error");
//   }
// });
// router.patch("/:id", async (req, res) => {
//   try {
//     const task = await Task.findById(req.param.id);
//     task.status = req.body.status;
//     const t1 = await task.save();
//   } catch (err) {
//     res.send("error");
//   }
// });
// router.patch("/:id", async (req, res) => {
//   try {
//     const task = await Task.findById(req.param.id);
//     task.status = req.body.status;
//     const t1 = await task.remove();
//   } catch (err) {
//     res.send("error");
//   }
// });

module.exports = router;

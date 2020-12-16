const express = require("express");
const router = express.Router();
const {
  createUser,
  findAllUser,
  findUserById,
  updateUserById,
} = require("../controller/userController");

router.route("/createuser").post(createUser);
router.route("/alluser").get(findAllUser);
router.route("/:userid").get(findUserById);
router.route("/:updatebyid").patch(updateUserById);

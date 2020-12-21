const express = require("express");
const router = express.Router();
const {
  createUser,
  findAllUser,
  findUserById,
  updateUserById,
  deleteUserById,
} = require("../controller/userController");
const {
  checkConfirmPassword,
  checkUserParameters,
  checkloginPassword,
  loginUser,
} = require("../controller/uservalidation");
router.route("/signup").post(checkConfirmPassword, createUser);
router
  .route("/loginuser")
  .post(checkUserParameters, loginUser, checkloginPassword);
router.route("/alluser").get(findAllUser);
router.route("/:_id").get(findUserById);
router.route("/:_id").patch(updateUserById);
router.route("/:_id").delete(deleteUserById);

module.exports = router;

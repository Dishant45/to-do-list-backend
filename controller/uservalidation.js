const User1 = require("../models/userSchema");

const checkUserParameters = (req, res, next) => {
  const validationArray = ["email", "password"];
  let userValid = validationArray.every((key) => {
    return req.body[key] && req.body[key].trim().length;
  });
  if (!userValid) {
    res.send("Invalid Body");
    return new Error("Invalid requuest Body");
  }
  next();
};

const checkConfirmPassword = (req, res, next) => {
  if (req.body.password !== req.body.confirmpassword) {
    return res.send("Confirm password is not matching the password");
  }
  res.send("password and confirm password matched");
  res.send("user created");
  next();
};
const loginUser = async (req, res, next) => {
  await User1.find((user) => {
    return User1.email == req.body.email;
    try {
      res.json({ user });
    } catch {
      res.send("could not find user");
    }
  });
  next();
};
const checkLoginPassword = (req, res, next) => {
  User1.findOne({ password: req.body.password }, (err, data) => {
    if (err) {
      res.send("password is wrong");
    } else {
      res.send("user logged in succesfully");
    }
  });
};
module.exports.checkloginPassword = checkLoginPassword;
module.exports.checkUserParameters = checkUserParameters;
module.exports.checkConfirmPassword = checkConfirmPassword;
module.exports.loginUser = loginUser;

const User = require("../models/userSchema");
const createUser = (req, res) => {
  let User1 = new User({
    email: req.body.email,
    password: req.body.password,
    confirmpassword: req.body.confirmpassword,
    if(err) {
      res.send(err);
      return err;
      console.log(err);
    },
  });

  User1.save();
  res.send("user created");
};
const findAllUser = async (req, res, body) => {
  await User.find((err, data) => {
    try {
      if (!err) {
        res.send(data);
      } else {
        res.send(err);
      }
    } catch {
      res.send(err);
    }
  });
};

const findUserById = async (req, res) => {
  await User.findById({ _id: req.params._id }, (err, data) => {
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

const updateUserById = (req, res) => {
  const user = User.findByIdAndUpdate(
    { _id: req.params._id },
    { email: req.body.email },
    (err, data) => {
      if (err) {
        res.send("could not update");
      } else {
        res.send("updated succesfully");
      }
    }
  );
};

const deleteUserById = (req, res) => {
  const user = User.findByIdAndDelete({ _id: req.params._id }, (err, data) => {
    if (err) {
      res.send("user not deleted");
    } else {
      res.send("User deleted succesfully");
    }
  });
};

module.exports.createUser = createUser;
module.exports.findAllUser = findAllUser;
module.exports.findUserById = findUserById;
module.exports.updateUserById = updateUserById;
module.exports.deleteUserById = deleteUserById;

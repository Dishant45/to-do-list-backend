const mongoose = require("mongoose");
const uniqid = require("uniqid");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema(
  {
    userid: {
      type: String,
      default: "user" + uniqid(),
    },
    email: {
      type: String,
      required: [true, "email id required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    confirmpassword: {
      type: String,
      required: [true, "required password is required"],
    },
  },

  {
    timestamps: true,
  }
);
userSchema.method.generateHash = async function () {
  let salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(this.password, this.confirmpassword, hash);
  return hash;
};
userSchema.pre("save", function (next) {
  console.log("this implementation is working");
  console.log(this);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;

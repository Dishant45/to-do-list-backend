const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const uniqid = require("uniqid");
dotenv.config({ path: "./config.env" });

mongoose.connect(
  process.env.URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("succes");
    } else {
      console.log("err");
    }
  }
);
const app = express();

const taskRouter = require("./routes/taskRoute");
// const taskrouter = require("./routes/taskRoute");
app.use("/task", taskRouter);


app.listen(3000, () => {
  console.log("server started at port 3000");
});

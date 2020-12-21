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
      console.log("succes started database");
      const app = express();
      app.use(express.json());
      const userRouter = require("./routes/userRoute");
      app.use("/user", userRouter);
      const taskRouter = require("./routes/taskRoute");
      app.use("/task", taskRouter);

      app.listen(process.env.PORT, () => {
        console.log(`server started at port ${process.env.PORT}`);
      });
    } else {
      console.log("err");
    }
  }
);

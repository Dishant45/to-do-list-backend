const mongoose = require("mongoose");
const uniqid = require("uniqid");
const bcrypt= require("bcrypt");

const taskSchema = mongoose.Schema(
  {
      taskID{
          type:String,
          default:"task"+uniqid(),
      },

      taskName{
          type:String,
         validate:{
            validator: function (){
                console.log("This is Task Validator",this);
                return this.taskName.trim().length;
            },
            message:"Task name should be a non empty string",
         },
      },
      status:{
          type:String,
          default:"Not Started",
          enum:["Not Started","In Progress " "Completed"],
      }
      
      {
    timestamps: true,
  }
  });

  const Task = mongoose.model("Task",taskSchema);
  mudule.exports=Task;
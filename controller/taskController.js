const Task = require("../models/userSchema");
// outer.post("/addTask", async (req, res) => {
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
const createTask=async(req,res)=>{
   const Task1=new Task({
         taskId: req.body.taskID,
       taskName: req.body.taskNmae,
         status: req.body.status,

    })
    try{
        await Task1.save();
    }
    catch(err){
        res.send("err");
    }
};
const getAllTask=async(req,res)=>{
    const tasks=await Task.find((err,data)=>{
        try{
            if(!err){
                res.send(data);
            }
            else{
                res.send(err);
            }
            
        }
        catch{
                return err;
            }
    });
}

const getTaskById=async(req,res)=>{
    await Task.findone({taskid:req.headers.taskid}(err,data)=>{
        try{
            if(!err){
                res.send(data);
            }
            else{
                res.send(err);
            }
            
        }
        catch{
                return err;
            }
    });

    }

    const updateTask=(req,res)=>{
        try {
    const task = await Task.findById(req.param.id);
    task.status = req.body.status;
    const t1 = await task.save();
  } catch (err) {
    res.send("error");
  }
    }

    const deleteTask=(req,res)=>{
        try {
    const task = await Task.findOneAndDeletes(req.param.id);
    task.status = req.body.status;
    const t1 = await task.delete();
  } catch (err) {
    res.send("error");
  }
    }
    module.exports.createTask= createTask;
    module.exports.getAllTask=getAllTask;
    module.exports.getTaskById=getTaskById;
      module.exports.updateTask=updateTask;
    module.exports.deleteTask=deleteTask;

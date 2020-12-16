const User = require("../models/userSchema");
const User = require("../models/userSchema");
const { findById } = require("../models/userSchema");
const { createTask } = require("./taskController");
const createUser = async(req, res) => {
  await let user = new User({
    userId: req.body.userId,
    email: req.body.email,
    password: req.body.password,
    timstamp: date.now(),
    try{
        await Task.save();
    }
    catch(err){
        return err;
    }
  });
};
const findAllUser= async(req,body)=>{
    await User.find((err,data)=>{
        try{
            if(!err){
                res.send(data);
            }
            else{
                res.send(err);
            }
            catch{
                res.send(err);
            }
        }
    
});
};

const findUserById= async (req,res) => {
    await findById({userId:req.header.userid}(err,data)=>{
        try{
            if(err){
                res.send(err);
            }
            else{
                res.send(data);
            }
        }
        catch{
            return err;
        }

    }

}
const updateUserById= async (req,res) => {
 try{
        const user=await findById(req.param.email);
        user.email=req.body.email;
        const t2=await user.save();
        
 }
 catch(err){
     res.send(err);
 }

    }


module.exports.createUser=createTask;
module.exports.findAllUser=findAllUser;
module.exports.findUserById=findUserById;
module.exports.updateUserById=updateUserById;
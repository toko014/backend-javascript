const {Router}= require("express")
const userModel = require("../models/user.model")
const userRouter= Router()
userRouter.get("/",async(req,res)=>{
   const findAllUser= await userModel.find()
   res.json(findAllUser)
})
module.exports=userRouter
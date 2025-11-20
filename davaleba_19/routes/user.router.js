const { Router } = require("express")
const usersModel = require("../models/users.model")
const { isValidObjectId } = require("mongoose")

const userRouter=Router()

userRouter.get("/",async(req,res)=>{
    const findUsers=await usersModel.find().select("-password")
    res.json({message:"user found successfully",data:findUsers})
})

userRouter.get("/:id",async(req,res)=>{
    const userId=req.params.id
    if(isValidObjectId(userId)){
        res.status(400).json("invalid id")
    }
    const finduser=await usersModel.findById(userId).select("-password")
    res.json({message:"user found successfully",data:findUser})
})
userRouter.delete("/:id",async(req,res)=>{
    const userId=req.params.id
    if(isValidObjectId(userId)){
        res.status(400).json("invalid id")
    }
    const deleteUser=await usersModel.findByIdAndDelete(userId)
    res.json({message:"user deleted successfully",data:deleteUser})
})

userRouter.put("/:id",async(req,res)=>{
    const userId=req.params.id
    const {fullname,email}=req.body
    if(isValidObjectId(userId)){
        res.status(400).json("invalid id")
    }
    const updateUser=await usersModel.findByIdAndUpdate(userId,{fullname,email},{new:true})
    res.json({message:"user updated successfully",data:updateUser})
})

module.exports=userRouter
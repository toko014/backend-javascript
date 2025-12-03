const { Router } = require("express");
const { default: mongoose } = require("mongoose");
const usersModel = require("../models/users.model");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
authRouter=Router()

authRouter.post("/signup",async(req,res)=>{
    const{fullname,email,password}=req.body
    if(!fullname || !email || !password){
        res.status(400).json("all fields are required")
    }
    const checkUserExists=await usersModel.findOne({email:email})
    if(checkUserExists){
        res.status(400).json("user already registered")
    }
    console.log(password,"password")
    const hashedPassword= await bcrypt.hash(password,10)
    await usersModel.create({fullname,email,password:hashedPassword})
    res.json({message:"success"})
})
authRouter.post("/signin",async(req,res)=>{
    const{fullname,email,password}=req.body
    if(!email || !password){
        res.status(400).json("all fields are required")
    }
    const checkUserExists=await usersModel.findOne({email:email})
    if(!checkUserExists){
        res.status(400).json("invalid credentials")
    }
    const isequalPassword=await bcrypt.compare(password,checkUserExists.password)
    console.log(isequalPassword)
    if(!isequalPassword){
        res.status(400).json("invalid credentials")
    }
    const payLoad={
        userId:checkUserExists._id
    }
    const token=jwt.sign(payLoad,process.env.JWT_SECRET,{expiresIn:"1h"})
    res.json({message:"token created successfully",data:token})
})
module.exports={authRouter}
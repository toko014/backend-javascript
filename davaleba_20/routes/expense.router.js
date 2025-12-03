const { Router } = require("express");
const { default: mongoose } = require("mongoose");
const expensesModel = require("../models/expenses.model");

const expensesRouter=Router()

expensesRouter.get("/",async(req,res)=>{
    const expenses=await expensesModel.find().populate("user","-password")
    res.json({message:"success",data:expenses})
})

expensesRouter.post("/",async(req,res)=>{
    const {price,desc}=req.body
    if(!price || !desc ){
        return res.status(400).json({message:"missing fields"})
    }
    const newExpense= await expensesModel.create({price,desc,user:req.userId})
    res.json({message:"successfully",data:newExpense})
})

module.exports={expensesRouter}
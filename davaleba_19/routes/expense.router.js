const { Router } = require("express");
const { default: mongoose } = require("mongoose");
const expensesModel = require("../models/expenses.model");

const expensesRouter=Router()

expensesRouter.get("/",async(req,res)=>{
    const expenses=await expensesModel.find()
    res.json({message:"success",data:expenses})
})

module.exports={expensesRouter}
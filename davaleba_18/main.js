const express=require("express")
require('dotenv').config();
const connectToDB = require("./config/connectDB")
const productRouter = require("./route/product.route")
const app=express()
app.use(express.json())
connectToDB()
app.use("/products",productRouter)
app.get("/",(req,res)=>{
    res.send("nice json")
})

app.listen(3030,()=>{
    console.log(`server is here http://localhost:3030`)
})
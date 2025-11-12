const express=require("express")
const connectToDB = require("./config/connectDB")
const userRouter = require("./route/user.route")
const app=express()
app.get("/users",userRouter)
app.get("/",(req,res)=>{
    res.send("nice json")
})
connectToDB()
app.listen(3030,()=>{
    console.log(`server is here http://localhost:3030`)
})
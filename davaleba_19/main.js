require('dotenv').config();
const express=require("express");
const connectToDB = require("./config/connectToDB");
const userRouter = require('./routes/user.router');
const { authRouter } = require('./auth/auth.router');
const { expensesRouter } = require('./routes/expense.router');
const { isAuth } = require('./middleware/isAuth.middleware');


const app=express()
app.use(express.json())
connectToDB()
app.use("/users",userRouter)
app.use("/auth",authRouter)
app.use("/expenses",isAuth,expensesRouter)
app.get("/",(req,res)=>{
    res.json("this is users")
})

app.listen(3030,()=>{
    console.log(`server is her http://localhost:3030`)
})
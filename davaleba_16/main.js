const express=require("express")
const { prodRouter } = require("./products/products.route")
const secretRouter = require("./secret/sercret.route")
const  {logger}  = require("./products/middleware/logger.middleware")
const app=express()
const PORT=3030
app.use(express.json())
app.use(logger)
app.use("/products",prodRouter)
app.use("/secret",secretRouter)

app.listen(PORT,()=>{
    console.log(`server is here http://localhost:${PORT}`)
})
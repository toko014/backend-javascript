const express=require("express")
const { productsRouter } = require("./products/products.route")
const { logger } = require("./products/middleware/logger.middleware")
const secretRouter = require("./secret/secret.route")
const app=express()
const PORT=3030
app.use(express.json())
app.use(logger)
app.use("/secret",secretRouter)
app.use("/products",productsRouter)
app.listen(PORT,()=>{
    console.log(`server is here http://localhost:${PORT}`)
})

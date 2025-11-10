const express=require("express")
const isValidApiKeyMiddleware = require("../products/middleware/isValidApiKey.middleware")
const secretRouter=express.Router()
secretRouter.get("/",isValidApiKeyMiddleware,(req,res)=>{
    res.json("valid api key")
})
module.exports=secretRouter
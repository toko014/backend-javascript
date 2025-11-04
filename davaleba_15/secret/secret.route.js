const { Router } = require("express")
const isValidApiKeyMiddleware = require("../products/middleware/isValidApiKey.middleware")


const secretRouter = Router()


secretRouter.get("/",isValidApiKeyMiddleware,(req,res) => {
    res.json("secret info")
})

module.exports=secretRouter
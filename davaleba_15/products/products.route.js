const express=require("express")
const { createProduct, findProduct, deleteProduct, updateProduct, pagination } = require("./products.service")
const isEditorMiddleware = require("./middleware/isEditor.middleware")
const isAdminMiddleware = require("./middleware/isAdmin.middleware")
const productsRouter=express.Router()
productsRouter.get("/",pagination)
productsRouter.get("/:id",findProduct)
productsRouter.post("/",createProduct)
productsRouter.delete("/:id",isAdminMiddleware,deleteProduct)
productsRouter.put("/:id",isAdminMiddleware,isEditorMiddleware,updateProduct)




module.exports={productsRouter}
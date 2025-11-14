const {Router}= require("express")
const productModel = require("../models/product.model")
const { isValidObjectId } = require("mongoose")
const { findall, createproduct, deleteproduct, updateproduct, pagination,  } = require("./product.service")

const productRouter= Router()

productRouter.get("/",pagination)
productRouter.get("/:id",findall)

productRouter.post("/",createproduct)

productRouter.delete("/:id",deleteproduct)

productRouter.put("/:id",updateproduct)
module.exports=productRouter
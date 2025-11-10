const express= require("express")
const { deletion, pagination, creation, find, updating } = require("./products.service")
const isAdminMiddleware = require("./middleware/isAdmin.middleware")
const isEditorMiddleware = require("./middleware/isEditor.middleware")
const prodRouter=express.Router()
prodRouter.get("/",pagination)
prodRouter.get("/:id",find)
prodRouter.delete("/:id",isAdminMiddleware,deletion)
prodRouter.post("/",creation)
prodRouter.put("/:id",isAdminMiddleware,isEditorMiddleware,updating)



module.exports={prodRouter}
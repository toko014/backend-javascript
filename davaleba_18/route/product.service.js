const { isValidObjectId } = require("mongoose")
const productModel = require("../models/product.model")
const minprice=2
const maxprice=4000
const pagination = async(req,res)=>{
    const{ page=1, limit=3}=req.query
    const products= await productModel.find()
    console.log(products)
    const paginated=products.slice((page-1)*limit,page*limit)
    res.json({message:"showing results",data:paginated})
}
const findall=async(req,res)=>{
   const {id}=req.params
   if(!isValidObjectId(id)){
      return res.status(404).json({message:"not valid id"})
   }
   const findById= await productModel.findById(id)
   res.json({message:"id found",data:findById})
}

const createproduct=async(req,res)=>{
   const{name,price,category,description}=req.body
   if(!name || !price || !category){
      return res.status(400).json({message:"you are missing  fields"})
   }
   if(typeof name!=="string"){
      return res.status(400).json({message:"name must be a string"})
   }
   
   const createproduct= await productModel.create({name,price,category,description})
   res.json({message:"success",data:createproduct})
}

const deleteproduct=async(req,res)=>{
   const{id}=req.params
   if(!isValidObjectId(id)){
      return res.status(400).json({message:"not valid id"})
   }
   const deletedproduct= await productModel.findByIdAndDelete(id)
   res.json({message:"deleted successfully",data:deletedproduct})
}

const updateproduct=async(req,res)=>{
   const{id}=req.params
   const{name,price,category,description}=req.body
    if(!isValidObjectId(id)){
      return res.status(400).json({message:"not valid id"})
   }
   if(!name || !price || !category || !description){
      return res.status(400).json({message:"you should include all fields"})
   }
   if(price<minprice || price>maxprice){
      return res.status(400).json({message:`price should be between ${minprice} and ${maxprice}`})
   }
   const updatedproduct=await productModel.findByIdAndUpdate(id,{name,price,category,description},{new:true})
   res.json({message:"success update",data:updatedproduct})
}


module.exports={findall,createproduct,deleteproduct,updateproduct,pagination}
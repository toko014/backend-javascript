const { default: mongoose } = require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        reqiored:true
    },
    description:{
        type:String
    }
},{
    timestamps:true
})

module.exports=mongoose.model("products",productSchema)
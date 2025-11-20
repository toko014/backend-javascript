const { default: mongoose, mongo } = require("mongoose");

const userSchema= new mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    expenses:{
        type:[mongoose.Schema.Types.ObjectId],ref:"expenses",default:[]
    }
},
    {
        timestamps:true
    
})

module.exports=mongoose.model("user",userSchema)

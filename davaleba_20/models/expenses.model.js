const { default: mongoose } = require("mongoose");

const expensesSchema=mongoose.Schema({
    price:{
        type:Number
    },
    desc:{
        type:String
    },
    user:{
        type:mongoose.Types.ObjectId,ref:"user"
    }

})

module.exports=mongoose.model("expenses",expensesSchema)
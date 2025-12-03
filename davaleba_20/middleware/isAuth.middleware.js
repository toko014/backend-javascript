const jwt=require("jsonwebtoken")
require("dotenv").config()
function getToken(headers){
    console.log(headers)
    if(!headers["authorization"]){
        return null
    }
    const[type,token]=headers["authorization"].split(" ")
    return type==="Bearer" ? token : null
}

async function isAuth(req,res,next) {
    const token=getToken(req.headers)
    console.log(token)
    if(!token){
       return res.status(404).json({message:"token not found"})
    }
    try{
        const payload=jwt.verify(token,process.env.JWT_SECRET)
        req.userId=payload.userId
        next()
    }
    catch{
        return res.status(404).json({message:"wrong token"})
    }
}

module.exports={isAuth,getToken}
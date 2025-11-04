function logger(req,res,next){
    console.log(req.method,new Date().toString())
    next()
}

module.exports={logger}
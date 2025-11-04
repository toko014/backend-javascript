module.exports = (req,res,next) => {
    const secretKey = req.headers.secret
    if(!secretKey || secretKey !=="12345"){
        return res.status(403).json({message:"unauth",data:"ver gagatan am infos"})
    }
    next()
}
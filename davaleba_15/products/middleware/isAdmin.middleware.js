module.exports = (req,res,next) => {
    const isAdminRole = req.headers.admin
    const isEditor=req.headers.editor
    if(checkForEditor(isEditor,req.method)){
        console.log("wtf")
    }
    if((!isAdminRole ||isAdminRole !== "testAdmin12344321") && !checkForEditor(isEditor,req.method)){
        return res.status(403).json({message:"unAuth",data:"shen arxar admini"})
    }
    next()
}

function checkForEditor(isEditor,method){
    if(method==="PUT" && isEditor==="testEditor12344321"){
        return true
    }
    return false
}
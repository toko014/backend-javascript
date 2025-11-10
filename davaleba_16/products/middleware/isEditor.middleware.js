module.exports = (req,res,next) => {
    const isEditorRole = req.headers.editor
    if(!isEditorRole || isEditorRole !== "testEditor12344321"){
        return res.status(403).json({message:"unAuth",data:"shen xar editori da ar gaqvs ufleba"})
    }
    let bodyReq=""
    let count=0
    for(let key in req.body){
        if(key==="status"){
            bodyReq=key;
            count++
        }
        if (!(count===1 && bodyReq==="status")){
            return res.status(403).json({message:"shen mxolod statusis shecvla shegidzlia"})
        }
    }
    next()
}
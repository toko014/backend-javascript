module.exports = (req,res,next) => {
    const isEditorRole = req.headers.editor
    if(!isEditorRole || isEditorRole !== "testEditor12344321"){
        return res.status(403).json({message:"unAuth",data:"shen xar editori da ar gaqvs ufleba"})
    }
    next()
}


const express = require("express")
const app = express()
const PORT =3030


app.use(express.json())


const users = [
    {
        id:1,
        name:"tornike",
        age:2,
        email: "tornike@gmail.com",
        eyecolor:"white"
    }
]


app.get("/",(req,res) => {
    res.json("this is '/' request")
})

app.get("/api",(req,res) => {
   let {page=1,take=3} = req.query
   take > 4 ? take = 4 : take
   res.json(users.slice((page-1)*take,take*page))
})


app.get("/api/:id",(req,res) => {
    const {id} = req.params
    availableUsers=users.find(el=> el.age <10 && el.age>30 )
    const findUsers = availableUsers.find(el => el.id === Number(id))
    if(!findUsers){
        return res.status(404).json({message:"not found (id is invalid)",data:null})
    }
    res.json({message:"success",data:findUsers})
})



app.post("/api",(req,res) => {
    const {name,age,email,eyecolor} = req.body
    if(!name){
        return res.status(400).json({message:"name is require",data:null})
    }
    if(!age){
        return res.status(400).json({message:"age is require",data:null})
    }
    if(age<10 || age > 30 ){
        return res.status(400).json({message:"age must be between 10 and 30"
        })
    }
    const lastID = users[users.length - 1]?.id || 0
    const newObj = {
        id:lastID + 1,
        name,
        age,
        email,
        eyecolor
        
    }

    users.push(newObj)

    res.json({message:"added successfully",data:users})
})


app.delete("/api/:id",(req,res) => {
    const {id} = req.params
    const index = users.findIndex(el => el.id === Number(id))
    if(index === -1){
        return res.status(404).json({message:"id is invalid"})
    }

    const deleteUser = users.splice(index,1)

    res.json({messsage:"deleted successfully",data:deleteUser})
})


app.put("/api/:id",(req,res) => {
    const {id} = req.params
    const {name,age,email,eyecolor} = req.body

     const index = users.findIndex(el => el.id === Number(id))

    if(index === -1){
        return res.status(404).json({message:"id is invalid"})
    }
if(age<10 || age > 30 ){
        return res.status(400).json({message:"cant update age must be between 10 and 30"
        })
    }
    users[index] = {
        ...users[index],
        name:name||users[index].name,
        age:age||users[index].age,
        email:email||users[index].email,
        eyecolor:eyecolor||users[index].eyecolor
    }

    res.json({message:"updated successfully",data:users[index]})
})






app.get("/secret",(req,res) => {
    const secretKey = req.headers.secret
    if(!secretKey || secretKey !=="12345"){
        return res.status(403).json({message:"unauth",data:"ver gagatan am infos"})
    }
    res.json("secret info")
})



app.listen(PORT,() =>{
    console.log(`serve runnning on http://localhost:${PORT}`)
})
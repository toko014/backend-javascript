const http = require("http")
const PORT = 8080
const url = require("url")
const queryString = require("querystring")
const fs = require("fs/promises")

const server = http.createServer(async (req,res) => {
    res.writeHead(200,{"content-type":"application/json"})
    const parsedURL = url.parse(req.url)
    const query = queryString.parse(parsedURL.query)
    console.log(query)
    const readUserData = await fs.readFile("users.json","utf-8")
    const parseUserData = JSON.parse(readUserData)

    const readPostData = await fs.readFile("posts.json","utf-8")
     const parsePostsData = JSON.parse(readPostData)
   if(parsedURL.pathname === "/"){
     return res.end("avto")
   }else if(parsedURL.pathname === "/users" ||parsedURL.pathname === "/posts"){
    if(query.id){
        const findUserById = parseUserData.find(el => el.id === Number(query.id))
        if(!findUserById) {
            return res.end(" nothing found")
        }
        return res.end(JSON.stringify(findUserById))
    } else if(parsedURL.pathname === "/users" && query.title){
        const findUserByTitle = parseUserData.find(el => el.title === query.title)
        console.log(findUserByTitle)
        if(!findUserByTitle){
            return res.end("user not found")
        }
        return res.end(JSON.stringify(findUserByTitle))
    }
    
    let {page=1,take=30} = query
    if(take > 30){
        take = 30
    }
    const resultUsers = parsePostsData.slice((page-1) * take,take * page)
    return res.end(JSON.stringify(resultUsers))
   }
})

server.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`)
})
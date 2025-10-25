//c4) დაწერე http სერვერი და გამოდგი 3 ენდფოინითი (/animals,/cars,/motorcycle)
const http = require("http")
const html = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="background-color: blue;">
        <div style="background-color: red; display: flex; justify-content: center; align-items: center;">
            <h1>hello world</h1>
        </div>
    </div>
</body>
</html>

`

const animals = [
    {
        id:1,
        name:"kata",
        
    },
    {
        id:2,
        name:"dzagli",
        
    },
    {
        id:3,
        name:"vefxvi",
        
    },
    {
        id:4,
        name:"lomi",
        
    },
    
]
const motorcycle = [
    {
        id:1,
        name:"sport moto",
        
    },
    {
        id:2,
        name:"casual moto",
        
    },
    {
        id:3,
        name:"offroad moto",
        
    },
    
]
const cars = [
    {
        id:1,
        name:"mercedes",
        
    },
    {
        id:2,
        name:"bmw",
        
    },
    {
        id:3,
        name:"audi",
        
    },
    
]

const server = http.createServer((req,res) => {
    if(req.url === "/animals"){
        res.writeHead(200,{"content-type":"application/json"})
        res.write(JSON.stringify(animals))
        res.end()
    }

    if(req.url === "/motorcycle"){
        res.writeHead(200,{"content-type":"application/json"})
        res.write(JSON.stringify(motorcycle))
        res.end()
    }
    if(req.url === "/motorcycle"){
        res.writeHead(200,{"content-type":"application/json"})
        res.write(JSON.stringify(cars))
        res.end()
    }

   if(req.url === "/"){
       res.writeHead(200,{"content-type":"text/html"})
       res.write(html)
       res.end()
   }

})


server.listen(8080,() => {
    console.log("server runnin on http://localhost:8080")
})
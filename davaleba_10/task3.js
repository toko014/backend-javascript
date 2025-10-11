//3)შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში
const fs= require("fs/promises")
let userArr = [
    {
        name:"nika",
        age:33,
        email:"nika@gmail.com"
    },
    {
        name:"mariami",
        age:23,
        email:"mariami@gmail.com"
    },
]


async function main() {
    fs.writeFile("data.json",JSON.stringify(userArr))
    let readJSON = await fs.readFile("data.json","utf-8")
    let textTOJSon = JSON.parse(readJSON)
    console.log(textTOJSon)
}

main()
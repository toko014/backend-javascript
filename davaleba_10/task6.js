//6)წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე

const fs= require("fs/promises")

let user = [
    {
        name:"nika",
        age:10,
    },
    {
        name:"giorgi",
        age:17,
    },
    {
        name:"nini",
        age:22,
    },
    {
        name:"mariami",
        age:30,
    },
]

async function main() {
    fs.writeFile("data.json",JSON.stringify(user))
    let readJSon = await fs.readFile("data.json","utf-8")
    let strToArr = JSON.parse(readJSon)
    let filteredArr = strToArr.filter(el => el.age > 18)
    fs.writeFile("main.json",JSON.stringify(filteredArr))
}
main()

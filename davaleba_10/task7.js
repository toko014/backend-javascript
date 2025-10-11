//7)შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
//შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ "passed.json" - ში

const fs= require("fs/promises")

let students = [
    {
        name:"nika",
        score:50,
        passed:"passed"
    },
    {
        name:"giorgi",
        score:77,
        passed:"passed"
    },
    {
        name:"nini",
        score:62,
        passed:"passed"
    },
    {
        name:"mariami",
        score:30,
        passed:"passed"
    },
]

async function main() {
    fs.writeFile("students.json",JSON.stringify(students))
    let readJSon = await fs.readFile("students.json","utf-8")
    let strToArr = JSON.parse(readJSon)
    let filteredArr = strToArr.filter(el => el.score > 50)
    fs.writeFile("passed.json",JSON.stringify(filteredArr))
}
main()
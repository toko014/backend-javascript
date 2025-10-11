//2)ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში
const fs= require("fs/promises")

async function main() {
    fs.writeFile("text.txt","normal text")
    let read= await fs.readFile("text.txt","utf-8")
    let stringArr=read.split("")
    let reversedString= stringArr.reverse().join("")
    fs.writeFile("result.txt",reversedString)
}

main()
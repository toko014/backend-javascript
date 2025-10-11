//5)ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა
const fs= require("fs/promises")

async function main() {
    fs.writeFile("text.txt","quick brown fox jumps over the lazy dog")
    let readText= await fs.readFile("text.txt","utf-8")
    let countWords=readText.split(" ").length
    console.log(countWords)

}

main()
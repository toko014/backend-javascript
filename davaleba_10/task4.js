// წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში
const fs= require("fs/promises")

async function main() {
    fs.writeFile("first.txt","hello")
    fs.writeFile("second.txt","world")
    let readFirstText = await fs.readFile("first.txt","utf-8")
    let readSecondText = await fs.readFile("second.txt","utf-8")
    let merge = readFirstText + " " + readSecondText
    fs.writeFile("third.txt",merge)
    let readThird  = await fs.readFile("third.txt","utf-8")
    console.log(readThird,"mesameeee")
}

main()
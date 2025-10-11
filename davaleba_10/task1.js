//1)წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში
const fs= require("fs/promises")

async function main() {
    let numsArr=[1,2,3,4,5,6]
    fs.writeFile("text.txt",JSON.stringify(numsArr))
    let read= await fs.readFile("text.txt","utf-8")
    let newArr=JSON.parse(read)
    let sum=newArr.reduce((acc,curr)=>{
        acc+=curr
        return acc
    },0)
    fs.writeFile("result.txt",JSON.stringify(sum))
}

main()
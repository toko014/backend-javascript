
const fs = require("fs/promises")
const path = require("path")
async function main() {
    await fs.mkdir("folder1",{recursive:true})
    await fs.writeFile("folder1/file1.txt","I ")
    await fs.writeFile("folder1/file2.txt","am")
    await fs.writeFile("folder1/file3.txt"," the danger")
    await fs.writeFile("folder1/random.js","run")
    await fs.writeFile("folder1/some.js","some")
    await fs.writeFile("folder1/any.js","code")
    let info = await fs.readdir("folder1")
    console.log(info)
       for(let item of info){

    if(item.includes(".txt")){
        let readText=await fs.readFile(`folder1/${item}`, "utf-8")
        await fs.appendFile("wholeText.txt",readText)
    }
  }

   }
main()

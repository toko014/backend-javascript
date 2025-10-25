//1)შექმენი 2 ფოლდერი 3 ფაილი, წაშალე მარტო ფოლდერები. შეამომწე lstat-ის მეშვეობით
const fs = require("fs/promises")
const path = require("path")
async function main() {
   await fs.mkdir("folder1",{recursive:true})
   await fs.writeFile("file1.js","console.log('cmon')")
   await fs.mkdir("folder2",{recursive:true})
   await fs.writeFile("file2.js","console.log('cmon')")
   await fs.writeFile("file3.js","console.log('cmon')")
     let info = await fs.readdir(__dirname)

   let sliceIfno = info.slice(2)
   console.log(sliceIfno)
   for(let item of sliceIfno){
      let infostat = await fs.lstat(item)
         if(infostat.isDirectory()){
            await fs.rmdir(item)
            console.log(`folder deleted ${item}`)
         }

   }
}

main()

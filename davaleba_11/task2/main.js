//2)შექმენი  მთავარი ფოლდერი, ფოლდერში აიღე ერთი main.js ამ main.js ით 
// შექმენი (mkdir) ფოლდერი და ამ ფოლდერში ჩაწერე index.js 
// შემდეგ ამ index.js-ით ჩაწერე მთავარფოლდერში message.txt, 
// ამ message.txt-ში რაც გექნება შეატრიალე ეგ სტრინგი და ისევ იგივეში ჩაწერე.
const fs = require("fs/promises")
const path = require("path")
async function main() {
    let script=`
    const fs = require("fs/promises");
    const path = require("path");

    async function main() {
      let messagePath = path.join(__dirname, "..", "message.txt");
      await fs.writeFile(messagePath,"pass the text");
      console.log("message.txt created by index.js");
    }

    main();
  `;
await fs.mkdir("folder1",{recursive:true})
await fs.writeFile("folder1/index.js",script.trim())
let indexpath=path.join(__dirname,"folder1/index.js")
require(indexpath);
let readText= await fs.readFile("message.txt","utf-8")
let reverseString=readText.split('').reverse().join('')
await fs.appendFile("message.txt",` ${reverseString}`)


} 
main()
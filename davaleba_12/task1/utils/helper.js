const fs = require("fs/promises")
const path = require("path")

async function read(filename,parse){
let readText=await fs.readFile(filename,"utf-8")
console.log(parse ? JSON.parse(readText):readText) 
}

function reverseString(text){
   return text.split('').reverse().join('');
}
function sum(a,b){
    return a+b
}

async function write(fileName,text,jsonCheck){
    let str=jsonCheck ? JSON.stringify(text) :text
await fs.writeFile(fileName,str)
}

module.exports={write,read,reverseString,sum}
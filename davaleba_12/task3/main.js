#! /usr/bin/env node

//3)commander-ით შექმენი phone-cli, რომელსაც ექნება დამატება,წაშლა,id-ის
//  მიხედვით კონკრეტული ობიექტის ამოღება, და option-ის მიხედვით(--america)
// - ამ ოფშენს თუ გადავცემთ ნომერს წინ უნდა დაუამტოს 011 (ანუ phone-cli add
//  giorgi 574221355 --america)- ასე თუ გადავცემთ უნდა დაამტოს 011574221355
const fs = require("fs/promises")
const path = require("path")
const {Command} = require("commander")
const program = new Command()

program
    .command("create")
    .description("create desc")
    .argument("name")
    .argument("number")
    .option("--america", "Add 011 prefix to the number")
    .action(async (name,number,options) => {
        if(options.america){
            number='011'+number
        }
        let readText =await fs.readFile("contact.json","utf-8")
        let readDataJson = JSON.parse(readText)
        let lastId = readDataJson[readDataJson.length-1]?.id || 0
        let newOBJ = {
            id:lastId + 1,
            name,
            number
        }
        readDataJson.push(newOBJ)
        await fs.writeFile("contact.json",JSON.stringify(readDataJson))
    })
     program
        .command("show")
        .argument("id")
        .action( async (id) => {
           let readText =await fs.readFile("contact.json","utf-8")
        let readDataJson = JSON.parse(readText)
            readDataJson=readDataJson.filter(el=> el.id===Number(id))
            console.log(readDataJson)
        })

        program
            .command("delete")
            .description("delete desc")
            .argument("id")
            .action(async (id) => {
                let readText =await fs.readFile("contact.json","utf-8")
                let readDataJson = JSON.parse(readText)
                readDataJson = readDataJson.filter(el => el.id !== +id)
                await fs.writeFile("contact.json",JSON.stringify(readDataJson))
            })
    program.parse()
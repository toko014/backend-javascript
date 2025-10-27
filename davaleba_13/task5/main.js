#! /usr/bin/env node
//5) შექმენი products-cli,რომელსაც ექნება დამატება,წაკითხვა,id-ის მიხედვით 
// წაკითხვა, წაშლა და აფდეითი.fields(name,description,date,category) + მე 
// თუ გავატან option ის მიხედვით --isexpire. უნდა შეამოწმოს თარიღი და 
// დაამატოს ვადა აქვს გასული თუ არა
const { Command } = require("commander");
const program = new Command();
const fs = require("fs/promises");
const currentYear=2025
const expiryPeriod=5

program
  .command("show")
  .description("show desc")
  .action(async () => {
    let readProductJson = await fs.readFile("products.json", "utf-8");
    let parsedProductJson = JSON.parse(readProductJson);
    console.log(parsedProductJson);
  });

program
  .command("create")
  .description("create desc")
  .argument("name")
  .argument("description")
  .argument("date")
  .argument("category")
  .action(async (name, description, date,category) => {
    let readProductJson = await fs.readFile("products.json", "utf-8");
    let parsedProductJson = JSON.parse(readProductJson);
    let lastId = parsedProductJson[parsedProductJson.length - 1]?.id || 0;
    let newObj = {
      id: lastId + 1,
      name,
      description,
      date,
      category
    };

    parsedProductJson.push(newObj);
    await fs.writeFile("products.json", JSON.stringify(parsedProductJson));
    console.log("written successfully");
  });

program
  .command("delete")
  .argument("id")
  .action(async (id) => {
    let readProductJson = await fs.readFile("products.json", "utf-8");
    let parsedProductJson = JSON.parse(readProductJson);
    const idnex = parsedProductJson.findIndex((el) => el.id === Number(id));
    if (idnex === -1) {
      console.log("not found");
      return;
    }
    let deletedProduct = parsedProductJson.splice(idnex, 1);
    await fs.writeFile("products.json", JSON.stringify(parsedProductJson));
    console.log("Product deleted successfully", deletedProduct);
  });



  program
    .command("find")
    .argument("id")
    .option("--isexpire")
    .action(async (id,options) => {
       let readProductJson = await fs.readFile("products.json", "utf-8");
        let parsedProductJson = JSON.parse(readProductJson);
        let byId = parsedProductJson.find((el) => el.id === Number(id));
        if(options.isexpire){
            byId["expireStatus"]=(currentYear-byId.date)>expiryPeriod?"expired":"valid"
        }
        console.log(byId)
    })

program
  .command("update")
  .argument("id")
  .argument("name")
  .argument("description")
  .argument("date")
  .action(async (id, name, description, date) => {
    let readProductJson = await fs.readFile("products.json", "utf-8");
    let parsedProductJson = JSON.parse(readProductJson);
    const index = parsedProductJson.findIndex((el) => el.id === Number(id));
    if (index === -1) {
      console.log("not found");
      return;
    }
    parsedProductJson[index] = {...parsedProductJson[index],name,description,date}
    await fs.writeFile("products.json",JSON.stringify(parsedProductJson))
    console.log("updated successfully")
  });

program.parse();
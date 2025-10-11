//8)წაიკითხე "users.json", და ყველას, ვისაც არ აქვს "@" ელფოსტაში, წაშალე
// [
//   { "name": "Gio", "email": "gio@gmail.com" },
//   { "name": "Nika", "email": "nikaexample.com" },
//   { "name": "Mariam", "email": "mariam@reeducate.ge" },
//   { "name": "Lasha", "email": "lashareeducate.ge" },
//   { "name": "Ana", "email": "ana@mail.com" }
// ]

const fs= require("fs/promises")

async function main() {
    let readJSon = await fs.readFile("users.json","utf-8")
    let strToArr = JSON.parse(readJSon)
    let filteredArr = strToArr.filter(el => el.email.includes('@'))
    fs.writeFile("filteredEmail.json",JSON.stringify(filteredArr))
}
main()
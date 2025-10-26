//2)წამოიღე ინფორმაცია ამ ორი api-დან
// let api = https://jsonplaceholder.typicode.com/users
// let api2 = https://jsonplaceholder.typicode.com/posts
// 1)გამოიყენე axios და ერთდროულად გაუშვი 2 API.
// 2)გაუშვი ორივე ერთად და რომელიც პირველი მოვა ის დააკონსოლე.
// 3)გაუშვი ორივე ერთად და დააბრუნე ინფრომაცია რომელი დარესოლვდა დარეჯექთდა და ა.შ.
const axios=require("axios")
let api = "https://jsonplaceholder.typicode.com/users"
let api2 = "https://jsonplaceholder.typicode.com/posts"

async function fetchByAxios(API) {
    let res = await axios.get(API)
    return res.data
}


//1
Promise.all([fetchByAxios(api),fetchByAxios(api2)]).then(res=>console.log(res))
//2
Promise.race([fetchByAxios(api),fetchByAxios(api2)]).then(res=>console.log(res))
//3
Promise.allSettled([fetchByAxios(api),fetchByAxios(api2)]).then(res=>console.log(res))

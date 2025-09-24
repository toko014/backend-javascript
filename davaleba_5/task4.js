// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await
async function readAPI(API) {
    let res= await fetch(API)
    let data= await res.json()

    console.log(data.slice(0,-6))
}

readAPI("https://jsonplaceholder.typicode.com/users")
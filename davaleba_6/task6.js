// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად

async function fetchPosts() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await res.json()
    console.log("post")
    return data[0]
}

async function fetchUser() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json()
    console.log("user")
    return data[0]
}

Promise.all([fetchPosts(),fetchUser()]).then(res=>console.log(res))

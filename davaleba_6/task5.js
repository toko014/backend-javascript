//5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები
let promise1 =new Promise((res,rej)=>{
    res("resolved")
})

let promise2 =new Promise((res,rej)=>{
    rej("rejected")
})
let promise3 =new Promise((res,rej)=>{
    res("resolved")
})
let promise4 =new Promise((res,rej)=>{
    rej("rejected")
})
let promise5 =new Promise((res,rej)=>{
    rej("rejected")
})

Promise.allSettled([promise1,promise2,promise3,promise4,promise5]).then(res=>{
    let count= res.reduce((acc,curr)=>{
        if(curr.status === "rejected"){
            acc++;
        }
        return acc
    },0)
    console.log(count)
})
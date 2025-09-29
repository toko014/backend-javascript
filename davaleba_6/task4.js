//4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი
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
Promise.allSettled([promise1,promise2,promise3,promise4]).then(res=>{
    let count= res.reduce((acc,curr)=>{
        if(curr.value === "resolved"){
            acc++;
        }
        return acc
    },0)
    console.log(count)
})
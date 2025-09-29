// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.
let promise1= new Promise((res,rej)=>{
    res("resolve")
})
let promise2=new Promise((res,rej)=>{
    rej("rejected")
})
 
promise1.then(res=> console.log(res) ).catch(error=>console.log(error,"error"))
promise2.then(res=> console.log(res)).catch(error=>console.log(error,"error"))
Promise.allSettled([promise1,promise2]).then(res=> console.log(res))
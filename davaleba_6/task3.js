//3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული
let mypromise1 =new Promise((res,rej)=>{
    res("resolved")
})

let mypromise2 =new Promise((res,rej)=>{
    rej("rejected")
})
let mypromise3 =new Promise((res,rej)=>{
    res("resolved")
})
let mypromise4 =new Promise((res,rej)=>{
    rej("rejected")
})

Promise.allSettled([mypromise1,mypromise2,mypromise3,mypromise4]).then(res=>{
    let filtered=res.filter(el=>el.value==="resolved")
    console.log(filtered[0])
})
// 1) function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

function block(){
    for(let i = 1 ;i <10000000000;i++){}
}
let promise= new Promise((res,rej)=>{
    res("resolve")
})
console.log("one")
promise.then(res=>block())
console.log("two")
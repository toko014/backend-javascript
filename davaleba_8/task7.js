//4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად. 
function factorial(num){
    let fact=1
    if(num===0){
        return 0;
    }
    for(let i=1;i<=num;i++){
        fact*=i
    }
    return fact
}

console.log(factorial(5))
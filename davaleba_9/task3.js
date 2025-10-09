//3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.

function isPrime(num){
    if(num<=1){
        return false;
    } else{
        if(num<=3){
            return true;
        }
    }
    if(num%2===0 && num%3===0){
        return false;
    }
    // (6k±1 - formula for primes higher than 5 ) loop checks in such way
    for(let i=1;i<Math.sqrt(num)/6;i++){
        
        if(num%(6*i-1)===0 || num%(6*i+1)===0){
            return false;
        }

    }
    return true
}
//big prime check
console.log(isPrime(1,296))

//2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი
//  (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig) 

let palin="alisila"

function isPalindrome(word){
    for(let i=0;i<=word.length/2;i++){
        if(word[i]!==word[word.length-i-1]){
            return false
        }
    }
    return true;
    
}
console.log(isPalindrome(palin))
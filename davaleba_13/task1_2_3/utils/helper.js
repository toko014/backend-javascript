//1)შექმენი utils/helepr.js. შექმენი ფუნქცია რომელსაც მიიღებს სტრინგს და გადააქცევს capital letter-ად. აუცილებელია გამოიყენო module(package-დან შეცვალე)
//2)დაწერე ფუქნცია რომელიც შეამოწმებს გადმოცემული სტრინგი პალინდრომია თუ არა (ანუ ორივე მხრიდან თუ ერთნაირად იკითხება).აუცილებელია module(package-დან შეცვალე) გამოიყენო
//3)დაწერე ფუქნცია რომელიც იპოვის ყველაზე გრძელ სიტყვას როცა გადავცემ (I love JavaScript very much) - უნდა დააბრუნოს JavaScript. აუცილებელია გამოიყენო module.


//1
export function uppercase(text){
    
 return text.toUpperCase()
}
//2
export function isPalindrome(text){
  return text===text.toLowerCase().split('').reverse().join('');
}
//3
export function longestWord(text){
    let arr=text.split(' ')
   let longest= arr.reduce((acc,curr)=>{
        if(acc.length<curr.length){
            return curr
        }
        return acc
    },"")
    return longest
}




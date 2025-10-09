//1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში. 
let string="askdfakdsjbkasdfasdlbnckajdf"
console.log(countletter('f',string))

function countletter(letter,word){
    let count=0;
    for(let i=0;i<string.length;i++){
        if(letter==word.charAt(i)){
            count++
        }
    }
    return count;
}

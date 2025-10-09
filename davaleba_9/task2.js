//2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
let str= "I love JavaScript"

function countWords(text){
    let arr=text.split(" ")
    return arr.length
}

console.log(countWords(str))
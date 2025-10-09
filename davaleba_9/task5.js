//5) დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
let arr = [3, 5, 3, 2, 5, 5, 3, 5]
let max=0;
let frequent=0

for(let i=0;i<arr.length;i++){
    let count=0
    for(let j=i;j<arr.length;j++){
        if(arr[i]===arr[j] && i!==j){
            count++
        }
    }
    if(max<count){
        max=count
        frequent=arr[i]
    } 
}

console.log(frequent)
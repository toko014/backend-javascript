// 6) დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
let nums = [1, 2, 3, 4, 5, 6, 7, 8]
function countEvenAndOdd(arr){
    let even=nums.reduce((acc,curr)=>{
        if(curr%2===0){
            acc++;
        }
        return acc
    },0)
    let odd=nums.reduce((acc,curr)=>{
        if(curr%2!==0){
            acc++;
        }
        return acc
    },0)
    return ["even: "+ even,"odd: " + odd]
}

console.log(countEvenAndOdd(nums))
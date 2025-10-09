//7) დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს

let nums = [10, 2, 33, 5, 7]

function smallestNum(arr){
    let smallest=arr.reduce((acc,curr)=>{
        if(curr<acc){
            return curr
        }
        return acc
    },nums[0])
    return smallest
}

console.log(smallestNum(nums))
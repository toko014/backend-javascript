//1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]]
let flattedArr=arr.flat(3)
let sortedArr=[]
while(flattedArr.length!==0){
    addSmallestToArr(flattedArr,sortedArr)
}
console.log(sortedArr)

function addSmallestToArr(arr1,arr2){
    let num=Infinity
    for(let i=0;i<arr1.length;i++){
        if(num>arr1[i]){
            num=arr1[i];
        }

    }
    if(arr2[arr2.length-1]!==num){
        arr2.push(num)
    }
    let index=arr1.indexOf(num)
    arr1.splice(index,1)
}

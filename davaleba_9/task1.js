//1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს 


function filterAndSum(arr){
    let filteredArr=arr.filter(el=>el%2===0)
    let sum=filteredArr.reduce((acc,curr)=>{
    acc+=curr
    return acc
    },0)
    return sum/filteredArr.length
}

console.log(filterAndSum([1,2,3,4,5,6,7]))
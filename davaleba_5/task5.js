//5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 15 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 18 }
];

let groupedPeople=people.reduce((result,curr) => {
    if(curr.age>10){
        result.moreThanTen++
    }
    if(curr.age<20){
        result.lessThanTwenty++
    }
    return result

},{moreThanTen:0 , lessThanTwenty:0}
)

console.log(groupedPeople)
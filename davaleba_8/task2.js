//2)იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.
let products = [
  { name:"Phone", price:1200, rating:4.5 },
  { name:"Laptop", price:2500, rating:4.8 },
  { name:"Book", price:30, rating:4.9 },
  { name:"TV", price:800, rating:4.0 }
]

let HighestRating=products.filter(el=>el.price<1000).reduce((acc,curr)=>{
    if(acc.rating>curr.rating){
        return acc
    } else{
        return curr;
    }
},{name:"",price:0,rating:0})

console.log(HighestRating)
//7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და 
//ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 45 },
  { name: "USB Cable", price: 7 },
  { name: "Headphones", price: 29.9 },
  { name: "Webcam", price: 52 }
];
let groupedPrice=products.reduce((res,curr) => {
    if(curr.price>20){
        res.moreThan++
    } else{
        res.lessThan++
    }
    return res
},{moreThan:0 , lessThan:0})

console.log(groupedPrice)

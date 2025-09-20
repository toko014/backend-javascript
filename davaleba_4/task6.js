//6)იპოვე ყველაზე იაფი ტელეფონი და გამოიტანე მხოლოდ მისი model
const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 }
];

console.log(phones.reduce((cheapest,curr) => {
    if(curr.price<cheapest.price){
        return curr
    } else{
        return cheapest
    }
},phones[0]).model)
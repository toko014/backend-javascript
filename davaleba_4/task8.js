//8)დაალაგე ზრდადობით და შეკრიბე ფასი
const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 }
];
let sortedphones=phones.sort((a,b) => a.price-b.price)
console.log(sortedphones)
let sum =phones.reduce((sum,curr) => sum+curr.price,0)
console.log(sum)


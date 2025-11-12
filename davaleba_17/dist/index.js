"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და აბრუნებს ტექსტს 
// User Nika is 22 years old.
function textGenerator(name, age) {
    console.log(`user ${name} is ${age} years old`);
}
textGenerator("toksona", 24);
const product1 = {
    productName: "hammer",
    price: 120
};
const product2 = {
    productName: "nail",
    price: 20
};
const hero1 = {
    name: "batman",
    age: 35,
    power: "gadgets"
};
prod(product1);
levelup(hero1);
function prod(prod1) {
    if (prod1.price > 100) {
        console.log("discount available");
    }
}
function levelup(hero) {
    hero.age > 30 ? hero.level = "pro" : hero.level = "Newbie";
    console.log(hero.level);
}
const user = [
    { name: "nika", age: 22 },
    { name: "nika", age: 22 },
    { name: "nika", age: 22 },
    { name: "nika", age: 22 },
    { name: () => { } }
];
function main(arr) {
    return arr[arr.length - 1];
}
const getFirst = main(user);
console.log(getFirst);
//# sourceMappingURL=index.js.map
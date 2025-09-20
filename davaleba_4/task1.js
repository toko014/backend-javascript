//  1) გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
 const laptops = [
 { model: "Dell XPS 13", price: 1800 },
 { model: "MacBook Pro 14", price: 2499 },
 { model: "Lenovo ThinkPad X1", price: 2100 },
 { model: "Asus Zephyrus G14", price: 1999 },
];

let mostExpensive=laptops.reduce((max,curr) => 
{
    if(curr.price>max.price){
        return curr
    } else{
        return max
    }
},laptops[0]
) 
console.log(mostExpensive)



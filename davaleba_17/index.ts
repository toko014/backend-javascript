//2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და აბრუნებს ტექსტს 
// User Nika is 22 years old.
function textGenerator(name:string,age:number){
    console.log(`user ${name} is ${age} years old`)
}
textGenerator("toksona",24)

interface IProduct{
productName:string
price:number
}

interface IHero{
    name: string
    age: number
}
interface ISuperhero extends IHero{
    power:string
    level?:string
}

const product1:IProduct = {
    productName:"hammer",
    price:120
}
const product2:IProduct={
    productName:"nail",
    price:20
}
const hero1:ISuperhero={
    name:"batman",
    age:35,
    power:"gadgets"

}
prod(product1)

levelup(hero1)

function prod(prod1:IProduct){
    if(prod1.price>100){
        console.log("discount available")
    }
}

function levelup(hero:ISuperhero){
    hero.age>30?hero.level="pro":hero.level="Newbie"
    console.log(hero.level)
}

const user = [
    {name:"nika",age:22},
    {name:"nika",age:22},
    {name:"nika",age:22},
    {name:"nika",age:22},
    {name:() =>{}}
]


function main<T>(arr:T[]){
    return arr[arr.length-1]
}

const getFirst = main(user)
console.log(getFirst)
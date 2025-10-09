//3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, 
// წაშლის დუბლიკატებს და დაითვლის ჯამს.
//  გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.

let arr1=[1,2,3,4,7]
let arr2=[4,6,2,8,5,0]
let combined=[...arr1,...arr2]
let filtered=combined.filter((el,i)=>combined.indexOf(el)===i)
let sum=filtered.reduce((acc,curr)=> {
    acc+=curr
    return acc
},0)
console.log(filtered,sum)

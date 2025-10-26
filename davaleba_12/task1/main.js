//1) შექმენი utils/helper.js სადაც გექნება ფუქნციები read(უნდა პარსავდეს
//  true-ს გადაწოდების შემდეგ) და write(ანალოგიურად stringify-უნდა გაუკეთოს).
//შექმენი ამ ფუქნციებით 2 ფაილი და ჩაწერე შიგნით ნებისმიერი რამ.
//  ასევე ჰელფერებში დაამატე ჯამის დათვლა და სტრინგის შეტრიალების ფუქნცია.

const {write,reverseString,sum,read}=require("./utils/helper")
let obj={id:1,car:"audi"}
write("data.json",obj,true)
read("data.json",true)
console.log(sum(5,9))
console.log(reverseString("gamarjoba"))
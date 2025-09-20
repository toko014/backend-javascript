//2)შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი, რომელიც დააბრუნებს ფართობს.
let obj = {
    width: 30,
    height: 40,
    getArea: function(){
        return this.width*this.height
    }
}
console.log(obj.getArea())
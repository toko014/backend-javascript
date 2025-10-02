//1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().
class Triangle{
    constructor(a,b,c){
        this.a=a
        this.b=b
        this.c=c

        }
        getPerimeter(){
            let p=this.a+this.b+this.c
            return p
        }
        getarea(){
            let p2=this.getPerimeter()/2
            let area=Math.sqrt(p2*(p2-this.a)*(p2-this.b)*(p2-this.c))
            return area  
        }
        isRightTriangle(){
            
            let highestNum=Math.max(this.a,this.b,this.c)
            let smallestNum=Math.min(this.a,this.b,this.c)
            let middleNum=this.getPerimeter()-highestNum-smallestNum
            console.log(smallestNum,highestNum,middleNum)
            if(highestNum*highestNum===smallestNum*smallestNum+middleNum*middleNum){
                return true
            } else{
                return false
            }
        }
    }

    let triangle = new Triangle(3,5,4)
    console.log(triangle.getPerimeter())
    console.log(triangle.getarea())
    console.log(triangle.isRightTriangle())
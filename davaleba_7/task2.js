//2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear.
//  გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore
//  და batteryCapacity, და დაამატე მეთოდი performanceIndex().
class Smartphone{
    constructor(brand,model,releaseYear){
        this.brand=brand
        this.model=model
        this.releaseYear=releaseYear
    }
}

class GamingPhone extends Smartphone{
    constructor(brand,model,releaseYear,gpuScore,batteryCapacity){
        super(brand,model,releaseYear)
        this.gpuScore=gpuScore
        this.batteryCapacity=batteryCapacity
    }

    performanceIndex(){
        return this.gpuScore
    }
}

let phone= new GamingPhone("samsung","galaxy s24", 2024,253,95)
console.log(phone.performanceIndex())
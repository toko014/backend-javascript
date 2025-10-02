//5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით 
// calculateEarnings(), რომელიც დათვლის შემოსავალს
//  შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, 
// დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).

class Freelancer {
    constructor(name, hourlyRate, hoursWorked) {
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }


    calculateEarnings(bonusPerExtraHour = 0) {
        let regularHours=this.hoursWorked
        let extraHours=0
        if(this.hoursWorked>160){
            regularHours=160;
            extraHours=this.hoursWorked-160
        }
        
        let regularEarnings = regularHours * this.hourlyRate;
        let extraEarnings = extraHours * (this.hourlyRate + bonusPerExtraHour);
        
        return regularEarnings + extraEarnings;
    }
}

const freelancer1 = new Freelancer("Tornike", 20, 170);
console.log(freelancer1.calculateEarnings(5)); // თითო საათზე bonus 5
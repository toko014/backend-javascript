//3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით:
//  deposit(), withdraw(), transfer(), getHistory(),

class CryptoWallet{
    constructor(initialValue){
        this.initialValue=initialValue
        this.transactionHistory=[]
    }
    deposit(money){
        this.initialValue+=money
        this.transactionHistory.push({type:"deposit", amount: money})

    }
    withdraw(money){
        if(money>this.initialValue){
            "ar gaqvs am odenobis tanxa"
        } else{
            this.initialValue-=money
            this.transactionHistory.push({type:"withdraw",amount:money})
        }
    }
    transfer(money,toAccount){
        if(money>this.initialValue){
            "ar gaqvs am odenobis tanxa"
        } else{
            this.initialValue-=money
            this.transactionHistory.push({type:"transfer", amount: money})
            toAccount.initialValue+=money;
            toAccount.transactionHistory.push({type:"transfer", amount: money})
        }
    }
    getHistory(){
        console.log(this.transactionHistory)
    }
    showBalance(){
        console.log(this.initialValue)
    }
}

let acc1= new CryptoWallet(500)
let acc2= new CryptoWallet(400)
acc1.deposit(100)
acc1.transfer(200,acc2)
acc2.getHistory()
acc1.getHistory()
acc1.showBalance()
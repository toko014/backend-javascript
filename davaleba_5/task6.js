//6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".
function compare(num1,num2,callback){
    if(num1>num2){
        callback()
    } else{
        console.log("ნაკლები ან ტოლია")
    }
}

function callbackFunc(){
    console.log("მეტია")
}

compare(6,1,callbackFunc)
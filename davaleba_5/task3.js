//3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
function numFunc(n,callback){
    if(n>27){
        callback()
    } else{
        console.log("n ნაკლებია 27 ზე")
    }
}

function callbackFunc(){
    console.log("n მეტია 27 ზე")
}

numFunc(30,callbackFunc);


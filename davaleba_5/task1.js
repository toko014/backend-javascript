//1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
function countdown(sec) {
    let intervalId=setInterval(() => {
        console.log(sec);
        sec--;
        if(sec<0){
            clearInterval(intervalId);
        }
    },1000)
}
countdown(12);
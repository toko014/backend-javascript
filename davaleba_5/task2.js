//2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს
function randomlogger(num) {
    let intervalId=setInterval(()=>{
        let randNum=Math.floor(Math.random()*11)
        console.log(randNum)
        if(randNum===num){
            clearInterval(intervalId);
        }
    },1000)
}
randomlogger(6)
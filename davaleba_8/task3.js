//3)რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული
let sentence = "dog cat dog bird cat dog fish bird"
let arr=sentence.split(" ")
let obj=arr.reduce((acc,curr)=>{
    
    if(acc.find(el=>el.word===curr)){
        let matchedWord=acc.find(el=>el.word===curr)
        matchedWord.count++
    } else{
        acc.push({ word:curr,count:1})
        
    }
    return acc

},[])
console.log(obj)
console.log(findHighest(obj))

function findHighest(arr1){
    let highest={word:"",count:0}
    for(let i=0;i<arr1.length;i++){
        if(highest.count<arr1[i].count){
            highest.word=arr1[i].word
            highest.count=arr1[i].count
        }
    }
    return highest
}



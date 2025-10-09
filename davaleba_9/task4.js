//4)იპოვე ყველაზე გრძელი ისტყვა
 let words = ["dog", "elephant", "cat", "hippopotamus"] 
 let longest=words.reduce((res,curr)=>{
    if(res.length<curr.length){
        return curr;
    } 
    return res;
 },"")

 console.log(longest)
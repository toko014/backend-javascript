//5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს
//  ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]
function twoSum(arr,num){
    let sumArr=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]+arr[j]===num && i!==j){
                let temp=[[arr[i],arr[j]]]
                sumArr.push(... temp)
            }
        }
    }
    return sumArr
}

console.log(twoSum([14,3,6,8,9,1,8,2,7], 9))
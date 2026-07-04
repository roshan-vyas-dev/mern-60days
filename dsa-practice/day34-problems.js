const arr = [1, 2, 2, 3, 4, 4, 5];
// Remove duplicates

let result=[];

for(let i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i])
    }

}

console.log(result);


// Check if two strings are anagrams

const str1 = "listen";
const str2 = "silent";
// check if they are anagrams

const sorted1 = str1.split("").sort().join(""); 
const sorted2 = str2.split("").sort().join(""); 

if(sorted1===sorted2){
    console.log("these are anagrams");
    
}else{
    console.log("not an anagram");
    
}





// find second largest number
const numbers = [3, 7, 1, 9, 4, 6, 2];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        secondLargest = largest
        largest = numbers[i]

    } else if (numbers[i] > secondLargest) {
        secondLargest = numbers[i]
    }

}
console.log(`Second largest: ${secondLargest}`);
// output: "Second largest: 7"



// check if num is a prime number
const num = 17;
let isPrime = true

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}
// output: "17 is a prime number"




// capitalize first letter of each word
const sentence = "my name is roshan";

let words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i]=words[i].charAt(0).toUpperCase() +words[i].slice(1);


}

let output =words.join(" ");
console.log(output);
// output: "My Name Is Roshan"



// Count occurrences of each word
const sentences = "the cat sat on the mat the cat";

let word=sentences.split(" ");

let obj={};

for(let i=0;i<word.length;i++){
    if(obj[word[i]]){
        obj[word[i]]++

    }else{
        obj[word[i]]=1
    }
}

console.log(obj);



// output: { the: 3, cat: 2, sat: 1, on: 1, mat: 1 }


// find the first character that appears only once
const str = "swiss";

let objs={};

for(let i=0;i<str.length;i++){
    if(objs[str[i]]){
        objs[str[i]]++
    }else{
        objs[str[i]]=1
    }
}

for(let key in objs){
    if(objs[key]===1){
        console.log(key);
        break;
        
    }
}

// output: "w"

// Reverse the words in a sentence

const sentencess = "I love JavaScript";

let wordss=sentencess.split(" ");

let reverse=[]


for(let i=wordss.length-1;i>=0;i--){
 reverse.push(wordss[i])

}

let result = reverse.join(" ");

console.log(result);

// output: "JavaScript love I"
// 1.fizzbuzz
// - Print numbers 1 to 20
// - If number is divisible by 3 → print "Fizz"
// - If number is divisible by 5 → print "Buzz"
// - If divisible by both 3 and 5 → print "FizzBuzz"
// - Otherwise → print the number

for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0 && i % 5 == 0) {
        console.log(i, "fizzbuzz");

    } else if (i % 3 === 0) {
        console.log(i, "fizz");

    } else if (i % 5 === 0) {
        console.log(i, "buzz");

    } else {
        console.log(i);
    }

}

// 2. two sum

// Find two numbers that add up to target

const numbers = [2, 7, 11, 15];
const target = 9;

for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

        if (numbers[i] + numbers[j] === target) {
            console.log(`Numbers ${numbers[i]} and ${numbers[j]} add up to ${target}`);
             break;

        }

    }
}

// 3.find duplicates in Array
// Find which numbers appear more than once
const arr = [1, 2, 3, 2, 4, 3, 5];

let obj = {};

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]]++
    } else {
        obj[arr[i]] = 1
    }
}

for (let key in obj) {
    if (obj[key] > 1) {
        console.log(`Duplicate number: ${key}`);
    }
}


// 4.count word in a sentence
// count how many words are in the sentence
const sentence = "my name is roshan and i love coding";

let words=sentence.split(" ");

console.log(`Total words: ${words.length}`);


// 5: Find the most repeated character in a string
// find which character appears most times
const str = "programming";
let objs={}

for(let i=0;i<str.length;i++){

    if(objs[str[i]]){
        objs[str[i]]++
    }else{
        objs[str[i]]=1
    }
}

let maxCount=0;
let mostCh="";

for(let key in objs){
    if(objs[key]>maxCount){
        maxCount=objs[key];
        mostCh=key
    }
}


console.log("Most repeated character:",mostCh);







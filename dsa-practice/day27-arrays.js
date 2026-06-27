// Day 27 - DSA Arrays
// Problem 1: Find largest number in array

// const numbers = [3, 7, 1, 9, 4, 6, 2];

// let largest=numbers[0];

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>largest){
//         largest=numbers[i]
//     }
// }

// console.log(`largest number is ${largest}`);



// find smallest number
// const numbers = [3, 7, 1, 9, 4, 6, 2];

// let smallest = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//         smallest = numbers[i]
//     }

// }

// console.log(`smallest number is ${smallest}`);



// reverse it without using .reverse() method
// const fruits = ["apple", "mango", "banana", "orange"];

// let reverse = []

// for (let i = fruits.length - 1; i >= 0; i--) {
//     reverse.push(fruits[i])
// }

// console.log(reverse);



// check if it is a palindrome
// const word = "racecar";
// let reverse = "";

// for (let i = word.length - 1; i >= 0; i--) {
//     reverse = reverse + word[i]
// }

// if(word===reverse){
//     console.log("palindrome");
    
// }else{
//     console.log("not a palidrome");
    
// }



// count how many vowels (a, e, i, o, u) are in the string
const sentence = "Hello World";

let vowelCount=0;

let vowels="aeiouAEIOU";

for(let i=0;i<sentence.length;i++){
    if(vowels.includes(sentence[i])){
        vowelCount++
    }
}

console.log(vowelCount);




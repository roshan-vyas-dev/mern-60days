// Day 27 - DSA Arrays
// Problem 1: Find largest number in array

const numbers = [3, 7, 1, 9, 4, 6, 2];

let largest=numbers[0];

for(let i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest=numbers[i]
    }
}

console.log(`largest number is ${largest}`);

// find smallest number
const numbersArray = [3, 7, 1, 9, 4, 6, 2];

let smallest = numbersArray[0];

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] < smallest) {
        smallest = numbersArray[i]
    }

}

console.log(`smallest number is ${smallest}`);



// reverse it without using .reverse() method
const fruits = ["apple", "mango", "banana", "orange"];

let reversedArray = []

for (let i = fruits.length - 1; i >= 0; i--) {
    reversedArray.push(fruits[i])
}

console.log(`Reversed array: ${reversedArray}`);



// check if it is a palindrome
const word = "racecar";
let reversedWord = ""

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord = reversedWord+ word[i]
}

console.log(`${word} is ${word === reversedWord ? "a palindrome" : "not a palindrome"}`);



// count how many vowels (a, e, i, o, u) are in the string
const sentence = "Hello World";

let vowelCount=0;

let vowels="aeiouAEIOU";

for(let i=0;i<sentence.length;i++){
    if(vowels.includes(sentence[i])){
        vowelCount++
    }
}

console.log(`Number of vowels in "${sentence}": ${vowelCount}`);



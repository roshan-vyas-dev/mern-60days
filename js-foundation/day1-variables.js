// Day 1 - June 1

// Topic:  var vs let vs const, arrow functions, template literals

// 1. var vs let vs const

var oldway = "i can be re declared"
let canChange = "I can change"
const cantChange = "I cannot Change"

canChange = "changed"
console.log(canChange);


// 2.Normal function vs arrow function

function greetNormal(name) {
    return "Hello " + name;
}

const greetArrow =(name)=>`Hellow ${name}`


console.log(greetNormal("Roshan"));
console.log(greetArrow("Roshan"));



// 3.Template literals 
const myName="Roshan"

const age=22

const city="Thrissur"

const intro = `My name is ${myName}. I am a ${age} years old. I live in ${city}`

console.log(intro);


//4. arrow function - no parameter

const sayHi = ()=>"Hi there";

console.log(sayHi());

// arrow function - multiple lines

const addNumbers = (a,b)=>{
    const sum = a+b;
    return `Sum of ${a} and ${b} is ${sum}`
}

console.log(addNumbers(6,4));










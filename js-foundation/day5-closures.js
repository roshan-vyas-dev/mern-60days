// Day 5 - June 5
// Topic: Closures, Scope, Hoisting

// 1. SCOPE - where variables live

// Global scope - accessible everywhere

const globalVar = "I am global";

function testScope() {
    // local scope - only inside this function 

    const localVar = "i am local"

    console.log(globalVar); // can access global
    console.log(localVar);  //can access local 

}

testScope();
// console.log(localVar); // ERROR - cannot access local outside


// 2. BLOCK SCOPE - let and const

if (true) {
    let blockVar = "I am block scoped";
    const blockConst = "Me too";
    var oldVar = "I ignore blocks!";
}

// console.log(blockVar);   //ERROR
// console.log(blockConst);  //ERROR
console.log(oldVar);   // works ...  var ignores block scope

// 3. HOISTING
// var is hoisted - moved to top by JavaScript

console.log(hoistedVar); // undefined -  no error

var hoistedVar = "I am hoisted";


// let is Not hoisted  same way
// console.log(notHoisted);  //error
let notHoisted = "I am not hoisted"

// 4. CLOSURE - function remembers its birth scope
function makeCounter() {
    let count = 0  //this variable is remembered

    return function () {
        count++;
        console.log("Count:", count);

    }
}
const counter = makeCounter();

counter() //count : 1
counter() //count : 2
counter()  //count : 3


// count variable is private - cannot access from out side
// console.log();count  //Error

// 5. Real example of closure

function makeGreeter(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);

    }

}

const sayHello = makeGreeter("Hello");
const sayGoodMorning = makeGreeter("Good morning");

sayHello("Roshan");   //Hello Roshab
sayHello("Arjun")     //Hello Arjun
sayGoodMorning("Roshan") //Good morning Roshan

// 6. Classic closure bug with var
console.log("--- var bug ---");

for(var i=0;i<3;i++){
    setTimeout(()=>console.log("Var:",i),100)
}
// prints 3, 3, 3 - bug



console.log("--- let fix ---");
for(let j=0;j<3;j++){
    setTimeout(()=>console.log("let:",j),100)
}
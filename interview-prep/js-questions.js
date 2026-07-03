// Q1: Difference between == and ===?
// == checks only value (loose equality)
// === checks both value AND type (strict equality)
// 0 == "0" → true (ignores type)
// 0 === "0" → false (different types)
// null == undefined → true
// null === undefined → false
// Always use === in real projects - avoids unexpected bugs


// Q2: What is a closure?
// A closure is a function that remembers variables
// from its outer scope even after outer function finishes
// Example:
// function makeCounter() {
//     let count = 0
//     return function() {
//         count++
//         console.log(count)
//     }
// }
// const counter = makeCounter()
// counter() → 1, counter() → 2, counter() → 3
// count variable is remembered even after makeCounter() finished
// Real use: data privacy, factory functions



// Q3: What is hoisting?
// Hoisting is JavaScript behavior where variables and functions
// are moved to top of their scope before code executes
// var - hoisted and initialized as undefined
// console.log(x) → undefined (no error)
// var x = 5
// let/const - hoisted but NOT initialized
// console.log(y) → ReferenceError (temporal dead zone)
// let y = 5
// Functions - fully hoisted, can call before declaration
// sayHi() → works fine
// function sayHi() { console.log("hi") }
// Temporal Dead Zone - period between hoisting and initialization

// Q4: What is the Event Loop?
// JavaScript is single threaded - can only do one thing at a time
// Event loop allows JS to handle async operations without blocking
// 3 parts:
// Call Stack - where code runs right now (one at a time)
// Web APIs - where async tasks wait (setTimeout, fetch)
// Callback Queue - where finished async tasks wait to run
// Event Loop - checks if call stack is empty
//            - moves tasks from callback queue to call stack
// Example:
// console.log("1") → runs immediately
// setTimeout(() => console.log("2"), 2000) → goes to Web APIs
// console.log("3") → runs immediately
// Output: 1, 3, 2
// "2" comes last because setTimeout waits in Web APIs


// Q5: Difference between null and undefined?
// null - intentionally empty value, set by developer
// let word = null → developer chose to make it empty
// undefined - variable declared but no value assigned yet
// let word → JavaScript automatically sets it to undefined
// typeof null → "object" (JavaScript bug, but good to know)
// typeof undefined → "undefined"
// null == undefined → true (loose equality)
// null === undefined → false (strict equality, different types)
// Use null when YOU want to say "this is intentionally empty"
// undefined means "not yet assigned"
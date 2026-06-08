// Day 8
// Topic: Callbacks, setTimeout, setInterval

// 1. WHAT IS A CALLBACK
// A function passed into another function as argument

function greet(name, callback) {
    console.log("Hello " + name);
    callback() //call the function that was passed  
}

function sayBye() {
    console.log("Goodbye");

}

greet("Roshan", sayBye)
// Hello roshan
// Goodbye

//2. callback with arrow function

greet("arjun", () => {
    console.log("see you later");
})

// 3. setTimeout - run once after delay
console.log("Before setTimeout");

setTimeout(() => {
    console.log("I run after 2 seconds");
}, 2000);

console.log("After setTimeout");

// notice: "After setTimeout" prints BEFORE the timeout message
// JavaScript does not wait - it moves on

//4. setTimeout with callback

function doAfterDelay(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, delay)
}

doAfterDelay("Task done", 1000, () => {
    console.log("call back called after task");

})

// 5. setInterval - run repeatedly

let count = 0;

const timer = setInterval(() => {
    count++;
    console.log("Count:", count);

    if (count === 5) {
        clearInterval(timer);//stops after 5 times
        console.log("Timer stopped");
    }

},1000)

// 6. Countdown timer using setInterval

let seconds = 10;

const Countdown = setInterval(()=>{
    console.log("Countdown:",seconds);
    seconds--;

    if(seconds<0){
        clearInterval(Countdown)
        console.log("Times up");     
    } 
},500)
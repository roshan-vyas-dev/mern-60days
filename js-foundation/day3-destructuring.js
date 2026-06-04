// Day 3 - June 3
// Topic: Destructuring, Spread, Rest

// 1. OBJECT DESTRUCTURING

const user = {
    name: "Roshan",
    age: 22,
    city: "Thrissur",
    job: "Developer"
};
// oldway
const oldName = user.name
const oldAge = user.age

console.log(`my name is ${oldName}.I'm ${oldAge} year old`);

// New way - destructuring
const { name, age, city, job } = user;
console.log(name, age, city, job);

// Rename while destructuring
const { name: fullName, age: myAge } = user;
console.log(fullName, myAge);

// Default value if property doesn't exist
const { salary = 50000 } = user
console.log("Salary", salary);

// 2. ARRAY DESTRUCTURING
const colors = ["red", "green", "blue", "yellow"];

const [first, second, third] = colors
console.log(first, second, third);

// Skip items
const [, , thirdColor] = colors
console.log("thirdColor", thirdColor);

// 3. SPREAD OPERATOR
// Merge two arrays
const fruits = ["apple", "mango"];
const veggies = ["carrot", "potato"];

const allFood = [...fruits, ...veggies];
console.log("All Food:", allFood);

// Merge two objects
const basicInfo = { name: "Roshan", age: 22 };
const jobInfo = { job: "Developer", salary: 50000 };

const fullProfile = { ...basicInfo, ...jobInfo }
console.log("Full Profile:", fullProfile);

// Copy array without affecting original
const original = [1, 2, 3];
const copy=[...original];
copy.push(4);
console.log("Orginal:",original);
console.log("Copy:",copy);

// 4. REST OPERATOR
// Collect remaining items
const [head, ...tail] = [10, 20, 30, 40, 50];
console.log("Head:",head);
console.log("Tail:",tail);

// Rest in functions
const addAll=(...nums)=>{
    return nums.reduce((sum,num)=>sum+num,0);
}

console.log("Sum:",addAll(1,2,3,4,5));
console.log("Sum:",addAll(10,20,30,40));







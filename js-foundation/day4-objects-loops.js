// Day 4 - June 4
// Topic: Objects deep dive + Loops

// 1. CREATE OBJECT
const student = {
    name: "Roshan",
    age: 22,
    city: "Thrissur",
    marks: 85
};

// 2. ACCESS - dot notation vs bracket notation
console.log(student.name);  //dot notation
console.log(student["age"]);  //bracket notation

// When to use bracket notation
const key = "city"
console.log(student[key]);

// 3. ADD and UPDATE properties
student.email = "roshan@gmail.com";   // add new
student.age = 23;   // update existing

console.log(student);


// 4. DELETE property

delete student.city
console.log(student);

// 5. LOOP through object - for...in
const person = {
    name: "Roshan",
    age: 22,
    job: "Developer"
};

for(let key in person){
    console.log(`${key}:${person[key]}`);
    
}


// 6. Object.keys() - get all keys
const keys=Object.keys(person);
console.log("Keys:",keys);

// 7. Object.values() - get all values
const values =Object.values(person);
console.log("Values:",values);

// 8. Object.entries() - get key value pairs
const entries=Object.entries(person);
console.log("Entries:",entries);

// 9. for...of loop on arrays
const fruits = ["apple", "mango", "banana", "orange"];

for(let fruit of fruits){
    console.log(fruit);
    
}


// 10. Real example
const students = [
  { name: "Roshan", marks: 85 },
  { name: "Arjun", marks: 45 },
  { name: "Priya", marks: 78 },
  { name: "Rahul", marks: 35 },
];

 // Find toppers (marks above 60)

 const toppers = students.filter((s)=>s.marks>60);
 console.log("Toppers :",toppers);
 

// Print each topper name and marks
for(let topper of toppers){
    console.log(`${topper.name} scored ${topper.marks}`);
    
}


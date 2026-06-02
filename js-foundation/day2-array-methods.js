// Day 2 - june 2

// topic: map,filter,reduce


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. map - every transform every item

const doubled = numbers.map((num) => num * 2);
console.log(doubled);


// 2. FILTER - even numbers

const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log("Even Numbers", evenNumbers);


// 3. REDUCE - combine all into one value

const total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Total Sum", total);


// 4. Real example - array of students
const students = [
    { name: "Roshan", marks: 85 },
    { name: "Arjun", marks: 45 },
    { name: "Priya", marks: 78 },
    { name: "Rahul", marks: 35 },
];

// Get only passed students (marks above 50)
const passed = students.filter((student) => student.marks > 50)
console.log("Passed students:", passed);

// Get only their names
const passedNames = passed.map((student) => student.name);
console.log("passed students:", passedNames);


// Get average marks

const averageMarks = students.reduce((sum, student) => sum + student.marks, 0) / students.length
console.log("Average mark:", averageMarks);


// 5. Chain all three together

const result =numbers.filter((num)=>num%2==0).map((num)=>num*3).reduce((sum,num)=>sum+num,0);
console.log("Chained Result:",result);



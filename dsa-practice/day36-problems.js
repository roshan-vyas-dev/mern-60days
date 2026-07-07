// Problem 1: Check if an array is sorted
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 2, 4, 5];


function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }

    }
    return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); //   true
console.log(isSorted([1, 3, 2, 4, 5])); //  false


// Problem 2: Find the missing number in an array
function findMissing(arr) {
    let n = arr.length + 1;
    let expectedSum = n * (n + 1) / 2;
    let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    let missingNumber = expectedSum - actualSum;
    return missingNumber;
}

console.log(findMissing([1, 2, 4, 5]));
// output: 3

// Problem 3: Find the intersection of two arrays
const arr3 = [1, 2, 3, 4];
const arr4 = [3, 4, 5, 6];

let obj = {};
let common = [];

for (let i = 0; i < arr3.length; i++) {
    obj[arr3[i]] = true
}
for (let i = 0; i < arr4.length; i++) {
    if (obj[arr4[i]]) {
        common.push(arr4[i]);
    }
}

console.log(common);
// output: [3, 4]

// Problem 4: Flatten a nested array
const arr = [1, [2, 3], 4, [5, 6]];
let result = []

for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j])
        }
    } else {
        result.push(arr[i])
    }
}
console.log(result);
// output: [1, 2, 3, 4, 5, 6]


// Problem 5: Find the sum of digits of a number
let num = 1234;

let sum = 0;

while (num > 0) {
    let last = num % 10;
    sum = sum + last
    num = Math.floor(num / 10)
}
console.log(sum);



// output: 10
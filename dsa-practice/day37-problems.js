// Problem: Find the average of all numbers in an array

const arr = [2, 4, 6, 8];

let sum=0;

for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}

console.log(`sum of the arr: ${sum/arr.length}`);

// output: 5
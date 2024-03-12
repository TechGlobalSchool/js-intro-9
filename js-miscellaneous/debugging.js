// Find the sum of numbers in an array 

const arr = [ 2, 1, 3, 4 ];

let sum = 0;

for(let i = 0; i < arr.length; i++) {
    debugger;
    sum += arr[i];
}

console.log(sum); // 10


function sum2(n1, n2) {
    return n1 + n2;
}

console.log(sum2(1, 2)); // 3
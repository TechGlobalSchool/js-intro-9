console.log(Math.PI); // 3.141592653589793

// min() and max() methods
console.log(Math.max(3, 5)); // 5
console.log(Math.min(3, 5)); // 3

console.log(Math.max(3, 5, 10.5, 15.4576, 100)); // 100
console.log(Math.min(3, 5, -1, 0, 35)); // -1

// abs() method
console.log(Math.abs(-5)); // 5
console.log(Math.abs(2 - 5)); // 3
console.log(Math.abs(10)); // 10
console.log(Math.abs(10 - 7)); // 3


// pow()
console.log(2 ** 3); // 8
console.log(5 ** 2); // 25

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25


// ceil(), floor(), round(), trunc() 
console.log(Math.ceil(1.01)); // 2
console.log(Math.ceil(1.50)); // 2
console.log(Math.ceil(1.99)); // 2

console.log(Math.floor(1.01)); // 1
console.log(Math.floor(1.50)); // 1
console.log(Math.floor(1.99)); // 1

console.log(Math.round(1.01)); // 1
console.log(Math.round(1.49)); // 1
console.log(Math.round(1.50)); // 2
console.log(Math.round(1.51)); // 2
console.log(Math.round(1.99)); // 2

console.log(Math.trunc(1.01)); // 1
console.log(Math.trunc(1.50)); // 1
console.log(Math.trunc(1.99)); // 1

// sqrt()
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(49)); // 7
console.log(Math.sqrt(625)); // 25


// random()
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
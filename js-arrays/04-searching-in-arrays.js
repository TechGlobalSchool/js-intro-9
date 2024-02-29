const numbers = [ 5, 10, 5, 10, 25, 100, 77, 5, 5 ];

console.log(numbers.includes(5)); // true
console.log(numbers.includes(50)); // false


numbers.indexOf(5); // 0
numbers.lastIndexOf(5); // 2

numbers.indexOf(10); // 1
numbers.lastIndexOf(10); // 3

numbers.indexOf(500); // -1
numbers.lastIndexOf(500); // -1


// check if the above array has both 5 and 7
// print true if it has both or false otherwise

console.log(numbers.includes(5) && numbers.includes(7)); // false
console.log(numbers.indexOf(5) >= 0 && numbers.indexOf(7) >= 0);
console.log(numbers.indexOf(5) !== -1 && numbers.indexOf(7) !== -1);

console.log(numbers.lastIndexOf(5) >= 0 && numbers.lastIndexOf(7) >= 0);
console.log(numbers.lastIndexOf(5) !== -1 && numbers.lastIndexOf(7) !== -1);

// search for 10 after the index of 4 (4 is included)
console.log(numbers.includes(10, 3)); // false
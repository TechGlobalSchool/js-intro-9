let name = 'John';

console.log(name); // John
console.log(typeof name); // string


const names = ['John', 'Jane', 'Alex', 'Max'];

// logging out your array
console.log(names); // [ 'John', 'Jane', 'Alex', 'Max' ]

// retrieving an individual element from an array
console.log(names[2]); // 'Alex'
console.log(names[0]); // 'John'

// retrieve and update Max with Mark 
names[3] = 'Mark';

console.log(names); // [ 'John', 'Jane', 'Alex', 'Mark' ]
console.log(names[3]); // 'Mark'




const numbers = [10, -3, 25, 67, 99, 100.99];
// const numbers = new Array(10, -3, 25, 67, 99, 100.99);

// you can get array size with the length property 
console.log(numbers.length); // 6

/*
Fetch and console log 25, 67, 100.99 elements from the array with their indexes
*/

console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[5]);

console.log(numbers[2], numbers[3], numbers[5]);



console.log(typeof names);
console.log(typeof numbers);
console.log(typeof []); 
console.log(typeof [1, 2, 3]); 
console.log(typeof ['John', true, 45]); 


const arr = ['John', true, 25, undefined, null, 45];

console.log(arr.length); // 6
console.log(arr[0]); // 'John'
console.log(arr[5]); // 45

console.log(arr[-1]); // undefined
console.log(arr[6]); // undefined
console.log(arr[7]); // undefined
console.log(arr[1000]); // undefined
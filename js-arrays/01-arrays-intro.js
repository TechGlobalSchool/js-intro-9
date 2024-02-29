// How to create an array 

// 1. using array literals [] -> square brackets 
const arr1 = []; // empty array

// 2. using array constructor with the new keyword 
const arr2 = new Array(); // empty array

// 3. using split() method and getting an array from a string
let name = 'John'; 
let sentence = 'I like arrays';

const arr3 = name.split('');
const arr4 = sentence.split(' ');

console.log(arr1); // []
console.log(arr2); // []
console.log(arr3); // [ 'J', 'o', 'h', 'n' ]
console.log(arr4); // [ 'I', 'like', 'arrays' ]

console.log(arr1.length); // 0
console.log(arr2.length); // 0
console.log(arr3.length); // 4
console.log(arr4.length); // 3


// Store names: Alex, John, Max
const array1 = [ 'Alex', 'John', 'Max' ]; 

console.log(array1); // [ 'Alex', 'John', 'Max' ]
console.log(array1.length); // 3

const array2 = new Array();
array2.push('Alex');
array2.push('John', 'Max');

console.log(array2); // [ 'Alex', 'John', 'Max' ]
console.log(array2.length); // 3


const cities = [ 'Chicago', 'Rome', 'Berlin', 'Tokyo' ];

// How to retrieve array elements 
let tokyo = cities[3]; // 'Tokyo'

console.log(tokyo); // 'Tokyo'

console.log(cities[1]); // 'Rome'

console.log(cities[-2]); // undefined
console.log(cities[5]); // undefined

// How to update an existing element in an array
cities[1] = 'Milan';
cities[0] = 'Miami';

console.log(cities); // [ 'Miami', 'Milan', 'Berlin', 'Tokyo' ]

// at() method
console.log(cities.at(-1)); // 'Tokyo'
console.log(cities.at(-5)); // undefined


const var1 = [];
const var2 = 25;
const var3 = 'John';

console.log(Array.isArray(var1)); // true
console.log(Array.isArray(var2)); // false
console.log(Array.isArray(var3)); // false

console.log(typeof var1); // 'object'
console.log(typeof var2); // 'number'
console.log(typeof var3); // 'string'


/* INTERVIEW QUESTION
How do you make sure if a variable is array?
typeof oeprator cannot be used as it returns object for the array
However, isArray() static method returns true if the given variable is actually an array.
*/

let smth1 = [];
let smth2 = {};

console.log(typeof smth1); // 'object'
console.log(typeof smth2); // 'object'
console.log(typeof null); // 'object'

console.log(Array.isArray(smth1)); // true


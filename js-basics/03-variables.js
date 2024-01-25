const age = 25;

console.log(age); // 25

console.log(age + 5); // 30

// The age is 25

// Concatenation: combinig multiple data (strings) together 
console.log('The age is', age);
console.log('The age is ' + age);



/*
Create a variable and store your name inside it
Output the name with a message like below

Example:
Jessica
My name is Jessica.
*/

let name = 'Jessica';

console.log('My name is ' + name + '.'); 
console.log('My name is', name + '.'); 

console.log(`My name is ${name}.`);


let favNumber = 7; 

// The Second Square of the 7 is 49.

console.log('The Second Square of the ' + favNumber + ' is ' + favNumber * favNumber + '.');
console.log('The Second Square of the', favNumber, 'is', favNumber * favNumber + '.');

console.log(`The Second Square of the ${favNumber} is ${favNumber * favNumber}.`);
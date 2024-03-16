let num = 10;

num = 11; // allowed

console.log(num); // 11

const pi = 3.14; 

pi = 5; // TypeError: Assignment to constant variable.

console.log(pi); 

// let is mutable, can be reassigned
// const is immutable, cannot be reassigned
// both let and const supports global, function, block and lexical scopes
// both let and const are not hoisted
// var supports only global and function scopes, IT DOES NOT support block scope
// var is hoisted
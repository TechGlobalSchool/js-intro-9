/*
Write a function named as greeting that outputs 'Hello'
*/

// 1. function declaration
function greeting1() {
    console.log('Hello');
}


greeting1();


// 2. function expression 
const greeting2 = function () {
    console.log('Hello');
}

greeting2();


// 3. arrow functions - ES6 feature
const greeting3 = () => {
    console.log('Hello');
}

greeting3();


/*
Write a function called product1 which takes 2 numbers and returns their product

product1(3, 5)   -> 15
product1(2, 0)   -> 0
product1(4, 3)   -> 12
*/

function product1(num1, num2) {
    return num1 * num2;
}


// Write product2 function with function expression
const product2 = function (num1, num2) {
    return num1 * num2;
}


// Write product3 function with arrow function
const product3 = (num1, num2) => {
    return num1 * num2;
}

// Enhanced arrow function
const product4 = (num1, num2) => num1 * num2;

console.log(product4(2, 5)); // 10


/*
Write an arrow function which takes a name string as an argument and returns it uppercased

upperCaseName('John') -> 'JOHN'
upperCaseName('TechGlobal') -> 'TECHGLOBAL'
*/

const upperCaseName = name => name.toUpperCase();

console.log(upperCaseName('TechGlobal')); // 'TECHGLOBAL'
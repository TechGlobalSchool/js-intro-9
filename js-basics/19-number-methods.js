console.log(1 + 2); // 3

// toString() method is used for coercion (converting a number to a string)
let num = 2;
console.log(1 + num.toString()); // '12'

// toFixed() - rounding the number's decimal side for up to given argument (the number passed in the parantheses of the method)

console.log(120000 / 52); // 2307.6923076923076
console.log(120000 / 26); // 4615.384615384615

console.log((120000 / 52).toFixed(2)); // 2307.69
console.log((120000 / 26).toFixed(2)); // 4615.38

console.log((35.45).toFixed(1)); // 35.5

// toPrecision() 
console.log((1.2345).toPrecision(3)); // 1.23
console.log((123.45).toPrecision(3)); // 123
console.log((123.99).toPrecision(3)); // 124

console.log((10).toPrecision(5)); // 10.000
console.log((123).toPrecision(5)); // 123.00


// Converting other data values into numbers -> Number(), parseInt(), parseFloat()

let num1 = '10';
let num2 = '10.5';

console.log(num1 + 5); // '105'
console.log(num2 + 5); // '10.55'

console.log(Number(num1) + 5); // 15
console.log(Number(num2) + 5); // 15.5

console.log(parseInt(num1) + 5); // 15
console.log(parseInt(num2) + 5); // 15

console.log(parseFloat(num1) + 5); // 15
console.log(parseFloat(num2) + 5); // 15.5


// -9007199254740991 - SAFE INTEGER - 9007199254740991

console.log(Number.isInteger('Hello')); // false
console.log(Number.isInteger(true)); // false
console.log(Number.isInteger(undefined)); // false
console.log(Number.isInteger(57)); // true
console.log(Number.isInteger(3475634.3457634)); // false 

console.log(Number.isSafeInteger(0)); // true
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false
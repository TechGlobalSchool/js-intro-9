// 1. string 
let favCoffee = 'Mocha'; // "Mocha" or `Mocha`
let itemName = 'Mouse'; 

console.log(favCoffee); // 'Mocha'
console.log(itemName); // 'Mouse'
console.log(typeof favCoffee); // string


// 2. number -> floating numbers & absolute numbers
let favCoffeePrice = 4.00;
let itemPrice = 16.99;

let age = 25;
let itemQuantity = 5; 

console.log(itemPrice); // 16.99
console.log(itemQuantity); // 5


// 3. boolean
let b1 = true;
let b2 = false;
let isThereMocha = true;
let isItRainingToday = false;

console.log(isItRainingToday); // false

// 4. undefined - a variable declared bu not assigned with any value
let favBook;
console.log(favBook); // undefined
console.log(typeof favBook); // undefined


// 5. null
let middleName = null;
console.log(middleName); // null
console.log(typeof middleName); // object

// 6. bigint 9007199254740991+      // This is added with ES6
let num1 = 90071992547409927236453745n;
let num2 = BigInt(90071992547409927236453745n);

console.log(num1);
console.log(num2);

console.log(typeof num1); // bigint
console.log(typeof num2); // bigint

// 7. symbol
let star = Symbol('*');

console.log(star);
console.log(typeof star); // symbol


// typeof operator 
console.log(typeof 5); // number
console.log(typeof 5n); // bigint 
console.log(typeof true); // boolean
console.log(typeof !false); // boolean 
console.log(typeof (3 == 3 && 5 != 5)); // boolean
console.log(typeof '123'); // string
console.log(typeof ''); // string
console.log(typeof null); // object
console.log(typeof undefined); // undefined 



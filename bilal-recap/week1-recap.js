// Requirement:
// - Create 2 variables called as i1, i2 and and store values of 7, 11 in these variables, respectively. 
//Then, output the average of the numbers.
// Test Data:7, 11
// Expected Output:
// The average of the numbers is: 9

console.log('=============================Task7=============================\n')
let i1 = 10;
let i2 = 12;

let avg = (i1 + i2) / 2;

console.log(`The average of the numbers is: ${avg}`)

// Requirement:
// - Create 5 variables called as a1, a2, a3, a4, a5 and and store values of 6, 10, 12, 15, 17 in these variables, respectively. Then, output the average of the numbers.
// Test Data:6, 10, 12, 15, 17
// Expected Output:
// The average of the numbers is: 12
console.log('\n=============================Task8=============================\n')
let a1 = 6;
let a2 = 10;
let a3 = 12;
let a4 = 15;
let a5 = 17;

avg = (a1+a2+a3+a4+a5) / 5;

console.log(`The average of the numbers is: ${avg}`)

// Requirement:
// - Create 3 variables called as b1, b2, b3 and and store values of 5, 6, 10 in these variables, respectively. 
// Then, output the square of each number entered by user.
// NOTE: Square of number means number multiplied with itself
// Test Data:5, 6, 10
// Expected Output:
// The 5 multiplied with 5 is = 25
// The 6 multiplied with 6 is = 36
// The 10 multiplied with 10 is = 100
console.log('\n=============================Task9=============================\n')

let b1 = 5, b2 = 6, b3 = 10;

console.log(`The ${b1} multiplied with ${b1} is = ${b1 ** 2}`); // b1 ** 2 or Math.pow(b1, 2) or b1 * b1
console.log(`The ${b2} multiplied with ${b2} is = ${b2 ** 2}`); // b1 ** 2 or Math.pow(b1, 2) or b1 * b1
console.log(`The ${b3} multiplied with ${b3} is = ${b3 ** 2}`); // b1 ** 2 or Math.pow(b1, 2) or b1 * b1

// Requirement
// -Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
// 	favBook = JS Algorithms & Data Structures
// 	favColor = Blue
// 	favNumber = 7

// Expected output: 
// The favorite book is JS Algorithms & Data Structures 
// The favorite color is  Blue
// The favorite number is  7
console.log('\n=============================Task11=============================\n')

let favBook = 'JS Algorithms & Data Structures';
let favColor = 'Blue';
let favNumber = 7;

console.log(
    `The favorite book is ${favBook}
The favorite color is ${favColor}
The favorite number is ${favNumber}`
    );


//     Requirement
// -Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
// 	firstName = John
// 	lastName = Doe
// 	age = 45
// 	emailAddress = johndoe@gmail.com
// 	phoneNumber = (123) 123 1234
// 	address = 123 St Chicago IL 12345

// Expected output: (it should exactly be same as below paragraph)
//           User who joined this program is John Doe. John's age is 45.
//       John's email address is johndoe@gmail.com, phone number is
//       (123) 123 1234, and address is 123 St Chicago IL 12345.


console.log('\n=============================Task12=============================\n')

let firstName = 'John'
let lastName = 'Doe'
let age = 45
let emailAddress = 'johndoe@gmail.com'
let phoneNumber = '(123) 123 1234'
let address = '123 St Chicago IL 12345'

console.log(`   User who joined this program is ${firstName} ${lastName}. ${firstName}'s age is ${age}.
${firstName}'s email address is ${emailAddress}, phone number is
${phoneNumber}, and address is ${address}.`)


// Random Numbers
// Formula: Math.floor(Math.random() * rangeOfNumbers + startingNumber)


//Crate a random number from 0 - 9 (both included)
console.log('---------------0-9---------------')
console.log(Math.floor(Math.random() * 10))

//Crate a random number from 10 - 20 (both included)
console.log('---------------10-20---------------')
console.log(Math.floor(Math.random() * 11 + 10))


//Crate a random number from 54 - 75 (both included)
console.log('---------------54-75---------------')
console.log(Math.floor(Math.random() * 22 + 54))
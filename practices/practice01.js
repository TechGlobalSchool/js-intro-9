/*
Requirement:
Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

Multiply number with 5 and print the result with below message

Expected result:
The random number * 5 = {result}

PSEUDO CODE:
1. Find a random number bt 0 and 50
2. multiply it with 5
3. compose it with a message
*/

let randomNumber = Math.floor(Math.random() * 51);

console.log("The random number = " + randomNumber);
console.log("The random number * 5 = " + randomNumber * 5);


/*
Requirement:
Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)

Find the min number
Find the max number
Find the absolute difference of the numbers

Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}

PSEUDO CODE:
1. Find 2 random numbers bt 1 and 10
2. Find min and max of these numbers
3. Find the absolute difference
*/

let random1 = Math.ceil(Math.random() * 10);
let random2 = Math.ceil(Math.random() * 10);

console.log("The random number 1 = " + random1);
console.log("The random number 2 = " + random2);

let max = Math.max(random1, random2);
let min = Math.min(random1, random2);
let diff = max - min; // Math.abs()

console.log("Max number = " + max);
console.log("Min number = " + min);
console.log("Difference = " + diff);

/*
Requirement:
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}
*/

let ranNumber = Math.floor(Math.random() * 51) + 50; //50 - 100

console.log("The random number % 10 = " + ranNumber % 10);


/*
Requirement:
Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points

Test data:
3 7 2 1 8

Expected result:
59
*/

let ranNum1 = Math.ceil(Math.random() * 10);
let ranNum2 = Math.ceil(Math.random() * 10);
let ranNum3 = Math.ceil(Math.random() * 10);
let ranNum4 = Math.ceil(Math.random() * 10);
let ranNum5 = Math.ceil(Math.random() * 10);

let result = ranNum1 * 5 + ranNum2 * 4 + ranNum3 * 3 + ranNum4 * 2 + ranNum5;

console.log(result);


/*
Requirement:
Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/
let r1 = Math.ceil(Math.random() * 25); // 1-25
let r2 = Math.ceil(Math.random() * 25) + 25; // 26-50
let r3 = Math.ceil(Math.random() * 25) + 50; // 51-75
let r4 = Math.ceil(Math.random() * 25) + 75; // 76-100

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);

console.log("Difference of max and min = " + (r4 - r1));
console.log("Difference of second and third = " + (r3 - r2));
console.log((r1 + r2 + r3 + r4) / 4);
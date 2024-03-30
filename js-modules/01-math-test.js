const { generateRandomNumber, minOfArray, maxOfArray } = require('./../utils/MathHelper.js');

/*
Generate 5 random numbers bt 10 and 25 both inclusive
Find the min and max of these numbers
*/

let r1 = generateRandomNumber(10, 25);
let r2 = generateRandomNumber(10, 25);
let r3 = generateRandomNumber(10, 25);
let r4 = generateRandomNumber(10, 25);
let r5 = generateRandomNumber(10, 25);

console.log(r1, r2, r3, r4, r5);

console.log('Min of the random numbers is =', minOfArray([ r1, r2, r3, r4, r5 ]));
console.log('Max of the random numbers is =', maxOfArray([ r1, r2, r3, r4, r5 ]));
const {generateRandomNumber} = require('../utils/MathHelper.js');


console.log('\n--------------------------------\n');
let randomNumber = generateRandomNumber(1, 10);

if(randomNumber === 7) {
    console.log('I got my fav number!');
}
else {
    console.log(`Unfortunately, I got ${randomNumber}!`);
}


console.log('\n--------------------------------\n');

/*
Generate a random number between 1 and 10
Print EVEN if the number is EVEN
Print ODD if the number is ODD

5   -> 'ODD'
8   -> 'EVEN'
*/

console.log('\n--------------------------------\n');

let r1 = generateRandomNumber(1, 10);
console.log('Randomly generated number is = ' + r1);

if(r1 % 2 === 0) {
    console.log('EVEN');
}
else {
    console.log('ODD');
}


/*
Generate a random number between 0 and 1 (both inclusive)
Print "The number is ZERO" if the generated number is zero
Print "The number is ONE" if the generated number is one
*/

console.log('\n--------------------------------\n');

let r2 = generateRandomNumber(0, 1);

console.log('Randomly generated number is = ' + r2);

if(r2) {
    console.log('The number is ONE');
}
else {
    console.log('The number is ZERO');
}


/*
Generate a random number between -10 and 10 (both inclusive)
Print "The number is POSITIVE" if the generated number is more than zero
Print "The number is NEGATIVE" if the generated number is less than zero
Print "The number is ZERO" if the generated number is zero
*/
console.log('\n--------------------------------\n');

let r3 = generateRandomNumber(-10, 10);
console.log('Randomly generated number is = ' + r3);

if(r3 > 0) {
    console.log('The number is POSITIVE');
}
else if(r3 < 0) {
    console.log('The number is NEGATIVE');
}
else { // hidden condition !(r3 > 0) && !(r3 < 0)
    console.log('The number is ZERO');
}

if(r3 > 0) {
    console.log('The number is POSITIVE');
}
else {
    if(r3 < 0) {
        console.log('The number is NEGATIVE');
    }
    else {
        console.log('The number is ZERO');
    }
}


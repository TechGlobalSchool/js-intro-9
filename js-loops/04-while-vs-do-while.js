const {generateRandomNumber} = require('../utils/MathHelper.js');

let i = 1, j = 1;

while(i <= 3) { // false
    console.log('This is while loop block');
    i++;
}


do {
    console.log('This is do-while loop block');
    j++;
} while(j <= 3);




const gameNumber = 4;
let guessedNumber;
let counter = 0;
let found = true;


do {
    guessedNumber = generateRandomNumber(1, 10);
    counter++;

    console.log(guessedNumber);

    if(counter === 5) {
        console.log('You could not find the number after 5 times! GAME OVER LOSER!!!');
        found =  false;
        break;
    }
} while(guessedNumber !== gameNumber);


if(found) {
    let timeOrTimes = counter === 1 ? 'time' : 'times';
    console.log(`The number is found after ${counter} ${timeOrTimes}!`);
}


// Generate an even number bt 1 and 10 
// Calculate how many attempts it takes to generate it

// 1. do-while

let att = 0;
let rNum; // undefined 

do{
    rNum = generateRandomNumber(1, 10);
    att++;
} while(rNum % 2 !== 0);

console.log(`We found an even number after ${att} time/s which is ${rNum}`); 


// 2. while 

let att1 = 0;
let rNum1; // undefined 

while(true) {
    rNum1 = generateRandomNumber(1, 10);
    att1++;

    if(rNum1 % 2 === 0) break;
}

console.log(`We found an even number after ${att1} time/s which is ${rNum1}`); 


// 3. for loop
let att2 = 0;
let rNum2; // undefined 

for( ; ; ) {
    rNum2 = generateRandomNumber(1, 10);
    att2++;

    if(rNum2 % 2 === 0) break;
}

console.log(`We found an even number after ${att2} time/s which is ${rNum2}`); 
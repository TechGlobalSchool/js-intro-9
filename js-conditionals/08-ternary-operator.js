let gender = 'male';
// let fname;

// if(gender === 'male') {
//     fname = 'Alex';
// }
// else {
//     fname = 'Emma';
// }

// Using ternary instead of if-else above
// condition ? true-statement : false-statement;
// gender === 'male' ? fname = 'Alex' : fname = 'Emma';

let fname = gender === 'female' ? 'Emma' : 'Alex';

console.log(fname); // 'Alex'

let number = 10;

number % 2 === 0 ? console.log('EVEN') : console.log('ODD');


let num2 = -5;

// if(num2 > 0) {
//     console.log('POSITIVE');
// }
// else if(num2 < 0) {
//     console.log('NEGATIVE');
// }
// else {
//     console.log('ZERO');
// }

let result = num2 > 0 ? 'POSITIVE' : num2 < 0 ? 'NEGATIVE' : 'ZERO';

console.log(result);



/*

*/

// mood will be either GREAT (70+) or GOOD (< 70)

let mood; 
let mock_score = 75;

// mock_score >= 70 ? console.log('GREAT') : console.log('GOOD'); // logging the mood without storing
// let mood = mock_score >= 70 ? 'GREAT' : 'GOOD'; // storing the mood in a variable to be used for the rest of the program

mood = mock_score >= 70 ? 'GREAT' : 'GOOD';

console.log('The mood is', mood);

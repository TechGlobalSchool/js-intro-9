// Padding

let str = 'ABC';

console.log(str.padStart(10, '#')); // '#######ABC'
console.log(str.padEnd(5, '#')); // 'ABC##'

console.log(str.padStart(4, '$$$')); // '$ABC'
console.log(str.padEnd(4, '$$$')); // 'ABC$'

console.log(str.padEnd(2, '$$')); // 'ABC'

// repeat()
let greeting = 'Hello';

console.log(greeting.repeat(3)); // 'HelloHelloHello'

let well = 'Well!';

console.log(well.repeat(5));
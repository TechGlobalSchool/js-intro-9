// Trimming

console.log(' Registry ' === 'Registry'); // false
console.log(' Registry '.trim() === 'Registry'); // true


let greeting = '   Good Morning   ';
console.log(greeting.trimStart()); // 'Good Morning   '
console.log(greeting.trimEnd()); // '   Good Morning'
console.log(greeting.trim()); // 'Good Morning'

console.log(greeting); // '   Good Morning   '

console.log('Hello'.trim()); // 'Hello'

/*
TASK: used to remove extra spaces before and after your actual string
RETURN: they return a new string without extra spaces 
ARGUMENTS: No arguments
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static
*/
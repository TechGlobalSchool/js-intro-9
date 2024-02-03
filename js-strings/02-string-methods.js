// Changing cases

let day = 'Saturday';

let dayLower = day.toLowerCase(); 
let dayUpper = day.toUpperCase();

console.log(dayLower); // 'saturday'
console.log(dayUpper); // 'SATURDAY'
console.log(day); // 'Saturday'

/*
toLowerCase()
TASK: converts all the letters in a string to lower case
RETURN: returns the string back all the upper case letters converted to lower case letters
ARGUMENTS: No arguments
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static

toUpperCase()
TASK: converts all the letters in a string to upper case
RETURN: returns the string back all the lower case letters converted to upper case letters
ARGUMENTS: No arguments
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static
*/

console.log('123$%^%&  /,.,'.toUpperCase()); // '123$%^%&  /,.,'
console.log('123$%^%&  /,.,'.toLowerCase()); // '123$%^%&  /,.,'

// You can change(replace) the original value by re-assignment
let name = 'john wick';

name = name.toUpperCase();

console.log(name); // 'JOHN WICK';
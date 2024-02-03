// Searching in strings 

let company = 'TechGlobal';

// startsWith() method
company.startsWith('T'); // true
company.startsWith('t'); // false

company.startsWith('Tech'); // true
company.startsWith('TechGlobal'); // true
console.log(company.startsWith('')); // true

/*
TASK: used to check if the string starts with another substring
RETURN: it returns a boolean (true or false)
ARGUMENTS: takes one or 2 arguments (substring, substring and position)
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static
*/

company.endsWith('Global'); // true
company.endsWith('l'); // true
company.endsWith('al'); // true

/*
TASK: used to check if the string ends with another substring
RETURN: it returns a boolean (true or false)
ARGUMENTS: takes one or 2 arguments (substring, substring and position)
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static
*/

console.log(company); // 'TechGlobal'

console.log(company.startsWith('Global', 4)); // true

/*
TASK: used to check if the string includes another substring
RETURN: it returns a boolean (true or false)
ARGUMENTS: takes one or 2 arguments (substring, substring and position)
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static
*/

company.includes('hGl'); // true
company.includes('GL'); // false
// Extracting characters from the string

let company = 'TechGlobal';

// property access to extract characters
let firstChar = company[0]; 
let lastChar = company[company.length - 1];

let secondChar = company[1];
let secondLastChar = company[company.length - 2];

console.log(firstChar); // 'T'
console.log(lastChar); // 'l'

console.log(secondChar); // 'e'
console.log(secondLastChar); // 'a'

// Tricky part with property access
console.log(company[-1]); // undefined
console.log(company[10]); // undefined
console.log(company[0.99]); // undefined


// charAt() method
console.log(company.charAt(0)); // 'T'
console.log(company.charAt(company.length - 1)); // 'l'

// Tricky part with charAt() method
console.log(company.charAt(-1)); // ''
console.log(company.charAt(10)); // ''

/*
TASK: used to retrieve/get a character at specified index
RETURN: it returns a single character as a string
NOTE: If the index is not valid, it returns empty string ('')
ARGUMENTS: It takes a number (index) as an argument
CHANGE ORIGINAL VALUE: does not change the original value
STATIC 0r NON-STATIC: non-static
*/

/*
Assume you are given a string,
Print first and last characters of the string concatenated 

Given       Expected
Hello   ->  Ho
Good    ->  Gd
Hi      ->  Hi
A       ->  AA
*/

let word = 'A';

// 2 ways to solve
console.log(word[0] + word[word.length - 1]);
console.log(word.charAt(0) + word.charAt(word.length - 1));


// at() method
let city = 'Chicago';
console.log(city.at(0)); // 'C'
console.log(city.at(1)); // 'h'
console.log(city.at(city.length - 1)); // 'o'
console.log(city.at(city.length - 2)); // 'g'

// Tricky part with at() method 
console.log(city.at(-1)); // 'o'
console.log(city.at(-2)); // 'g'
console.log(city.at(7)); // undefined

// Advantage of using at() method -> retrieving last characters is easier compared to [] and charAt() method
let obj = 'Computer';

// get the last 2 characters -> 'er'
console.log(obj[obj.length - 2] + obj[obj.length - 1]); // 'er'
console.log(obj.charAt(obj.length - 2) + obj.charAt(obj.length - 1)); // 'er'
console.log(obj.at(-2) + obj.at(-1)); // 'er'

/*
TASK: used to retrieve/get a character at specified index
RETURN: it returns a single character as a string
NOTE: If the index negative, it goes backward and returns a character at the found index
If the index greater than or equals length of the string, then it returns undefined. 
ARGUMENTS: It takes a number (index) as an argument
CHANGE ORIGINAL VALUE: does not change the original value
STATIC 0r NON-STATIC: non-static
*/

// charCodeAt() 

let country = 'Italy';
console.log(country[0]); // 'I'
console.log(country.at(0)); // 'I'
console.log(country.charAt(0)); // 'I'
console.log(country.charCodeAt(0)); // 73
console.log(country.charCodeAt(1)); // 116

console.log(country.charCodeAt(100)); // NaN
console.log(country.charCodeAt(-1)); // NaN

/*
TASK: used to retrieve/get a character's ASCII Decimal Representation at specified index
RETURN: it returns ASCII Decimal Representation as a number
NOTE: If the index is not valid, it returns NaN 
ARGUMENTS: It takes a number (index) as an argument
CHANGE ORIGINAL VALUE: does not change the original value
STATIC 0r NON-STATIC: non-static
*/
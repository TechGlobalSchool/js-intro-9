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
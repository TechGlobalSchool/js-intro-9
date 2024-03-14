const numbers = [10, 5, 100, 77, 50, 65, 0]; 

// Find all the numbers that are 50 or more -> [100, 77, 50, 65]
console.log(numbers.filter((number) => number >= 50)); // [ 100, 77, 50, 65 ]
console.log(numbers.filter((number) => number >= 50).length); // 4


// For..of loop solution
const result = [];

for(const number of numbers) {
    if(number >= 50) result.push(number);
}

console.log(result);


/*
Create a method which takes an array as argument and returns all the even numbers from the original
array as a new array

evens( [ 1, 5, 2, 0, 6, 7 ] )   -> [ 2, 0, 6 ]
evens( [ 4, 5, 2 ] )            -> [ 4, 2 ]

*/

function evens (arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(evens([ 1, 5, 2, 0, 6, 7 ]));
console.log(evens([ 4, 5, 2 ]));


const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];

// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

console.log(fruits.filter(fruit => fruit.toLowerCase().includes('apple'))); // [ 'Apple', 'Red apple', 'Pineapple' ]
console.log(fruits.filter(x => x.toLowerCase().indexOf('a') >= 0).length); // 4
console.log(fruits.filter(x => x.toLowerCase().indexOf('i') >= 0).length); // 2
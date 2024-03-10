const numbers = [ 4, 10, 3, 0, -2, -5, 1 ];

// evens = 4

const evenCounter = numbers.reduce((count, number) => number % 2 === 0 ? count + 1 : count, 0);

console.log(evenCounter); // 4


// sum = 11

const sumOfNumbers = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(sumOfNumbers); // 11


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3

const elementsHasApple = fruits.reduce((count, currentFruit) => {
    if(currentFruit.toLowerCase().indexOf('apple') >= 0) return count + 1;
    return count;
}, 0);

console.log(elementsHasApple); // 2

const elementsHasI = fruits.reduce((count, currentFruit) => {
    if(currentFruit.toLowerCase().indexOf('i') >= 0) return count + 1;
    return count;
}, 0);

console.log(elementsHasI); // 2


const elementsEndsWithE = fruits.reduce((count, currentFruit) => {
    if(currentFruit.toLowerCase().endsWith('e')) return count + 1;
    return count;
}, 0);

console.log(elementsEndsWithE); // 3



/*
Requirement:
Write a function named as max() which takes an array as an argument and returns the 
greatest element when invoked.
 
Examples:
max([0, 3, -9,  5, 8]) 	    -> 8
max([-2, 0, -7, 10, -5]) 	-> 10
max([1, 2, 3, -2])          -> 3
max([-5, -2])               -> -2
*/

function max(arr) {
    if(arr.length === 0) throw Error('This array is empty!!!');

    return arr.reduce((max, number) => {
        if(number > max) return number;
        return max;
    });
}

console.log(max([0, 3, -9,  5, 8]));
console.log(max([-2, 0, -7, 10, -5]));


/*
Requirement:
Write a function named as min() which takes an array as an argument and returns the 
smallest element when invoked.
 
Examples:
min([0, 3, -9,  5, 8]) 	    -> -9
min([-2, 0, -7, 10, -5]) 	-> -7
min([1, 2, 3, -2])          -> -2
min([-5, -2])               -> -5
*/
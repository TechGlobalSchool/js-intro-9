/*
Requirement:
Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8]) 		-> 3
firstPos([-2, 0, -7, 10, -5]) 	    -> 10
firstPos([1, 2, 3, -2])             -> 1
*/

/*
function firstPos(array) {
    let firstPos = null;
    for(const number of array) {
        if(number > 0) {
            firstPos = number;
            break;
        }
    }
    return firstPos;
}
*/

function firstPos(array) {
    for(const number of array){
        if(number > 0) return number;
    }
}

console.log(firstPos([0, 3, -9,  5, 8]));

/*
Requirement:
Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8]) 		    -> -9
lastNeg([-2, 0, -7, 10, -5]) 	    -> -5
lastNeg([1, 2, 3, -2])              -> -2
*/


function lastNeg(array) {
    for(const number of array.reverse()){
        if(number < 0) return number;
    }
}

console.log(lastNeg([-2, 0, -7, 10, -5])); // -5

/*
2
function lastNeg(array) {
    for(let i = array.length-1; i >= 0; i--){
        if(array[i] < 0) return array[i];
    }
}
*/

/*
3
function lastNeg(array) {
    let lastNeg = null; 
    for(const number of array){
        if(number < 0) lastNeg = number;
    }
    return lastNeg;
}
*/


/*
Requirement:
Write a function named as firstLongest() which takes an array as an argument and returns the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 or more elements having the longest count of characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"]) 	-> "yellow"
firstLongest(["Apple", "Banana", "Orange"]) 	    -> "Banana"
firstLongest(["purple", "yellow", "orange"]) 	    -> "purple"
*/

function firstLongest(array){
    let firstLongest = ''; 
    for(const str of array) { 
       if(str.length > firstLongest.length) firstLongest = str;
    }

    return firstLongest;
}

console.log(firstLongest(["red", "blue", "yellow", "white"])); // Yellow
console.log(firstLongest(["Apple", "Banana", "Orange"])); //  Banana
console.log(firstLongest(["purple", "yellow", "orange"])); // purple

/*
Requirement:
Write a function named as lastShortest() which takes an array as an argument and returns the shortest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 or more elements having the shortest count of characters, always return the last occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"]) 	-> "red"
lastShortest(["Apple", "Banana", "Mango"]) 	        -> "Mango"
lastShortest(["white", "yellow", "brown"]) 	        -> "brown"
*/
/*
function lastShortest(array){
    let lastShortest = ''; // brown
    let maxLength = Infinity; // 5

    for(const str of array) { // brown
        if(str.length <= maxLength) { // 5 < 5
            lastShortest = str;
            maxLength = str.length;
        }
    }
    return lastShortest;
}
*/

function lastShortest(array){
    let lastShortest = array[0];

    for(const str of array) {
        if(str.length <= lastShortest.length) lastShortest = str;
    }

    return lastShortest;
}


console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));

/*
Requirement:
Write a function named as max() which takes an array as an argument and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
Examples:
max([0, 3, -9,  5, 8]) 	    -> 8
max([-2, 0, -7, 10, -5]) 	-> 10
max([1, 2, 3, -2])          -> 3
max([-5, -2])               -> -2
*/

function max(array) { // 1, 2, 3, -2
    let max = -Infinity; 

    for(const number of array) { 
        if (number > max) max = number;
    }
    return max;
}

/*
Requirement:
Write a function named as min() which takes an array as an argument and returns the smallest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
Examples:
min([0, 3,  5, 8]) 	        -> 0
min([-2, 0, -7, 10, -5]) 	-> -7
min([1, 2, 3, 15])          -> 1
*/

function min(array){
    let min = Infinity;

    for(const number of array) {
        if(number < min) min = number;
    }

    return min;
}

console.log(min([0, 3,  5, 8])); 
console.log(min([-2, 0, -7, 10, -5])); 
console.log(min([1, 2, 3, 15])); 

/*
Requirement:
Write a function named as commonElements() which takes 2 arrays as arguments and 
returns all the matching elements from the both arrays when invoked.
NOTE: Assume you will not be given an empty array.
 
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]) 	    -> [ 20, 50, 70 ] 
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]) 		    -> [ ] 
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]) 	-> ["abc" ] 
*/

function commonElements(arr1, arr2) {
    const arrCommon = [];

    for(const number of arr2){
        if(arr1.indexOf(number) >= 0) arrCommon.push(number);
    }

    return arrCommon;
}

console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]) );
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]) );
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]));

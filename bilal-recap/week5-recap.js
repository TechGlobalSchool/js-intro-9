/*
Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.

•You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
•You will need to convert numbers divisible by 3 to 'Fizz'
•You will need to convert numbers divisible by 5 to 'Buzz'
•You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
•The rest will stay the same.

NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5) -> "Buzz"
fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"
*/

function fizzBuzz(num1, num2){
let start = Math.min(num1, num2)
let end = Math.max(num1, num2)

let arr = []
for(let i = start; i <= end; i++){
    if(i % 3 === 0 && i % 5 === 0) arr.push("FizzBuzz")
    else if(i % 3 === 0) arr.push("Fizz")
    else if(i % 5 === 0) arr.push("Buzz")
    else arr.push(i)
}
return arr.join(' | ');
}

console.log(fizzBuzz(12, 5))


/*
Requirement:
Write a function named as getMultipleOf5() which takes 2 
number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match 
when invoked.

NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/

function getMultipleOf5(num1, num2){
    let start = Math.min(num1, num2)
    let end = Math.max(num1, num2)
    let divisibleBy5 = [];
    
    for(let i = start; i <= end; i++){
        if(i % 5 === 0) divisibleBy5.push(i)
    } 

    return num1 > num2 ? divisibleBy5.reverse() : divisibleBy5;

}


// //  if(num2 > num1){

// for(let i = num1; i <= num2; i++){
//     if(i % 5 === 0) divisibleBy5.push(i)
// } 

// }else{

// for(let i = num1; i >= num2; i--){
//     if(i % 5 === 0) divisibleBy5.push(i)
//    }

// }

console.log(getMultipleOf5(3, 17))// [5, 10 ,15]
console.log(getMultipleOf5(17, 3))// [15, 10 ,5]
console.log(getMultipleOf5(5, 5))// [15, 10 ,5]
console.log(getMultipleOf5(2, 4))// [15, 10 ,5]


/*
Requirement:
Write a function named as getEvens() which takes 2 number 
arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no even numbers in the 
range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]
*/

console.log("=====================================================")

function getEvens(num1, num2){
    let evens = [];

    let start = Math.min(num1, num2)
    let end = Math.max(num1, num2)

    for(let i = start; i <= end; i++){
        if(i % 2 === 0) evens.push(i)
    }

    return evens
}

console.log(getEvens(2, 7))// -> [ 2, 4, 6 ]
console.log(getEvens(17, 5))// -> [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4))// -> [ 4 ]
console.log(getEvens(3, 3))// -> [ ]


/*
Requirement:
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World")  -> "olleH dlroW"
reverseStringWords("I like JavaScript")  -> "I ekil tpircSavaJ"
reverseStringWords("Hello")  -> "olleH"
reverseStringWords("")  -> ""
reverseStringWords("    ")  -> ""
*/

function reverseStringWords(str) {
     str = str.trim();

     let words =  str.split(' ');

     for(let i = 0; i < words.length; i++){
        words[i] = words[i].split('').reverse().join('');
     }

     return words;
}

console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords("") )
console.log(reverseStringWords("    "))

/*
Requirement:
Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  -> -1
*/

function firstDuplicate(arr){
    for(let ele of arr){
        if(arr.indexOf(ele) !== arr.lastIndexOf(ele)) return ele
    }

    return -1
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]) )
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
console.log(firstDuplicate([ 1, 2, 3]))
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))



/*
Requirement:
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -
> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -
> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -
> [ ]
*/

function getDuplicates(arr){// [ 3, 7, 10, 0, 3, 10 ] -> 3,10
    let container = [];//3, 7, 10, 0
    let allDuplicates = [];// 3, 10

    for(let obj of arr){
        if(container.includes(obj) && !allDuplicates.includes(obj)) allDuplicates.push(obj)
        else container.push(obj)
    }
    return allDuplicates;
}


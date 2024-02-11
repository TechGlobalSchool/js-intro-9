//task2
/*
Requirement:
Convert given Strings below to number data types and find the greatest and smallest values and find the average and absolute difference of them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

NOTE: expected results should exactly match!!!

*/
console.log('----------TASK02----------\n');
let s1 = "200", s2 = "-50";

let n1 = Number(s1), n2 = Number(s2);

console.log(`The greatest value is = ${Math.max(n1,n2)}`)
console.log(`The smallest value is = ${Math.min(n1,n2)}`)
console.log(`The average is = ${(n1+n2)/2}`)
console.log(`The absolute difference is = ${Math.abs(n1 - n2)}`)

//TASK03
/*
Requirement:
Write a program that generates 2 random numbers between 1 and 50 
(both 1 and 50 are included). Then, find the absolute difference of these numbers.
 
Test Data: 5, 27
Expected Output:
The absolute difference between numbers is = 22
*/
console.log('\n----------TASK03----------\n');

let random1 = Math.floor(Math.random() * 50 + 1);
let random2 = Math.floor(Math.random() * 50 + 1);

console.log(random1,random2)
console.log(`The absolute difference between numbers is = ${Math.abs(random1 - random2)}`)

console.log('\n----------"-50 to 50"----------\n');
//random number from -50 to 50
console.log(Math.floor(Math.random() * (101) + -50))

//Task06
/*
Requirement:
Write a program that generates 3 random numbers between 1 and 100 
(1 and 100 are included) and find if all the numbers are more than 25.

Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 25.
*/

console.log('\n----------TASK06----------\n');

let num1 = Math.floor(Math.random() * 100 + 1);
let num2 = Math.floor(Math.random() * 100 + 1);
let num3 = Math.floor(Math.random() * 100 + 1);

console.log(num1, num2, num3);
console.log(num1 > 25 && num2 > 25 && num3 > 25)

//task07
/*
Requirement:
Assume you are given a name let name = "David"; 
Print out the length of the name
Find the first character in the name and print it
Find the last character in the name and print it
Find the first 3 characters in the name and print them
Find the last 3 characters in the name and print them

Expected Output: The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/

let name = 'Alsilwadi';

console.log(`The length of the name is = ${name.length}`)
console.log(`The last character in the name is = ${name[0]}`)
console.log(`The first 3 characters in the name are = ${name.slice(0,3)}`)
console.log(`The last 3 characters in the name are = ${name.slice(-3)}`)


//remove the first space in the string

let str = "Hello, my name is John Doe.";
let firstSpace = str.indexOf(' ');
let str2 = str.slice(0, firstSpace) + str.slice(firstSpace + 1)
console.log(str2)
firstSpace = str2.indexOf(' ');
console.log(str2.slice(0,firstSpace) + str2.slice(firstSpace + 1))


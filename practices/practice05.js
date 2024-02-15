/*
Requirement:
Assume you are given a number between 1 and 100 (both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1:
34

Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter


Test data 2:
76

Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/

let num1 = 59; // 1, 100

// WAY-1
if (num1 <= 25) {
    console.log(`${num1} is in the 1st half\n${num1} is in the 1st quarter`);
}
else if (num1 <= 50) {
    console.log(`${num1} is in the 1st half\n${num1} is in the 2nd quarter`);
}
else if (num1 <= 75) {
    console.log(`${num1} is in the 2nd half\n${num1} is in the 3rd quarter`);
}
else {
    console.log(`${num1} is in the 2nd half\n${num1} is in the 4th quarter`);
}

// WAY-2
if (num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
}
else {
    console.log(`${num1} is in the 2nd half`);
}

if (num1 <= 25) {
    console.log(`${num1} is in the 1st quarter`);
}
else if (num1 <= 50) {
    console.log(`${num1} is in the 2nd quarter`);
}
else if (num1 <= 75) {
    console.log(`${num1} is in the 3rd quarter`);
}
else {
    console.log(`${num1} is in the 4th quarter`);
}


// WAY-3
if (num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    if (num1 <= 25) {
        console.log(`${num1} is in the 1st quarter`);
    }
    else {
        console.log(`${num1} is in the 2nd quarter`);
    }
}
else {
    console.log(`${num1} is in the 2nd half`);
    if (num1 <= 75) {
        console.log(`${num1} is in the 3rd quarter`);
    }
    else {
        console.log(`${num1} is in the 4th quarter`);
    }
}

// SHORT for WAY-3
if (num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    if (num1 <= 25) console.log(`${num1} is in the 1st quarter`);
    else console.log(`${num1} is in the 2nd quarter`);
}
else {
    console.log(`${num1} is in the 2nd half`);
    if (num1 <= 75) console.log(`${num1} is in the 3rd quarter`);
    else console.log(`${num1} is in the 4th quarter`);
}

// TERNARY for WAY-3
if (num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    console.log(num1 <= 25 ? `${num1} is in the 1st quarter` : `${num1} is in the 2nd quarter`);
}
else {
    console.log(`${num1} is in the 2nd half`);
    console.log(num1 <= 75 ? `${num1} is in the 3rd quarter` : `${num1} is in the 4th quarter`)
}

// Switch
switch (true) {
  case num1 < 51:
    console.log(`${num1} is in the 1st half`);
    break;
  default:
    console.log(`${num1} is in the 2nd half`);
}
switch (true) {
  case num1 < 26:
    console.log(`${num1} is in the 1st quarter`);
    break;
  case num1 < 51:
    console.log(`${num1} is in the 2nd quarter`);
    break;
  case num1 < 76:
    console.log(`${num1} is in the 3rd quarter`);
    break;
  default:
    console.log(`${num1} is in the 4th quarter`);
}


/*
Requirement:
Assume you are given 3 numbers between 1 and 100 (both 1 and 100 are included).

Print true if they are all even numbers.
Otherwise, print false

Test data 1:
2, 4, 6

Expected result 1:
true


Test data 2:
68, 44, 2

Expected result 2:
true


Test data 3:
10, 20, 25

Expected result 3:
false


Test data 4:
51, 67, 99

Expected result 4:
false

*/
let num31 = 2, num32 = 3, num33 = 6;

console.log(num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0); // PROF WAY
console.log(num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0 ? true : false);

if (num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0) console.log(true);
else console.log(false);


/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace or special.

Test data 1:
"a"

Expected result 1:
"a"  is a letter


Test data 2:
"5"

Expected result 2:
"5"  is a digit


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is a whitespace
*/

let var8 = " ";
let var81 = var8.charCodeAt(0);

if((var81 >= 65 && var81 <= 90) || (var81 >= 97 && var81 <= 122)) console.log(`"${var8}" is a letter`);
else if(var81 >= 48 && var81 <= 57) console.log(`"${var8}" is a digit`);
else if(var81 === 32) console.log(`"${var8}" is a whitespace`);
else console.log(`"${var8}" is a special character`);


/*
Requirement:
Write a function named hasBlue() which takes a string argument and returns true 
if the string has an occurrence of blue word, returns false otherwise.

NOTE: Ignore upper/lower cases.

Examples:
hasBlue("Hello World")   		-> false
hasBlue("Javabluescript")   	-> true
hasBlue("Tech Blue Global")   	-> true
hasBlue("1234")   		        -> false
hasBlue("ABLUEC")   		    -> true
*/

function hasBlue(str) {
    return str.toLowerCase().includes('blue'); // below code is a good alternative
    // return str.toLowerCase().indexOf('blue') >= 0;
}

console.log(hasBlue("Hello World")); // false
console.log(hasBlue("Javabluescript")); // true
console.log(hasBlue("Tech Blue Global")); // true
console.log(hasBlue("1234")); // false
console.log(hasBlue("ABLUEC")); // true


/*
Requirement:
Write a function named startT() which takes a string argument and returns true 
if the string start with letter T, returns false otherwise.

NOTE: Ignore upper/lower cases.

Examples:
startT("Hello World")   	-> false
startT("typescript")   	-> true
startT("TechGlobal")   	-> true
startT("1234")   	-> false
startT("ABC")   	-> false
*/

function startT(str) {
    return str[0].toLowerCase() === 't';
}

console.log(startT("Hello World")); // false
console.log(startT("typescript")); // true
console.log(startT("TechGlobal")); // true
console.log(startT("1234")); // false
console.log(startT("ABC")); // false
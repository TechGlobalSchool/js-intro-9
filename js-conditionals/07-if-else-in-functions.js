/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
*/

function startE(fname) {
    if(fname.length === 0 || fname[0].toUpperCase() !== 'E') {
        return false;
    }
    else {
        return true;
    }
}

console.log(startE('Emily')); // true
console.log(startE('emily')); // true
console.log(startE('Alex')); // false
console.log(startE('')); // false


/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/

function divisible5(num) {
    if(num % 5 === 0) return true;
    return false;
}

console.log(divisible5(7)); // false
console.log(divisible5(0)); //  true
console.log(divisible5(10)); // true
console.log(divisible5(99)); // false


/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/

function fooBar(num) {
    if(num % 5 === 0 && num % 7 === 0) return 'foobar';
    else if(num % 5 === 0) return 'foo';
    else if(num % 7 === 0) return 'bar'; 

    return num;
}

console.log(fooBar(35)); // 'foobar'
console.log(fooBar(70)); // 'foobar'
console.log(fooBar(0)); // 'foobar'
console.log(fooBar(5)); // 'foo'
console.log(fooBar(21)); // 'bar'
console.log(fooBar(8)); // 8
console.log(fooBar(11)); // 11


/*
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/ 

function getGrade(num) { // 1 and 100
    if(num < 0 || num > 100) throw Error('INVALID input!!! The score cannot be ' + num);

    if(num >= 90) return 'A';
    else if (num >= 80) return 'B';
    else if (num >= 70) return 'C';
    else if (num >= 60) return 'D';

    return 'F';
}

console.log(getGrade(83)); // 'B'
console.log(getGrade(77)); // 'C'
console.log(getGrade(69)); // 'D'
console.log(getGrade(32)); // 'F'
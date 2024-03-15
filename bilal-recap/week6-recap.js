/*
Requirement:
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
*/

const countPos = (arr) => arr.filter(num => num > 0).length;

// const countPos = (arr) => {

//     let counter = 0;

//     for(let num of arr){
//         if(num > 0) counter++;
//     }
//     return counter
// }

console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))
console.log(countPos([0, -1, -2, -3]))

//str = ''array'' -> "aa"
const countA = (str) => str.split('').filter(i => i.toLowerCase() === 'a').length;

console.log(countA("array"))


/*
Requirement: 
Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.


Examples:
isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Test1234#")  -> true
*/

const isPasswordValid = (password) => {
    //checks range
    if(password.length < 8 || password.length > 16) return false;
    
    // checks if password has numbers
    if(password.split('').filter(x => x >= '0' && x <= '9').length === 0) return false;
    
    // checks if password has uppercase
    if(password.split('').filter(x => x >= 'A' && x <= 'Z').length === 0) return false;
    
    // checks if password has lowercase
    if(password.split('').filter(x => x >= 'a' && x <= 'z').length === 0) return false;
    
    // checks if password has specials
    // not number = x < '0' && x > '9'
    // not a Uppercase letter x < 'A' && x > 'Z'
    // not a Lowercase letter x < 'a' && x > 'z'
    if(password.split('').filter(x => ((x < '0' || x > '9') && (x < 'A' || x > 'Z') && (x < 'a' || x > 'z'))).length === 0) return false;
    
    if(password.includes(' ')) return false;


    return true;
}

console.log(isPasswordValid("abcd"));  // false
console.log(isPasswordValid("abcd1234"));  // false
console.log(isPasswordValid(""));  // false
console.log(isPasswordValid("Abcd1234"));  // false
console.log(isPasswordValid("Chicago12345US!#$%"));  // false
console.log(isPasswordValid("Abcd1234$"));  // true
console.log(isPasswordValid("Chicago123$"));  // true
console.log(isPasswordValid("Test1234#"));  // true


/*
Requirement: 
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.

NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.

Examples:
isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true
*/

const isEmailValid = email => {
    if(email.includes(' ')) return false;
    if(email.split('').filter(x => x === '@').length !== 1) return false;
    //if(email.split('').filter(x => x === '.').length === 0) return false;

    let beginning = email.split('@')[0]
    let middle = email.split('@')[1].split('.')[0]
    let end = email.split('@')[1].split('.')
    
    if(!beginning || !middle || !end) return false
    return (beginning.length >= 2 && middle.length >= 2 && end.length >= 2)
}
console.log(isEmailValid("balsilwadi@gmail.com"))

/*
Requirement:
Write a function named as isPrime() which takes a 
number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/

const isPrime = num => {
    if(num < 2) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while(i < num){
        if(num % i === 0) return false;
        i += 2;
    }

    return true;
}

console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))

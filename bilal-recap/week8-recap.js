/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]
*/

//way 1
const categorizeCharacters1 = str => {
    let cat = ['', '', '']

    for(let char of str){
        if(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') cat[0] += char;
        else if(char >= '0' && char <= '9') cat[1] += char;
        else if(char !== ' ') cat[2] += char;
    }

    return cat;
}

//way 2
const categorizeCharacters2 = str => {
    return str.split('').reduce((cat, char) => {
        if(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') cat[0] += char;
        else if(char >= '0' && char <= '9') cat[1] += char;
        else if(char !== ' ') cat[2] += char; 
        return cat
    }, ['', '', ''])
}

//way 3
const categorizeCharacters3 = str => {
    return cat = [
        str.split('').filter(char => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z').join(''),
        str.split('').filter(char => char >= '0' && char <= '9').join(''), 
        str.split('').filter(char => !(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') && !(char >= '0' && char <= '9') && char !== ' ').join('')
    ]
}
console.log(categorizeCharacters3("1234"));          
console.log(categorizeCharacters3("abc 123 $#%"));  
console.log(categorizeCharacters3("12ab$%3c%")); 


/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.

Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []
*/

//way 1
const arrFactorial1 = arr => {
    for(let i = 0; i < arr.length; i++){
        let fac = 1;
        for(let j = 2; j <= arr[i]; j++){
            fac *= j;
        }

        arr[i] = fac
        }
        return arr;
}
//way 2
const arrFactorial2 = (arr) => arr.map(num => {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
});


//way 3 (recursion)
// num = 5

// fac(5) = 5 * fac(4) -> 5 *24 === 120
// fac(4) = 4 * fac(3) -> 4 * 6 === 24
// fac(3) = 3 * fac(2) -> 3 * 2 === 6
// fac(2) = 2 * fac(1) -> 2 * 1 === 2
// fac(2) = 1
const factorial = (num) =>{
   if(num === 0 || num === 1) return 1
   else return num * factorial(num - 1)
}

const arrFactorial3 = (arr) => arr.map(num => factorial(num));


//way 4
const arrFactorial4 = (arr) => arr.map(num => [...Array(num).keys()].reduce((fac, ele) => fac * (ele+1), 1));
// num = 5

// Create an array with the length of 5 from 0 to 4 -> [...Array(num).keys()]
// use reduce to multiply each number within itself(adding 1 to each number of the array) -> .reduce((fac, ele) => fac * (ele+1), 1)
// (ele+1) is so we can convert our [0,1,2,3,4] to [1,2,3,4,5]

//[1,2,3,4].keys() -> [0,1,2,3]
//Array(4).keys() -> [0,1,2,3]

console.log([...[1,2,3,4].keys()])

console.log(arrFactorial4([1, 2, 3, 4])); 
console.log(arrFactorial4([0, 5]));       
console.log(arrFactorial4([5, 0, 6]));    
console.log(arrFactorial4([]));


/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  

Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/

const sumOfDigits = str =>  [...str].filter(ele => ele >= '0' && ele <= '9').reduce((sum, num) => sum + Number(num), 0)

console.log(sumOfDigits("Javascript"));     
console.log(sumOfDigits("John's age is 29")); 
console.log(sumOfDigits("$125.0"));         
console.log(sumOfDigits("")); 
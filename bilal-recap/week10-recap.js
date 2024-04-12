/*
Requirement:
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios.

Examples:
isPowerOf3(1)  -> true
isPowerOf3(2)  -> false
isPowerOf3(3)  -> true
isPowerOf3(27)  -> true
isPowerOf3(100)  -> false
isPowerOf3(81)  -> true
isPowerOf3(9)  -> true
*/



const isPowerOf3 = (num) => num === 1 ? true : num < 1 ? false : isPowerOf3(num / 3);

//broken down
/*
const isPowerOf3 = (num) => {
    if(num === 1) return true
    if(num < 1) return false

    return isPowerOf3(num / 3);
}
*/


//way 2
const isPowerOf3Way2 = (num) => {
    for(let i = num; i > 0 ; i /= 3){
        if(i === 1) return true
    }

    return false
}

console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));
console.log(isPowerOf3(12));

/*
Requirement:
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.

Examples:
findUniques([], [])  -> []
findUniques([], [1, 2, 3, 2])  -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9])  -> []
findUniques([-1, -2], [1, 2])  -> [-1, -2, 1, 2]
*/

const findUniques = (arr1, arr2) =>  [...new Set(arr1.concat(arr2).filter(i => !(arr1.includes(i) && arr2.includes(i))))]


console.log(findUniques([], []));             
console.log(findUniques([], [1, 2, 3, 2]));   
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); 
console.log(findUniques([8, 9], [9, 8, 9])); 
console.log(findUniques([-1, -2], [1, 2]));  

/*
Requirement:
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21

Examples:
fibonacciSeries1(3)  -> [0, 1, 1]
fibonacciSeries1(5)  -> [0, 1, 1, 2, 3]
fibonacciSeries1(7)  -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8)  -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1)  -> [0]
fibonacciSeries1(2)  -> [0, 1]
*/
const fibonacciSeries1 = (num) => {
    if(num === 1) return [0]
    if(num === 2) return [0, 1]

    let result = [0, 1]

    for(let i = 2; i < num; i++){
        result.push(result[result.length - 1] + result[result.length - 2])
    }
    return result
}

console.log(fibonacciSeries1(3));  
console.log(fibonacciSeries1(5)); 
console.log(fibonacciSeries1(7));  
console.log(fibonacciSeries1(8)); 
console.log(fibonacciSeries1(1)); 
console.log(fibonacciSeries1(2)); 


//fib(8) = fib(7) + fib(6) -> 8 + 5 = 21
//fib(7) = fib(6) + fib(5) -> 5 + 3 = 8
//fib(6) = fib(5) + fib(4) -> 3 + 2 = 5
//fib(5) = fib(4) + fib(3) -> 2 + 1 = 3
//fib(4) = fib(3) + fib(2) -> 1 + 1 = 2
//fib(3) = fib(2) + fib(1) -> 1 + 0 = 1
//fib(2) = 1
//fib(1) = 0

const fibonacciSeries2 = (num) => {//8
    if(num === 1) return 0;
    if(num === 2) return 1;

    return fibonacciSeries2(num - 1) + fibonacciSeries2(num - 2)
}

console.log(fibonacciSeries2(2));//1 
console.log(fibonacciSeries2(4)); //2
console.log(fibonacciSeries2(8)); //13
console.log(fibonacciSeries2(9)); //21
console.log(fibonacciSeries2(1)); //0

/*
Requirement:
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.

Examples:
countOccurrencesOfCharacters("")  -> ""
countOccurrencesOfCharacters("abc")  -> "1a1b1c"
countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a”
countOccurrencesOfCharacters("www" ) -> "3w"
*/

// const countOccurrencesOfCharacters = str => {//abbcca
//     if(str === '') return '';

//     let result = '';//1a2b2c1a
//     let currentLetter = str[0];//a
//     let count = 1;//1

//     for(let i = 1; i < str.length; i++){//6
//         if(str[i] === currentLetter) count++;
//         else{
//             result += count + currentLetter
//             currentLetter = str[i];
//             count = 1;
//         }
//     }

//     result += count + currentLetter
//     return result
// }

function countOccurrencesOfCharacters(str) {
    if (!str) return "";

    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) count++
         else {
            result += count + str[i];
            count = 1;
        }
    }

    return result;
}

console.log(countOccurrencesOfCharacters(""));        
console.log(countOccurrencesOfCharacters("abc"));     
console.log(countOccurrencesOfCharacters("abbcca"));  
console.log(countOccurrencesOfCharacters("aaAAa"));   
console.log(countOccurrencesOfCharacters("www"));  

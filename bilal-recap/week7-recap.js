/*
Requirement: 
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.

Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])  -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])  -> "pen"
mostRepeated([10])  -> 10
mostRepeated(["TechGlobal"])  -> "TechGlobal"
*/

const mostRepeated = (arr) => {
    let counts = {};
    let mostRepeated;
    let largestCount = 0;

    for(let el of arr){
         if(counts[el]) counts[el]++
         else counts[el] = 1;

         if(counts[el] > largestCount){
            mostRepeated = el;
            largestCount = counts[el]
        } 
    }

    
    return mostRepeated
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));  // 4
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));  // "pen"
console.log(mostRepeated([10]));  // 10
console.log(mostRepeated(["TechGlobal"]));  // "TechGlobal"


/*
Requirement: 
Write a method named secondMin() takes an array argument 
and returns the second min number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min 
number.

NOTE: Be careful when there is multiple min numbers.

Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 4
secondMax([10])  -> 10
*/

const secondMin = arr => {
    arr = arr.sort((a, b) => a - b)
    let min = arr[0]
    
    let newArr = arr.filter(el => el !== min)

    return newArr[0] || arr[0];


    // let min = Infinity;
    // let secondMin = Infinity;

    // for(let el of arr){
    //     if(el < min){
    //         secondMin = min;
    //         min = el;
    //     }else{
    //         if(el < secondMin && el !== min){
    //             secondMin = el;
    //         }
    //     }

    // }

    // return secondMin === Infinity ? min : secondMin;
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23]))
console.log(secondMin([3, 4, 5, 6]))
console.log(secondMin([10]))


/*
Requirement: 
Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.

Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>

Examples:
isDateFormatValid("")  -> false
isDateFormatValid("15/30/2020")  -> false
isDateFormatValid("10-30-2020 ")  -> false
isDateFormatValid("10.30.2020")  -> false
isDateFormatValid("5/30/2020")  -> false
isDateFormatValid("05/30/2020 ")  -> true
isDateFormatValid("10/2/2020")  -> false
isDateFormatValid("10/02/2020 ")  -> true
*/

const isDateFormatValid = date => {
    let month = date.split('/')[0]
    let day = date.split('/')[1]
    let year = date.split('/')[2]

    if(month.length !== 2 || day.length !== 2 || year.length !== 4) return false;

    let maxDay;
    let isLeap = Number(year) % 4 === 0

    if(['01','03','05','07','08', '10', '12'].includes(month)) maxDay = 31;
    else if(['04','06','09','11'].includes(month)) maxDay = 30;
    else if(month == '02') maxDay = 28;
    else return false;

    if(isLeap && month == '02') maxDay += 1;

    if(Number(day) > maxDay || Number(day) < 1) return false;

    return true
}

console.log(isDateFormatValid(""));  // false
 console.log(isDateFormatValid("15/30/2020"));  // false
 console.log(isDateFormatValid("10-30-2020"));  // false
 console.log(isDateFormatValid("10.30.2020"));  // false
 console.log(isDateFormatValid("5/30/2020"));  // false
 console.log(isDateFormatValid("05/30/2020"));  // true
 console.log(isDateFormatValid("10/2/2020"));  // false
 console.log(isDateFormatValid("02/28/2020"));  // true
 console.log(isDateFormatValid("02/29/2021"));  // false
 console.log(isDateFormatValid("02/29/2020"));  // true


 /*
Requirement:
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.

Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])  -> ["1", "2", "3"]
 */

const removeDuplicates1 = arr => arr.reduce((result, el) => !result.includes(el) ? result.concat(el) : result, [])

const removeDuplicates2 = arr =>  arr.filter((el, i) => arr.indexOf(el) === i)

console.log(removeDuplicates2([10, 20, 35, 20, 35, 60, 70, 60]));  // [10, 20, 35, 60, 70]
 console.log(removeDuplicates2([1, 2, 5, 2, 3]));  // [1, 2, 5, 3]
 console.log(removeDuplicates2([0, -1, -2, -2, -1]));  // [0, -1, -2]
 console.log(removeDuplicates2(["abc", "xyz", "123", "ab", "abc", "ABC"]));  // ["abc", "xyz", "123", "ab", "ABC"]
 console.log(removeDuplicates2(["1", "2", "3", "2", "3"]));  // ["1", "2", "3"]
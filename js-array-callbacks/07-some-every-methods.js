const numbers = [-5, 0, 5, 10, 23, -10];


// check if some elements are divisible by 5 -> true
// check if every element is positive -> false
// check if some elements are negative -> true

console.log(numbers.some(el => el % 5 === 0));
console.log(numbers.filter(el => el % 5 === 0).length > 0);

console.log(numbers.every(el => el > 0));
console.log(numbers.filter(el => el > 0).length === numbers.length);

console.log(numbers.some(el => el < 0));
console.log(numbers.filter(el => el < 0).length > 0);
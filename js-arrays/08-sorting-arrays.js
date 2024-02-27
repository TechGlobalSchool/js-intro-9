const names = [ 'alex', 'Adam', 'Jane', 'John', 'alexander'];

// Adam, Jane, John, alex, alexander

console.log(names.sort());

console.log(names);


const numbers = [ 5, 2, 22, 1, 100 ];

// 1, 2, 5, 22, 100

// This will sort numbers alphabetically
numbers.sort();

console.log(numbers); // [ 1, 100, 2, 22, 5 ]


const nums = [ 5, 2, 22, 1, 100 ];

nums.sort((a, b) => a - b);

console.log(nums); // [ 1, 2, 5, 22, 100 ] ascending
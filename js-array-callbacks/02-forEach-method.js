const names = ['John', 'Jane', 'Alex', 'Max'];

// Print each name in the array 

names.forEach(name => console.log(name));

// Output first letter of each name

for(const name of names) {
    console.log(name[0]);
}

for(let i = 0; i < names.length; i++) {
    console.log(names[i][0]);
}

names.forEach(name => console.log(name[0]));


// Output each name uppercased
names.forEach((name) => console.log(name.toUpperCase()));


// Output names that starts with J -> John and Jane
names.forEach((name) => {
    if(name.toLowerCase().startsWith('j')) console.log(name); 
});


// Count how many names has 4 letters -> 3
// This task is better to solve with reduce() method and we'll learn
let count4 = 0;

names.forEach(name => {
    if(name.length === 4) count4++;
});

console.log(count4);


const numbers = [5, 10, 3, 0, -2];

// Print each number

numbers.forEach(x => console.log(x));

// Print true for even numbers and false for odd numbers -> false, true, false, true, true 

numbers.forEach(number => console.log(number % 2 === 0));


// Create a new array that multiplies and stores each of the numbers element by 3 -> [ 15, 30, 9, 0, -6 ]
// We can solve this with map() method and we'll learn it
const newArr = [];

numbers.forEach(num => newArr.push(num * 3));

console.log(newArr);


// Create a new array that stores even numbers -> [ 10, 0, -2 ]
// We can solve this with filter() method and we'll learn it 
const evens = [];

numbers.forEach(number => {
    if(number % 2 === 0) evens.push(number);
});

console.log(evens);
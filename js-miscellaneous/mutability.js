// Primitives are immutable
let fname = 'John';

fname = 'James';

console.log(fname); // 'James'



let city = 'Chicago';

let address = city;

city = 'Miami';

console.log(city);
console.log(address);



let day = 1;
day = 2;
day = 3;
let newVar = day; // 3
day = 4;
day = 5;

console.log(day);



// Objects are mutable
const person1 = {
    fname: 'John',
    lname: 'Doe',
    age: 25
};

person1.city = 'Chicago';

const person2 = person1;

person1.age = 45;
person2.fname = 'James';

console.log(person1);
console.log(person2);


// Immutable object
const student1 = {
    fullname: 'Mustafa A',
    age: 25
};

const student2 = {
    ...student1,
    city: 'Chicago'
}

student1.age = 30;
console.log(student1);
console.log(student2);


// Arrays - mutable
const arr1 = [1, 2, 3];

const arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);

// Arrays - immutable
const a1 = [1, 2, 3];
const a2 = [...a1];
const a3 = [].concat(a1);

const a4 = [];

for(const element of a1) {
    a4.push(element);
}

a2.push(4);
a3.push(4);
a4.push(4);

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);


// Mutable array methods -> reverse(), sort(), push(), pop(), shift(), unshift(), splice(), 
const numbers = [5, 1, 0, 4];

console.log(numbers.reverse());

console.log(numbers);

console.log(numbers.sort((a, b) => a - b));

console.log(numbers);

// Immutable array methods -> concat(), includes(), slice(), at(), flat(), indexOf(), lastIndexOf(), map(), filter(), reduce(), some(), every()

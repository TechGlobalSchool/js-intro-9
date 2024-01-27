let name = 'John';

console.log(name); // John
console.log(typeof name); // string


const names = ['John', 'Jane', 'Alex', 'Max'];

// logging out your array
console.log(names); // [ 'John', 'Jane', 'Alex', 'Max' ]

// retrieving an individual element from an array
console.log(names[2]); // 'Alex'
console.log(names[0]); // 'John'

// retrieve and update Max with Mark 
names[3] = 'Mark';

console.log(names); // [ 'John', 'Jane', 'Alex', 'Mark' ]
console.log(names[3]); // 'Mark'

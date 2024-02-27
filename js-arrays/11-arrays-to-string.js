const objects = [ 'Mouse', 'Computer', 'Remote' ]; 

const numbers = [ 10, 15, 20, 25 ];


let stringObjects = objects.toString(); // or object.join()
let stringNumbers = numbers.join(' --- ');

console.log(objects); // [ 'Mouse', 'Computer', 'Remote' ]
console.log(numbers); // [ 10, 15, 20, 25 ]

console.log(stringObjects); // 'Mouse,Computer,Remote'
console.log(stringNumbers); // '10 --- 15 --- 20 --- 25'
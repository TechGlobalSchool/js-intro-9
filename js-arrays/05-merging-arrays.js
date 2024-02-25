const arr1 = [1, 2], arr2 = [55, 56], arr3 = [ 101, 102, 103 ]; 

const arr12 = arr1.concat(arr2);

console.log(arr12); // [ 1, 2, 55, 56 ]

// const arr123 = arr1.concat(arr2).concat(arr3); 
const arr123 = arr1.concat(arr2, arr3); 

console.log(arr123); // [ 1, 2, 55, 56, 101, 102, 103 ]

console.log(arr2.concat(arr3, arr1)); //  [ 55, 56, 101, 102, 103, 1, 2 ]

// We can also merge arrays using spread operator
console.log([...arr1, ...arr2, ...arr3]); // [ 1, 2, 55, 56, 101, 102, 103 ]


console.log(arr1); // [ 1, 2 ]
console.log(arr2); // [ 55, 56 ]
console.log(arr3); // [ 101, 102, 103 ]

// 
console.log(arr1.concat(555, 666)); // [ 1, 2, 555, 666 ]
console.log(`The new arrays is ${arr1.concat(555, 666)}`); // 'The new arrays is 1,2,555,666'
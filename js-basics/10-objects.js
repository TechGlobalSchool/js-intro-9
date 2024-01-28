const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    address: 'Chicago'
};

// Get student1 information
console.log(student1);

// Get a specific information about the student1
console.log(student1.firstName); // 'John'
console.log(student1['firstName']); // 'John'
console.log(student1.age); // 25
console.log(student1['age']); // 25

// undefined properties or keys will return undefined
console.log(student1.ssn); // undefined
console.log(student1.lastname); // undefined


// Update properties of the object
student1.address = 'Miami';

console.log(student1); // { firstName: 'John', lastName: 'Doe', age: 25, address: 'Miami' }
console.log(student1.address); // 'Miami'


// Adding a new property
student1.phoneNumber = '000-000-0000';
student1.ssn = '000-00-0000';
student1.favMovie = 'Lord of the Rings';

console.log(student1);

// Deleting existing properties 
delete student1.phoneNumber;
delete student1.ssn;
delete student1.favMovie;
delete student1.favClass;

console.log(student1);
/*
this keyword refers to the current object and might give different results
in different content

*/


const person1 = {
    fname: 'Tania',
    lname: 'abc',
    fullname: function () {
        console.log(this.fname, this.lname);
    }
};

person1.fullname(); // Tania abc


const person2 = {
    fname: 'John',
    lname: 'Doe'
};


const person3 = {
    fname: 'Alex',
    lname: 'Smith'
};

person1.fullname.call(person2);
person1.fullname.call(person3);


function sayHi(fname, lname) {
    console.log('Hello', fname, lname);
}

sayHi('Hicran', 'abc'); // 'Hello Hicran abc'

sayHi.call(person3, person3.fname, person3.lname);
sayHi.apply(person2, [ person2.fname, person2.lname ]);



function info() {
    const age = new Date().getFullYear() - this.dateOfYear;

    return `${this.fullname} is ${age} years old and lives at ${this.address}.`;
}

const student = {
    fullname: 'Alex xyz',
    dateOfYear: 2000,
    address: 'Miami'
};

const teacher = {
    fullname: 'Teacher xyz',
    dateOfYear: 1980,
    address: 'US'    
}

const result2 = info.call(student);

console.log(result2()); // Alex xyz is 24 years old and lives at Miami.

console.log(info.call(teacher));
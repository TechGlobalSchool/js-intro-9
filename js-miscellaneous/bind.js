this; // {}

// We create getInfo() method to be used with some objects
function getInfo() {
    console.log(`${this.fullname} is ${this.age} years old.`);
}


// getInfo(); // undefined is undefined years old.

const person = {
    fullname: 'Mustafa A',
    age: 25
};

const student = {
    fullname: 'Ameer B',
    age: 40
};

// getInfo.call(person);
// getInfo.apply(person);
// getInfo.call(student);
// getInfo.apply(student);

const anotherMethod = getInfo.bind(person);

anotherMethod();


/*
function anotherMethod() {
    console.log(`${this.fullname} is ${this.age} years old.`);
}
*/
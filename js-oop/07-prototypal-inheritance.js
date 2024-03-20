// BEFORE ES6
// Create a template with constructor function

function Person () {

}

Person.prototype.eat = function () {
    console.log('EAT');
}

Person.prototype.sleep = function () {
    console.log('SLEEP');
}


function Programmer () {

}

// Inherit all the Person methods into Programmer
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function () {
    console.log('CODE');
}

const programmer_mustafa = new Programmer();

programmer_mustafa.code();
programmer_mustafa.eat();
programmer_mustafa.sleep();


// Create Singer template which inherits from Person and add sing method to it.
// Create a Singer object and execute the sing(), eat() and sleep() method

// PROTOTYPE SINGER 
// constructor
function Singer() {

}

// Inheriting all the Person Prototype functions into Singer prototype
Singer.prototype = Object.create(Person.prototype);

// Creating a new Singer Prototype function
Singer.prototype.sing = function () {
    console.log('SING');
}

const singer1 = new Singer();

singer1.eat();
singer1.sleep();
singer1.sing();
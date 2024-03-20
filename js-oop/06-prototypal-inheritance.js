// BEFORE ES6

const person = {
    eat() {
       console.log('EAT function executes!');
    },
    sleep() {
        console.log('SLEEP function executes!');
    }
};

const programmer = {
    code() {
        console.log('CODE function executes!');
    }, 
    __proto__: person
};

const singer = {
    sing() {
        console.log('SING function executes!');
    },
    __proto__: person
};

// child object can access parent prototype object functions
singer.sing();
singer.eat();
person.eat();
person.sleep();

programmer.code();
programmer.eat();
programmer.sleep();

// parent prototype object cannot access the child functions
// person.code(); // TypeError: person.code is not a function
// person.sing(); // TypeError: person.sing is not a function

// Prototype chaining 
console.log(singer.__proto__); // { eat: [Function: eat], sleep: [Function: sleep] } which is person
console.log(programmer.__proto__); // { eat: [Function: eat], sleep: [Function: sleep] } which is person

console.log(person.__proto__); // [Object: null prototype] {}
console.log(singer.__proto__.__proto__); // [Object: null prototype] {}


const tester = {
    __proto__: programmer,
    test() {
        console.log('TEST function executes!');
    }
}

tester.eat();
tester.sleep();
tester.code();
tester.test();

console.log(tester.__proto__); // { code: [Function: code] } which is programmer
console.log(tester.__proto__.__proto__); // { eat: [Function: eat], sleep: [Function: sleep] } which is person
console.log(tester.__proto__.__proto__.__proto__); //  [Object: null prototype] {} which is global object
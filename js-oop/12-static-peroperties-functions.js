class Batch9 {
    // static properties
    static numberOfStudents = 21;

    // non-static properties
    smth = 'Hello Batch!';


    // non-static function
    funcA() {
        console.log('This is non-static function A')
    }

    // static function
    static funcB() {
        console.log('This is static function B')
    }
}

// Invoking static properties or functions
console.log(Batch9.numberOfStudents); // 21
Batch9.funcB(); // This is static function B
// Batch9.funcA(); // Error

// Invoking non-static properties or functions 
// 1. create an object of the class
const obj = new Batch9();

// 2. you can now invoke non-static properties and function with the object created 
console.log(obj.smth); // 'Hello Batch!'
obj.funcA(); // 'This is non-static function A'


console.log('\n---------------------------------\n')
// Static properties
console.log(Math.PI); // 3.141592653589793
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991


// Static methods
console.log(Array.isArray([])); // true
console.log(Math.max(2, 5)); // 5


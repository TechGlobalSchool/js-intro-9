// console.log(a); // ReferenceError: a is not defined
console.log(b); // undefined as it is hoisted
// console.log(c); // ReferenceError: c is not defined

{
    // this is a block
    let a = 1;
    var b = 1;
    const c = 1;

    console.log(a); // 1
    console.log(b); // 1
    console.log(c); // 1

    function sum() {
        console.log(a + b + c);
    }

    sum(); // 3

    if(a == b && b == c) {
        console.log('TRIPLE MATCH');
    }
}


// var does not support block scope while let or const supports it
// you can access the var variables outside the block they were declared but you cannot access the let or const
// variables outside of their blocks they were declared

// console.log(a); // ReferenceError: a is not defined
console.log(b); // 1
// console.log(c); // ReferenceError: c is not defined

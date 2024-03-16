function outer() {
    let fullname = 'John Doe';

    function inner() {
        let upper = fullname.toUpperCase(); // accessing to fullname is allowed
        console.log(upper);
    }

    // Outer function cannot access the variables in the inner function
    // console.log(upper); // ReferenceError: upper is not defined

    inner();
}

outer();

// EXECUTION STEPS
// outer() is executed
// fullname = 'John Doe'
// console.log(upper)

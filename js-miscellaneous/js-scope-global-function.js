let var1 = 'John';



// n1 and n2 are local to their function - function scoped
function sum(n1, n2) {
    var result = n1 + n2;
    console.log(var1); // 'John'
    console.log(n1, n2); // allowed
    return result;
}


console.log(var1); // 'John'
//console.log(n1, n2); // not allowed
console.log(result); // not allowed




/*
Write a function called factorial which takes a positive number and returns 
its factorial.

factorial(5)    -> 120
factorial(3)    -> 6

*/


// n & result variables are function-scoped
// i is block-scoped within the function
function factorial(n) {
    let result = 1;

    for(let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// console.log(result); // ReferenceError: result is not defined
// console.log(n); // ReferenceError: n is not defined

console.log(factorial(3)); // 6
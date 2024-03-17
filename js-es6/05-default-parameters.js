function enterCreds(username = 'abc', password = 'xyz') {
    console.log(username);
    console.log(password);
}


enterCreds(); // this one is going to use default values where username = 'abc' and password = 'xyz'
enterCreds('techglobal', '12345'); // this one is using the given values

// if there are non-default arguments/parameters and default ones, then default parameters should be last parameters

function multiply(num1, num2 = 1) {
    console.log(num1 * num2);
}


multiply(5);
multiply(5, 2);
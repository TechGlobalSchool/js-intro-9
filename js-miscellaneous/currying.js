function double(num) {
    return num * 2;
}

function triple(num) {
    return num * 3;
}

function product(num1, num2) {
    return num1 * num2;
}

double(5); // 10
product(2, 5); // 10

triple(7); // 21
product(3, 7); // 21


// product() function using currying

function multiply (num1) { // num1 = 2
    return function (num2) { // num2 = 5
        return num1 * num2;
    }
}


const multiplyBy2 = multiply(2);
const multiplyBy3 = multiply(3);
const multiplyBy4 = multiply(4);
const multiplyBy5 = multiply(5);
const multiplyBy6 = multiply(6);

console.log(multiplyBy4(5)); // 20
console.log(multiplyBy6(3)); // 18

console.log(multiply(10));




function doMath(operator) {
    if(operator === '+') {
        return function (num1, num2) {
            return num1 + num2;
        }
    }
    else if(operator === '*') {
        return function (num1, num2) {
            return num1 * num2;
        }
    }
    else if(operator === '-') {
        return function (num1, num2) {
            return num1 - num2;
        }
    }
    else if(operator === '/') {
        return function (num1, num2) {
            return num1 / num2;
        }
    }
    else if(operator === '**') {
        return function (num1, num2) {
            return num1 ** num2;
        }
    }
}

const power = doMath('**');
const sum = doMath('+');
const divide = doMath('/');

console.log(power(3, 2)); // 9
console.log(sum(3, 2)); // 5


function a() {
    return function () {
        console.log('This is inner function!');
    }
}

const b = a();

b();

// recursion
function factorial (n) { // 2
    if(n === 1) return 1;
    return n * factorial(n-1); // 
}

console.log(factorial(25)); // 24
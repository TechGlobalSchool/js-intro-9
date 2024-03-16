const factorial = (n) => {
    let result = 1;

    for(let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24


[3, 4, 5, 6].forEach((n) => {
    let result = 1;

    for(let i = 2; i <= n; i++) {
        result *= i;
    }

    console.log(result);
});


// function sayHi() {
//     return 'Hi';
// }

const sayHi = () => 'Hi';
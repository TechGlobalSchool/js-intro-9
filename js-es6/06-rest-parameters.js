// Rest paramaters allow us to create a method works with any number of arguments

function sum(...args) { // any number of arguments as an array
    let sum = args.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}

// Method overloading -> same method name but different arguments


sum(1); // 1
sum(1, 2); // 3
sum(1, 2, 3); // 6
sum(1, 2, 3, 4); // 10

sum(4, 2, 1, 6, 8, 3, 7); // 31


/*
Write a function that takes any number of arguments and return their product

product()               -> 0
product(5)              -> 5
product(2, 5)           -> 10
product(2, 5, 3)        -> 30
*/

// const product(...numbers) {
//     if(numbers.length === 0) return 0;

//     return numbers.reduce((acc, curr) => acc * curr, 1);
// }

const product = (...numbers) => numbers.length === 0 ? 0 : numbers.reduce((acc, curr) => acc * curr, 1);


console.log(product());
console.log(product(5));
console.log(product(2, 5));
console.log(product(2, 5, 3));


function printUserInfo(fname, lname, ...rest) {
    console.log(`Fullname is ${fname} ${lname}.`);

    for(const arg of rest) {
        console.log('Additional info', arg);
    }
}

// printUserInfo('John', 'Doe');
// printUserInfo('John', 'Doe', 25);
printUserInfo('John', 'Doe', 25, 'Chicago');


function favActs(top, ...rest) {
    console.log('Top fav activity is', top);
    if(rest.length > 0) {
        for(const act of rest) {
            console.log('The next fav activity is', act);
        }
    }
}

favActs('Coding', 'Reading', 'Biking', 'Playing PS5');
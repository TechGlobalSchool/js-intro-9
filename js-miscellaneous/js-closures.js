
/*
let result = 0;

function score() {
    result += 1;
}

score();
score();
score();

result = 10; // it can be reasigned

console.log(result); // 3
*/


// Closure can help us preventing some variables being reasigned

function score() {
    let result = 0; // private to this method and cannot be accessed in the global scope

    return function () {
        result += 1;
        return result;
    }
}


const increase = score(); // result = 0

increase();
increase();
increase();
increase();
const newScore = increase();

result = 10;

console.log(newScore); // 5
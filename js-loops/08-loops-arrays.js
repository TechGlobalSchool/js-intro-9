const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

// Count how many positive numbers you have in the array -> 4

console.log('\n--------Count Positives------------\n');
let countP = 0;

for(const num of numbers) {
    if(num > 0) {
        countP++;
    }
}

console.log('Positives = ' + countP);

countP = 0;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) countP++;
}

console.log('Positives = ' + countP);


// Count how many negative or neutral numbers you have in the array -> 6
console.log('\n--------Count Negatives or Neutrals------------\n');

let countNorN = 0;

for(const num of numbers) {
    if(!(num > 0)) countNorN++;
}

console.log('Negatives or neutrals = ' + countNorN);

// Count how many even numbers you have in the array -> 7
console.log('\n--------Count Evens------------\n');

let countE = 0;

for(const n of numbers) {
    if(n % 2 === 0) countE += 1; // or count++
}

console.log('Evens = ' + countE);

// Count how many even but not negative numbers you have in the array -> 5
console.log('\n--------Count Evens but No Negatives------------\n');

let countEButNN = 0;

for(const i of numbers) {
    if(i % 2 === 0 && i >= 0) countEButNN++;
}

console.log('Even but no negatives = ' + countEButNN);


const numbers = [0, 10, -4, 5, 2, -3];

// Find first positive

console.log(numbers.find(x => x > 0)); // 10
console.log(numbers.findIndex(x => x > 0)); // 1


// Find last positive
console.log(numbers.findLast(x => x > 0)); // 2
console.log(numbers.findLastIndex(x => x > 0)); // 4


// Find first number more than 50
console.log(numbers.find(num => num > 50)); // undefined
console.log(numbers.findIndex(num => num > 50)); // -1

/*
Loop solution

let firstP;

for(const number of numbers) {
    if(number > 0) {
        firstP = number;
        break;
    }
}

console.log(firstP); // 10
*/



const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA']; 

// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

console.log(cities.find(el => el.length === 4));
console.log(cities.findLast(el => el.length === 6));
console.log(cities.indexOf('LA'));
console.log(cities.findIndex(el => el === 'LA'));
console.log(cities.find(el => el.toLowerCase().indexOf('i') >= 0));
console.log(cities.findLast(el => el.length === 4));

console.log(cities.find(el => el.length === 7)); // undefined
console.log(cities.findLast(el => el.length === 7)); // undefined
console.log(cities.findIndex(el => el.length === 7)); // -1
console.log(cities.findLastIndex(el => el.length === 7)); // -1
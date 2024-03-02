// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …. 50
/*
start: 0
end: 50
update: +2
*/

let i = 0;

// 1st solution
while(i <= 50) {
    if(i % 2 === 0) console.log(i);
    i++;
}

console.log('The loop is done and i value is', i); // 51

// 2nd solution - this will break if i does not start with zero
i = 0;

while(i <= 50) {
    console.log(i);
    i += 2;
}

console.log('The loop is done and i value is', i); // 52

// 3rd solution - this will break if i does not start with zero
i = 0;

while(i <= 25) { 
    console.log(i * 2);
    i++;
}

console.log('The loop is done and i value is', i); // 26


// Infinite while loops 

i = 0;

while(i >= 0) {
    console.log(i);
    i++;
}


let count = 1;

while(true) {
    console.log('Hello', count);
    if(count++ === 5) break;
}


for(let j = 1; j > 0; j++) {
    console.log(j);
    if(j === 25) break;
}

// Count all the even numbers between 1 and 10 (both inclusive) -> 5

/*
PSEUDO CODE
1. Write a loop that will achieve numbers from 1 to 10
2. Check each number if it is even
3. If the number is even, make sure it is counted (you have a counter, so increase by one)
4. If it is not even, just continue with the next number
*/

// for loop 

let countEven = 0;

for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) countEven++;
    else continue;
}

console.log(countEven);


// while loop 

let start = 1;
let countE = 0;

while(start <= 10) {
    if(start % 2 === 0) countE++;
        
    start++;
}

console.log(countE);



// Find sum of the numbers starting from 3 to 7 (both inclusive) -> 3 + 4 + 5 + 6 + 7 -> 25

let index = 3;

let result = 0;

while(index <= 7) {
    result += index;
    index++;
}

console.log(result);
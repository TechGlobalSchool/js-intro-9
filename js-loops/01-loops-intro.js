// print 1, 2, 3, 4, 5, 6 ......
/*
for loop - i loop - traditional loop

for(initialization; termination_condition; update) {
    // code block
}
*/


for(let i = 1; i <= 5; i++) { // num = 1
    console.log(i);
}


console.log('End of the program');


// 5,4,3,2,1

for(let i = 5; i >= 1; i--) {
    console.log(i);
}

console.log('End of the program');

// 0, 2, 4, 6, 8, 10
for(let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// 50, 40, 30, 20, 10, 0

for(let i = 50; i >= 0; i -= 10) {
    console.log(i);
}


for(let i = 1; i <= 20; i++) {
    console.log('Hello name!');
}
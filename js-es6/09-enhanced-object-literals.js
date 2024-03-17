let program = 'SDET';
let batch = 9;

// Before ES6
const student_rabe = {
    program: program,
    batch: batch,
    fullname: 'Rabe a'
};

// After ES6 - enhanced object literals
const student_ameer = {
    program,
    batch,
    fullname: 'Ameer a'
};

console.log(student_rabe);
console.log(student_ameer);
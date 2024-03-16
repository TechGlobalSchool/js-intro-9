const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);


const student_template = {
    program: 'Software Engineer in Test',
    start_date: 'January 22, 2024',
    batch: 9
};

const student_rabe = {
    ...student_template,
    fullname: 'Rabe A',
    age: 25
};

const student_ameer = {
    ...student_template,
    fullname: 'Ameer A',
    age: 26
};

console.log(student_rabe);
console.log(student_ameer);
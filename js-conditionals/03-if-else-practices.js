/*
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL
*/

let exam_score = 60;

if (exam_score >= 60) {
  console.log("PASS");
} else {
  console.log("FAIL");
}

// Omit the curly braces when you have one code statement within the if or else block
if (exam_score >= 60) console.log("PASS");
else console.log("FAIL");
  

if (exam_score < 60) {
  console.log("FAIL");
} else {
  console.log("PASS");
  console.log('Congrats!')
}


/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let age = 65;

if (age < 65) {
    console.log('YOU CANNOT GET RETIRED!!!');
} else {
    console.log('YOU CAN GET RETIRED');
}


let fname = 'John';
let first = false;

if(first) {
    console.log(fname.at(0));
} else {
    console.log(fname.at(-1));
}
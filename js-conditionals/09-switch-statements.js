let num = 2;

let letter; // undefined

switch (num) {
  case 1:
    letter = "A";
    break;
  case 2:
    letter = "B";
    break;
  case 3:
    letter = "C";
    break;
  default:
    letter = "dsjfhglsdjfgdsf";
}

console.log(letter);

let name = "Jessie";

switch (name) {
  case "Jane":
    console.log("Hello");
  case "John":
  case "Max":
    console.log("Good Morning");
  default:
    console.log("GoodBye!");
}

const date = new Date(); // built-in JS object

console.log(date.getDate()); // 12
console.log(date.getMonth()); // 1
console.log(date.getFullYear()); // 2024
console.log(date.getDay()); // 1
console.log(date.getHours()); // 19
console.log(date.getMinutes()); // 27

console.log(date.toLocaleTimeString()); // 7:32:08 PM
console.log(date.getSeconds()); // 8

console.log(date.toLocaleDateString()); // 2/12/2024

/*
0 Sunday
1 Monday
.
.
.
.
6 Saturday

in case it returns 0 or 6, print 'WEEKEND'
otherwise, print 'WEEKDAY' 
*/

let day = date.getDay(); // returns 0 to 6 inclusive

switch (day) {
  case 0:
  case 6:
    console.log("WEEKEND");
    break;
  default:
    console.log("WEEKDAY");
}

switch (true) {
  case day === 0 || day === 6:
    console.log("WEEKEND");
    break;
  case day >= 1 && day <= 5:
    console.log("WEEKDAY");
    break;
  default:
    throw Error("Day came unexpected!");
}

// if else solution
if (day === 0 || day === 6) console.log("WEEKEND");
else console.log("WEEKDAY");

// Ternary
day === 0 || day === 6 ? console.log("WEEKEND") : console.log("WEEKDAY");


/*
Find and print the quarter that our r1 is in
1 and 25 inclusive  -> print 'FIRST'
26 and 50 inclusive  -> print 'SECOND'
51 and 75 inclusive  -> print 'THIRD'
76 and 100 inclusive  -> print 'FOURTH'
*/

let r1 = Math.floor(Math.random() * 100) + 1; // r1 >= 1 && r1 <= 100

console.log('The random is', r1); // 50

if(r1 <= 25) console.log('FIRST');
else if(r1 <= 50) console.log('SECOND');
else if(r1 <= 75) console.log('THIRD');
else console.log('FOURTH');

switch(true) { // 50
    case r1 <= 25:
        console.log('FIRST');
    break;
    case r1 <= 50:
        console.log('SECOND');
    break;
    case r1 <= 75:
        console.log('THIRD');
    break;
    default:
        console.log('FOURTH');
}

let result = r1 <= 25 ? 'FIRST' : r1 <= 50 ? 'SECOND' : r1 <= 75 ? 'THIRD' : 'FOURTH';
console.log(result);
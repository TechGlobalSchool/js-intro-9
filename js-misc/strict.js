'use strict'; // Can be at the top of the module

function myFun() {
  'use strict'; // Or inside the block
  // let x = 10; // works
  x = 10; // gives an error. ReferenceError: x is not defined
  console.log(x); 
}
myFun();




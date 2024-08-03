// 1. Normal function
function add(a,b) {
  return a +b;
}

// 2. Function expressions
const  add2 = (a,b) => {
  return a + b;
}

const add3 = function(a,b) { 
  return a + b;
}

// 3. Async functions
async function add4(a,b) {
  // Await can only be used inside async function
  const c = await a +b;
  return c;
}

const add5 = async (a,b) => {
  const c = await a +b;
  return c;
}

// IIFE
(
  // Anonymous function
  function() {
    console.log('This is IIFE function')
  }
)()


// Anonymous function => (city) => console.log(city.toLowerCase())
// Callback function => (city) => console.log(city.toLowerCase())
// Higher order function => .map()
  
const cities = ['C', 'A'];

cities.map((city) => console.log(city.toLowerCase()))

// callback function
function lowerCityNames () {
  console.log(city.toLowerCase())
  // 1000
}

cities.map(lowerCityNames)


// Closure
function parent() {
  const outerVar = 10;
  return function child() {
    const ans = outerVar * 2;
    console.log(ans)
  }
}
const child = parent();
child();


// Currying - Braking down functions
function add6(a,b,c) {
  console.log(a,b,c);
}

function add7(a) {
  return function (b) {
    return function (c) {
      console.log(a,b,c);
    }
  }
}

// setTimout and setInterval

console.log('I am first');

setTimeout(() => {
  console.log('I am second');
}, 0)

console.log('I am third');

// first => second => third => INCORRECT ORDER
// first => third => second => CORRECT ORDER

let count = 0;
let interval = setInterval(() => {
  count++;
  console.log('Count: ', count);
}, 1000)

setTimeout(() => {
  clearInterval(interval);
  count = 0;
}, 10000)


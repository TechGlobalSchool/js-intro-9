// Time can not be used to measure efficiency
// It is unstable and dependent on environment

console.time()
  for(let i=0; i < 2; i++) {
    console.log(i) // 3.708ms
  }
console.timeEnd()


console.time()
  for(let i=0; i < 10000; i++) {
    console.log(i) // 45.486ms
  }
console.timeEnd()


// Different Big O Notations -----------

/**
 * Constant - O(1)
 *  TC: O(1)
 *  SC: O(1)
 */

const add = (a,b) => {
  let c = a +b;
  return c;
  // a + b;
}
console.log('Hello')


/**
 * Linear - O(n)
 * TC: O(n) => n = items.length = number of items in array
 * SC: O(1) => We are not writing anything to memory
 */

function logItems(items) {
  for(let i=0; i < items.length; i++) {
    console.log(items[i])
  }
}

/**
 * Linear - O(n)
 * TC: O(n) => n = items.length = number of items in array
 * SC: O(n) => We are not writing anything to memory
 */

function logItems(items) {
  let result = [];
  for(let i=0; i < items.length; i++) {
    result.push(items[i]);
  }
  return result;
}

logItems([1]); // 
logItems([1,2,4,5,5,6,7,7]); // 



/**
 * Linear - O(n) - DROP CONSTANTS
 * TC: O(n) => O(n + n) => O(2n) => ~ O(n)
 * SC: O(1) => 
 */

function logItems(items) {
  for(let i=0; i < items.length; i++) {
    console.log(items[i])
  }
  for(let j=0; j < items.length; j++) {
    console.log(items[j])
  }
}

/**
 * Linear 
 * TC: O(n+m) => n = number of elements in items, m = number of elements in items2
 * SC: O(1) 
 */

function logItems(items, items2) {
  for(let i=0; i < items.length; i++) {
    console.log(items[i])
  }
  for(let j=0; j < items2.length; j++) {
    console.log(items2[j])
  }
}


/**
 * Quadratic - O(n^2)
 * TC: O(n^2)
 * SC: O(1)
 */

function logItems(items) {
  for(let i=0; i < items.length; i++) {
    console.log(items[i])
    for(let j=0; j < items.length; j++) {
      console.log(items[j])
    }
  }
}
// TC: O(n^4) ~ O(n^2)
function logItems(items) {
  for(let i=0; i < items.length; i++) {
    console.log(items[i])
    for(let j=0; j < items.length; j++) {
      console.log(items[j])
      for(let j=0; j < items.length; j++) {
        console.log(items[j])
        for(let j=0; j < items.length; j++) {
          console.log(items[j])
        }
      }
      
    }
  }
}
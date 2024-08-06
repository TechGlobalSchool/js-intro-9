/**
 * Set
 * - Introduced in ES6
 * - Similar to Arrays
 * - They are Iterable
 * - Contains unique values
 */

/**
 * Set() constructor
 */

const set = new Set();
console.log(set); // Set(0) {}

/**
 * add() - adds element to set
 */
const customerIds = new Set();
customerIds.add(1)
customerIds.add(2)
customerIds.add(3)
console.log(customerIds); // Set(3) { 1, 2, 3 }

/**
 * has() - checks if elements is in set
 */

const isOneInCustomerIds = customerIds.has(1);
console.log(isOneInCustomerIds); // true
const isFiveInCustomerIds = customerIds.has(5);
console.log(isFiveInCustomerIds); // false


/**
 * size
 */

console.log(customerIds.size);  // 3
customerIds.add(3) // not allowed
console.log(customerIds.size);  // 3

/**
 * delete
 */

console.log(customerIds.size);  // 3
customerIds.delete(3) 
console.log(customerIds.size);  // 2

/**
 * clear()
 */

console.log(customerIds.size);  // 2
customerIds.clear() 
console.log(customerIds.size);  // 0

// RESET
customerIds.add(1).add(2).add(3)

/**
 * keys() and values() and entries()
 */

const keys = customerIds.keys();
console.log(keys); // [Set Iterator] { 1, 2, 3 }
console.log(keys.next()); // { value: 1, done: false }

const values = customerIds.values();
console.log(values); // [Set Iterator] { 1, 2, 3 }

const entries = customerIds.entries();
console.log(entries) // { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] }
console.log(entries.next()); // { value: [ 1, 1 ], done: false }
console.log(entries.next().value[0]); // 2

/**
 * forEach and for of
 */

customerIds.forEach(value => console.log(value)); // 1 2 3

for(let value of customerIds) {
  console.log('value', value) // 1 2 3
}

customerIds.clear();
customerIds.add(1).add(2).add(3)
for(let i=0;  i < customerIds.size; i++) {
  console.log(entries.next().value[0]) // 1 2 3
}










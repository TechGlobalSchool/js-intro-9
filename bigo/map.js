/**
 * Map()
 *
 * - Introduced in ES6
 * - Similar to Objects
 *
 * Similarities:
 *  - Both contains key value pairs
 *  - Duplicate keys not allowed
 *
 * Differences:
 *  - Map supports complex data types for the key. Object only supports string
 *  - Map keeps the insertion order.
 */

/**
 * Map() - constructor
 */

const map = new Map();
const map2 = new Map([['key1','value1'], ['key2', 'value2']])

console.log(map)
console.log(map2)

/**
 * set() - adds key value to the map
 */

const map3 = new Map();
map3.set({}, 'value');
map3.set(function(){}, 'value2');

console.log(map3);

// Error
// const obj = {
//   {}: 'value'
// }


const emojis = new Map();

emojis.set('😭', 'Loudly Crying Face')
emojis.set('🤣', 'Rolling on the Floor Laughing')
emojis.set('🫠', 'Melting Face');

console.log(emojis);


/**
 * get() - Returns an element for a given key
 */

const meltingFace = emojis.get('🫠');
console.log(meltingFace); // Melting Face

/**
 * has() - Checks if map contains particular key
 */

// if(obj[key] || obj.hasOwn(key))
const doesEmojiContainsCryingFace = emojis.has('😭');
console.log(doesEmojiContainsCryingFace); // true

const doesEmojiContainsHotFace = emojis.has('🥵');
console.log(doesEmojiContainsHotFace); // false

/**
 * size - returns size of the map
 */
const obj = {id: 1}
const arr = Object.keys(obj)
console.log(obj.length); // undefined
console.log(arr.length); // 1


console.log('Size of emojis', emojis.size)

/**
 * delete() - Removes element from map
 */
console.log('Size of emojis before delete', emojis.size) // 3
emojis.delete('🤣');
console.log('Size of emojis after delete', emojis.size) // 2

/**
 * clear() - Removes all elements
 */
console.log('Size of emojis before clear', emojis.size) // 2
emojis.clear();
console.log('Size of emojis after clear', emojis.size) // 0


// RESET
emojis
.set('😭', 'Loudly Crying Face')
.set('🤣', 'Rolling on the Floor Laughing')
.set('🫠', 'Melting Face');

console.log(emojis); 

/**
 * keys()
 * values()
 */

const emojiKeys = emojis.keys();
console.log(emojiKeys); // [Map Iterator] { '😭', '🤣', '🫠' }
// const arr1 = [...emojiKeys];
// console.log(arr1);
console.log('First key', emojiKeys.next().value); // '😭'
console.log('Second key', emojiKeys.next().value); // '🤣'
console.log('Third key', emojiKeys.next().value); // '🫠'
console.log('Third key', emojiKeys.next().value); // undefined

/**
 * entries() 
 */

const emojiEntries = emojis.entries();
console.log('First entry', emojiEntries.next()); // { value: [ '😭', 'Loudly Crying Face' ], done: false }
console.log('Second entry', emojiEntries.next()); // { value: [ '🤣', 'Rolling on the Floor Laughing' ], done: false }
console.log('Third entry', emojiEntries.next()); // { value: [ '🫠', 'Melting Face' ], done: false }
console.log('Third entry', emojiEntries.next()); // { value: [undefined], done: true }

/**
 * forEach()
 */

emojis.forEach(value => console.log(value)) // logs every value
emojis.forEach((_, key) => console.log(key)) // logs every value
emojis.forEach((value, key) => console.log(value, key)) // logs every value

// for of can also be used to loop Map













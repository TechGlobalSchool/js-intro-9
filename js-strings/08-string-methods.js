// Extracting partial strings (substring)

let language = 'JavaScript';

// slice() 
console.log(language.slice(0, 4)); // 'Java'

console.log(language.slice(4)); // 'Script'


let quote = 'Practice makes it perfect!';

/*
'Practice'
'perfect'
'makes it perfect!'
*/

console.log(quote.slice(0, 8));
console.log(quote.slice(18, 25));
console.log(quote.slice(9));

/*
TASK: used to extract partial string from the original string by using indexes
RETURN: it returns a partial string (substring)
        slice(startIndex) -> this will extract substring starting from the startIndex going all the way till the end
        slice(startIndex, endIndex) -> this will extract substring starting from the startIndex (inclusive) and going through endIndex (exclusive)
ARGUMENTS: takes one or 2 arguments which are indexes
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static

The only difference between slice() and substring() is the way they handle the negative indexes
slice() counts backwards when you pass negative arguments
substring() converts negative indexes to ZERO
*/

// Tricky Part
console.log('abc'.slice(5)); // ''
console.log('abc'.slice(4, 10)); // ''
console.log('abc'.slice(2, 100)); // 'c'

// Negative indexes
console.log('JavaScript'.slice(-3)); // 'ipt'
console.log('JavaScript'.slice(-6)); // 'Script'
console.log('JavaScript'.slice(-10, -6)); // 'Java'
console.log('JavaScript'.slice(-5, -7)); // ''

console.log('Hello'.slice(3, 2)); // ''


// substring()
let obj = 'Table';
console.log(obj.substring(0, 3)); // 'Tab'
console.log(obj.substring(1)); // 'able'

console.log(obj.slice(0, 3)); // 'Tab'
console.log(obj.slice(1)); // 'able'

console.log(obj.slice(-2)); // 'le'
console.log(obj.substring(-5, -10)); // ''
console.log(obj.substring(-3, 2)); // 'Ta'


// split() method
let shoppingList = 'Apple, Orange, Bananas, Milk, Eggs';

const shoppingListArray = shoppingList.split(', ');

console.log(shoppingListArray); // [ 'Apple', 'Orange', 'Bananas', 'Milk', 'Eggs' ]

console.log(shoppingListArray[0]); // 'Apple'
console.log(shoppingListArray[2]); // 'Bananas'


/*
Mouse | Computer | Keyboard     -> ' | '

Today is Sunday -> 'is'     ['Today ', ' Sunday']
Today is Sunday -> 'ay'     ['Tod', ' is Sund', '']
hello world     -> 'l'      ['he', '', 'o wor', 'd']

'JavaScript is fun' -> ' '  ['JavaScript', 'is', 'fun'] 
*/

console.log('Mouse | Computer | Keyboard'.split(' | ')); // [ 'Mouse', 'Computer', 'Keyboard' ]


/*
TASK: used to split the string into array elements with the given separator
RETURN: it returns an array
ARGUMENTS: takes one argument
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static
*/
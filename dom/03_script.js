/**
 * TRAVERSING DOM
 */

/**
 * Get children nodes
 * - childNodes
 * - Returns NodeList
 */

const childEls = document.getElementById('parent');
console.log('child nodes', childEls.childNodes); //  [text, li, text, li, text, li, text]


/**
 * Get children elements
 * - children
 * - Returns HTMLCollection of only elements
 */

console.log('child elements', childEls.children);


/**
 * Get first node
 * - firstChild
 * 
 * Get last node
 *  - lastChild
 */

console.log('First child', childEls.firstChild); // #text
console.log('Last child', childEls.lastChild); // #text

/**
 * Get first element
 * - firstElementChild
 * 
 * Get last element
 * - lastElementChild
 */
console.log('First element', childEls.firstElementChild); // <li>USA</li>
console.log('Last element', childEls.lastElementChild); // <li>Argentina</li>


/**
 * Parent node
 * - paretNode
 * - Returns parent node of a node or element
 */

console.log('Parent node', childEls.parentNode); // <body></body>
const firstElement = childEls.firstElementChild;
console.log('Parent of li', firstElement.parentNode); // <ul id="parent">...</ul>

/**
 * Parent element
 * - paretElement
 * - Returns parent element of a node or element
 */
const bodyEl = document.querySelector('body');
console.log('Parent element of body', bodyEl.parentElement); // html
console.log('Parent element of html', bodyEl.parentElement.parentElement); // null


/**
 * Siblings
 * - Get next and prev sibling nodes or elements
 *  - nextSibling, prevSibling
 * - Get next and prev sibling elements
 *  - nextElementSibling, prevElementSibling
 */

const firstNode = childEls.firstChild; // #text
const firstEl = childEls.firstElementChild; // usa element

const lastNode = childEls.lastChild // #text
const lastEl = childEls.lastElementChild; // argentina element


console.log(firstNode.nextSibling); // <li>USA</li>
console.log(firstNode.nextSibling.nextSibling); // #text

console.log(firstEl.nextElementSibling); // <li>Colombia</li>

console.log(lastNode.previousSibling) // <li>Argentina</li>
console.log(lastEl.previousElementSibling) // <li>Colombia</li>

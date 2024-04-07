/**
 * Get content of an element
 *  - innerHTML
 *  - textContent
 *  - innerText
 */

const box1 = document.getElementById('box');
console.log(box1)
console.log('innerHTML of box1: ', box1.innerHTML)
console.log('textContent of box1: ', box1.textContent)
console.log('innerText of box1: ', box1.innerText);


/**
 * Add content to an existing element
 * 
 * - innerHTML can accept text, html tags...
 * - textContent and innerText only accepts text
 */

// Below 3 does the same thing
const box2 = document.getElementById('box2');
box2.innerHTML = 'Updated text from innerHTML'
box2.textContent = 'Updated text from textContent'
box2.innerText = 'Updated text from innerText'

// Difference
box2.innerHTML = '<p style="color: red">Updated text from innerHTML</p>'
// box2.textContent = '<p>Updated text from textContent</p>'
// box2.innerText = '<p>Updated text from innerText</p>'

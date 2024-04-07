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


/**
 * Create an element
 *  - createElement('tagName')
 *  - innerHTML
 *  - append()
 */

// 1. Create element
const h1 = document.createElement('h1')
console.log(h1)
// 2. Add text
h1.innerHTML = 'This is content of h1'
// 3. Append this element to html
const body = document.querySelector('body');
body.append(h1);


/**
 * className vs classList
 */

const section = document.querySelector('.section');
console.log(section)

console.log(section.className)
console.log(section.classList) // DOMTokenList

// Update class name of section
section.className = 's1';
console.log(section) // class="s1"

// Add more classes to section
section.className += ' s2';
console.log(section)

section.classList.add('s3');
console.log(section)

// Remove class from section
section.classList.remove('s3');
// with className you have to do more manipulations


// Create class name from scratch
const divEl = document.createElement('div');
divEl.className = 'cls1';
divEl.innerHTML = 'This is div'
body.append(divEl);

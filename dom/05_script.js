/**
 * Event
 *  - Simply an object
 */

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const btnEl = document.querySelector('#btn');
const btn2El = document.querySelector('#btn2');

/**
 * Mouse Events
 *  - click, dblclick
 *  - mousemove, mouseup, mousedown
 */

// Click
btnEl.addEventListener('click', (event) => {
    event.preventDefault();
    // do stuff
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
})


// Double click
btn2El.addEventListener('dblclick', (event) => {
    event.preventDefault();
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
})


/**
 * Keyword Events
 *  - keydown, keyup
 */

const bodyEl = document.querySelector('body');

// bodyEl.addEventListener('keydown', (event) => {
//     if(event.code === 'Enter') {
//         console.log(event)
//     } else {
//         console.log('Wrong keyboard')
//     }
// })

/**
 * Form events
 *  - change (waits until user finishes typing)
 *  - input
 */

// inputEl.addEventListener('change', (event)  => {
//     // console.log(event)
//     console.log(event.target.value)
// })

inputEl.addEventListener('input', (event)  => {
    // console.log(event)
    console.log(event.target.value)
})
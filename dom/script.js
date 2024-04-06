/**
 * window object
 */

// Client vs Server code
// window object is not available in server side
// Some environments use global as window
// window object is always available in client side (ex: browser)

// console.log(window); // ReferenceError: window is not defined
// console.log(global); // Global object

// if(typeof window === undefined) {
//     console.log('I am in client environment')
//     console.log(window)
// } else {
//     console.log('I am in server environment')
//     console.log(global);
// }

/**
 * alert
 * - returns undefined
 */

// console.log(window.alert('Welcome to my page!'))
// const alertResult = window.alert('Hello World!'); 
// console.log("alertResult", alertResult); // undefined
// alert('Subscribe to my email!') // You can also omit window part


/**
 * prompt
 * - Returns either null, empty string or actual user value
 */

// const userAns = prompt('Enter your email!');
// console.log('userAns', userAns); // email, null or empty string


/**
 * confirm
 * - Returns false or true
 */

// const userAns = confirm('Are you 18 years old?');
// console.log(userAns);
// if(userAns) {
//     console.log('You can drink')
// } else {
//     console.log('Can not drink')
// }

/**
 * innerHeight and innerWidth
 *  - Returns inner sizes of window
 */

console.log(window.innerHeight); // 340 or dynamic
console.log(window.innerWidth); // 470 or dynamic


/**
 * scrollTo(x,y)
 * - You can nagivate to any place in the window
 */

// Its not working here, try in browser console section
window.scrollTo(0,0) // x - 0, y - 0 => coordinates

/**
 * localStorage
 */

console.log('Length of localstorage', localStorage.length); // 0

// Set item to LS
localStorage.setItem('userEmail', 'abc@gmail.com');

// Get item from LS
const userEmail = localStorage.getItem('userEmail');
console.log(userEmail) // abc@gmail.com

// Store objects, arrays in LS

// Error
const userInfo = {name: 'Alex', browserInfo: 'chrome'}
localStorage.setItem('userInfo', userInfo);

const userInfoFromLS = localStorage.getItem('userInfo');
console.log(userInfoFromLS); // [object Object]

// Fix
const userInfo2 = {name: 'Jane', browserInfo: 'safari'}
localStorage.setItem('userInfo2', JSON.stringify(userInfo2));

const userInfo2FromLS = JSON.parse(localStorage.getItem('userInfo2'));
console.log(userInfo2FromLS)

// Delete item from LS
localStorage.removeItem('userInfo');

// Clear everything from LS
localStorage.clear();


location.reload();














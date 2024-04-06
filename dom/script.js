/**
 * window object
 */

// Client vs Server code
// window object is not available in server side
// Some environments use global as window
// window object is always available in client side (ex: browser)

// console.log(window); // ReferenceError: window is not defined
// console.log(global); // Global object

if(typeof window === undefined) {
    console.log('I am in client environment')
    console.log(window)
} else {
    console.log('I am in server environment')
    console.log(global);
}

/**
 * alert
 */

console.log(window.alert('Welcome to my page!'))






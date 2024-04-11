// ACCESSING DOM ELEMENTS
// window.document.methodName

/**
 * getElementById()
 */

const heading = document.getElementById('heading');
console.log(heading); // h1 element


/**
 * getElementsByClassName()
 *  - Returns HTMLCollection
 *  - HTMLCollection is similar to Arrays
 *  - forEach doesn't work on HTMLCollection
 */

const boxes = document.getElementsByClassName('box');
console.log(boxes); // HTMLCollection

// boxes.forEach(box => console.log(box)) // fails
for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    console.log(element)
}

/**
 * getElementsByTagName()
 */

const images = document.getElementsByTagName('img');
console.log(images);

// Loop
for (let i = 0; i < images.length; i++) {
    const element = images[i];
    console.log(element)
}
// Manually get items
console.log(images[0]);
console.log(images[1]);
console.log(images[2]);
// Using item() method
console.log(images.item(0));
console.log(images.item(1));
console.log(images.item(2));


/**
 * querySelector() 
 *  - Universal method
 *  - Returns only single element
 */

const heading1 = document.querySelector('#heading');
console.log('heading1', heading1)

const boxes1 = document.querySelector('.box');
console.log('boxes', boxes1)

const images1 = document.querySelector('img');
console.log('images1', images1)

/**
 * querySelectorAll()
 *  - Returns all matching elements
 *  - NodeList similar to Arrays
 */

// class="box" => .box
// id="box" => #box
// div => div

const boxes2 = document.querySelectorAll('.box');
console.log(boxes2); // NodeList

boxes2.forEach(box => console.log(box))
console.log(boxes2[0]);

const images2 = document.querySelectorAll('img');
console.log(images2)


// STYLING DOM ELEMENTS

console.log(heading.style); // CSSStyleDeclaration object
heading.style.color = 'red';
heading.style.border = "1px solid #000";

images2.forEach(imageEl => {
    imageEl.style.border = "5px solid"
})


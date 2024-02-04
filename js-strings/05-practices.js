let p1 = 'Hello'.toUpperCase().concat(' World').includes('o World');

console.log(p1); // false


let p2 = Math.pow(Math.abs(5 - 5), 3);

console.log(p2); // 0


let p3 = 'TechGlobal'.slice(3, 7).toUpperCase().includes('hG', 3);

console.log(p3); // false

let p4 = 'JavaScript'.startsWith('Java').endsWith('Script'); // Error

let p5 = 'Apple'.replaceAll('p', '$').indexOf('$$') >= 0;
const favMovies = [ 'Harry Potter', 'Godfather', 'Lord of the Rings' ];

// Destructuring - not preferred
const fav1 = favMovies[0];
const fav2 = favMovies[1];
const fav3 = favMovies[2];

// Better version 
const [ fav01, fav02, fav03 ] = favMovies;

console.log(fav02); // 'Godfather'
console.log(fav03); // 'Lord of the Rings'


const credentials = [ 'TechGlobalSchool', 'Test123', 'techglobal@gmail.com' ]; 

// Destructure username, password, email
const [ username, password, email ] = credentials;

console.log(username);
console.log(password);
console.log(email);


const numbers = [ -3, 10, 0, 100, 200 ];

const [ , ten, zero, , two_hundred ] = numbers;

console.log(two_hundred);
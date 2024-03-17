// Array destructuring

const arr = ['Biking', 'Coding', 'Reading', 'PS5'];

// const fav1Act = arr[0];
// const fav2Act = arr[1];
// const fav3Act = arr[2];
// const fav4Act = arr[3];

const [fav1Act, fav2Act, fav3Act, fav4Act] = arr;

console.log(fav2Act);


// Object destructuring
const person = {
    fName: 'John',
    lName: 'Doe',
    userName: 'johndoexxx',
    email: 'johndoe@gmail.com',
    password: 'John12345'
};

// const fname = person.fName;
// const lname = person.lName;
// const userName = person.userName;
// const email = person.email;
// const password = person.password;

// You can destructure all or some properties of the object and rename them as well
const { fName, lName, email: emailAddress} = person;

console.log(lName);
console.log(emailAddress);
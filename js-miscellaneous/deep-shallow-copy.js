const student1 = {
    fullname: 'Mustafa A',
    age: 25,
    address: {
        city: 'Chicago',
        state: 'IL'
    }
};

// Shallow copy
const student2 = {
    ...student1,
    fav_city: 'Chicago'
}

student1.age = 30;
student1.address.city = 'Des Plaines';

console.log(student1);
console.log(student2);



const person1 = {
    fullname: 'Mustafa A',
    age: 25,
    address: {
        city: 'Chicago',
        state: 'IL'
    }
};

// Deep Copy
const person2 = JSON.parse(JSON.stringify(person1));

person1.address.city = 'Des Plaines';
person2.state = 'MI';

console.log(person1);
console.log(person2);
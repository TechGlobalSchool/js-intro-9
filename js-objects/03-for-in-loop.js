const car = {
    color: 'red',
    year: 2023,
    make: 'BMW',
    model: 'X7'
};

// console.log(car['color']);
// console.log(car['year']);
// console.log(car['make']);
// console.log(car['model']);

for(const key in car) {
    console.log(car[key]);
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami', 'Berlin', 'Madrid', 'Monaco'],
    address: {
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: 12345,
        country: 'US'
    },
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null,
    numberOfKids: 7
};

for(const x in person) {
    console.log(person[x]);
}

for(const y in person.address) {
    console.log(person.address[y]);
}
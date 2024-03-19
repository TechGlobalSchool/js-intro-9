/*
Create a constructor called Car
and define 4 properties as below

year
make
model
price

Create and add 2 prototype function the Car prototype
drive -> {year make model} drives.
stop  -> {year make model} stops.

Create 3 car objects with belwo info
car1 -> 2023 Tesla X 80000
car2 -> 2022 BMW X7 60000
car3 -> 2020 Tesla Y 27000

1. Log each car info to the console
2. Execute drive and stop functions for each car
3. Get each cars price information in the format -> {year make model} is ${price}.
Example: 2023 Tesla X is $80000.
*/


// BEFORE ES6
/*
function Car(year, make, model, price) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
}

Car.prototype.drive = function () {
    console.log(`${this.year} ${this.make} ${this.model} drives.`);
}

Car.prototype.stop = function () {
    console.log(`${this.year} ${this.make} ${this.model} stops.`);
}


const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2023, 'Tesla', 'Y', 27000);

console.log('\n-------Solution with for...of loop------------\n');
const allcars = [car1, car2, car3];

for(const car of allcars) {
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.model} is $${car.price}.`);
}

console.log('\n-------Solution with forEach() method------------\n');

[car1, car2, car3].forEach((car) =>  {
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.model} is $${car.price}.`);
});

*/

// AFTER ES6 - classes
class Car {
    // create a constructor
    constructor(year, make, model, price) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.price = price;
    }

    drive() {
        console.log(`${this.year} ${this.make} ${this.model} drives.`);
    }

    stop() {
        console.log(`${this.year} ${this.make} ${this.model} stops.`);
    }
}


const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2023, 'Tesla', 'Y', 27000);

const allcars = [car1, car2, car3];

for(const car of allcars) {
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.model} is $${car.price}.`);
}
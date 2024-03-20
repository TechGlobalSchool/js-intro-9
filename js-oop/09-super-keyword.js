class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    // methods
    eat() {
        console.log('EAT');
    }
}


class Customer extends Person {
    constructor(fname, lname, age, id) {
        super(fname, lname, age);
        this.id = id;
    }
}


const cust = new Customer('John', 'Doe', 25, 1);

console.log(cust);
cust.eat();

class VIPCustomer extends Customer {
    constructor(fname, lname, age, id, vipID) {
        super(fname, lname, age, id);
        this.vipID = vipID;
    }
}

const rabe = new VIPCustomer('Rabe', 'A', 25, 2, 1);
console.log(rabe);
console.log(rabe.vipID);
const person = {
    first_name: 'Adam',
    last_name: 'Smith',
    date_of_birth: 1790,
    isAlive: false,
    fullname: function () {
        return `${this.first_name} ${this.last_name}`;
    },
    info: function () {
        return `${this.fullname()} was born in ${this.date_of_birth}.`;
    }
};

// this is a keyword refers to the current object
// Create a person function named as info and it returns information as shown -> 'Adam Smith was born in 1790.'

console.log(person.fullname()); // Adam Smith
console.log(person.info()); // Adam Smith was born in 1790.
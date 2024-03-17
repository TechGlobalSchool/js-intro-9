// Teacher constructor with fname, lname, age, field properties

function Teacher(fname, lname, age, field) {
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.major = field;
}

// Create 2 Teacher Prototype methods as teach and giveHomework with empty bodies
Teacher.prototype.teach = function() {
    console.log(`${this.firstname} teaches ${this.major}.`);
}

Teacher.prototype.giveHomework = function() {
    console.log(`${this.firstname} gives homework.`);
}

// Create 3 Teacher Objects
const teacher1 = new Teacher('Alex', 'Morgan', 47, 'Math');
const teacher2 = new Teacher('Bobby', 'B', 45, 'Botanical Sciences');
const teacher3 = new Teacher('Johnny', 'B', 45, 'Chemical Engineer');


// Store all the ages in an array -> [47, 45, 45]
// Store all the first names in an array -> [ 'Alex', 'Bobby', 'Johnny' ]
// Find and print ythe information of the oldest teacher -> Alex is oldest with the age 47.
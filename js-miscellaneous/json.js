let credentials = `
    {
        "username": "TechGlobal",
        "password": "1234",
        "language": "JS"
    }
`;

credentials.slice(credentials.indexOf('username'))


const obj = JSON.parse(credentials);

console.log(typeof credentials); // 'string'
console.log(typeof obj); // 'object'

console.log(obj);
console.log(obj.username);
console.log(obj.password);


const student = {
    id: 123,
    fname: 'Alex',
    lname: 'Smith',
    dob: '11/11/2000',
    email: 'alex@gmail.com'
};

let studentJson = JSON.stringify(student);

console.log(typeof student); // 'object'
console.log(typeof studentJson); // 'string'

console.log(student);
console.log(studentJson);
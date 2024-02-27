const numbers = [ 1, 2, 3 ]; // one-dimensional array 


const students = [
    [
        ['Ameer', 'Ali', 'Hicran'],
        ['Emre', 'Abdullah', 'Tania', 'Mustafa'],
        ['Marta', 'Niko', 'Mykola']
    ],
    [
        ['Jane', 'Alex', 'John'],
        ['Maria', 'Max']
    ]
];

console.log(students.length); // 2
console.log(students[0].length); // 3 
console.log(students[0][1].length); // 4 
console.log(students[0][1][2]); // 'Tania' 


// Get and print 'Max'
console.log(students[1][1][1]); // 'Max'


// In total, how many students we have? 15
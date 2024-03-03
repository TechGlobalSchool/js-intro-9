
// 24 hours loop 

// 00:01:00
let attempt = 0;

for(let i = 1; i <= 24; i++) {
    console.log('Hour', i);

    for(let j = 1; j <= 60; j++) {
        console.log('\tMinute', j);

        for(let k = 1; k <= 60; k++) {
            console.log('\t\tSecond', k);
            attempt++;
        }
    }
}

console.log(attempt); // 86400



for(let i = 1; i <= 3; i++) { // i = 3
    console.log(i); // 3
    console.log('Inner loop'); // Inner loop
    for(let j = 1; j <= 5; j++) { // j = 5
        console.log('\t' + j); // 5
    }
}


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

for(let i = 0; i < students.length; i++) {
    for(let j = 0; j < students[i].length; j++) {
        for(let k = 0; k < students[i][j].length; k++) {
            console.log(students[i][j][k]);
        }
    }
}
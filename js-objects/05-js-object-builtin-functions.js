const car = {
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7' 
};

// Keys: color, year, make and model
// Values: 'red', 2023, 'BMW', and 'X7'
// Key-Value Pairs: 

console.log(Object.keys(car)); // [ 'color', 'year', 'make', 'model' ]
console.log(Object.values(car)); // [ 'red', 2023, 'BMW', 'X7' ]
console.log(Object.entries(car)); // [ [ 'color', 'red' ], [ 'year', 2023 ], [ 'make', 'BMW' ], [ 'model', 'X7' ] ]

for(const key of Object.keys(car)){
    console.log(key);
}
/*
color
year
make
model
*/


for(const value of Object.values(car)) {
    console.log(value);
}
/*
red
2023
BMW
X7
*/


for(const entry of Object.entries(car)) {
    console.log(entry);
}
/*
[ 'color', 'red' ]
[ 'year', 2023 ]
[ 'make', 'BMW' ]
[ 'model', 'X7' ]
*/

for(const [key, value] of Object.entries(car)) {
    console.log(key, value);
}